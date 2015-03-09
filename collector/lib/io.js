var fs = require('fs-extra');
var path = require('path');
var agent = require('superagent');


module.exports = function() {
  var module = {};

  module.fileExists = function(filePath) {
    var stat = fs.statSync(filePath);
    if (!stat.isFile()) {
      return console.error('File "' + filePath + '" could not be found.');
    }

    return true;
  };

  module.readJSON = function(filePath) {
    try {
      var json = fs.readJsonSync(filePath);
    }
    catch(e) {
      return console.error('File "' + filePath + '" was empty or produced no valid JSON.');
    }

    return json;
  };

  module.writeJSON = function(data, filePath) {
    fs.outputJson(filePath, data, function(err) {
      if (err) {
        return console.error(err);
      }
      else {
        return console.log('JSON saved to ' + filePath);
      }
    });
  };

  module.download = function(url, dest, transformer) {
    var request = agent.get(url).end(function(err, response) {
      if (err) {
        return false;
      }
      else if (response.error) {
        return console.error('HTTP ' + response.status + ': ' + response.error.message);
      }

      try {
        var json = JSON.parse(response.text);
      }
      catch(e) {
        return console.error('Data retrieved from "' + url + '" is not valid JSON.');
      }

      module.writeJSON(transformer(json), dest);

      return true;
    });

    return true;
  };

  module.purgeUnknown = function(dir, list) {
    fs.readdir(dir, function(err, found) {
      found.forEach(function(item) {
        if (list.indexOf(item) == -1) {
          var deprecated = path.join(dir, item);
          var tmp = path.join('/tmp/crisis-page', item);
          fs.move(deprecated, tmp, function(err) {
            if (err) {
              return console.warn('Deprecated file "' + deprecated + '" identified and left in place. Could not move to "' + tmp + '"');
            }
            return console.log('Deprecated file "' + deprecated + '" found and moved to "' + tmp + '"');
          });
        }
      });
    });
  };

  return module;
};
