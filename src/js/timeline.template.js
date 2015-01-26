(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['timeline.hbs'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "            <li>\n              <div class=\"timeline-widget--dot\"></div>\n              <div class=\"timeline-widget-dropdown--item\" data-slide=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n                "
    + escapeExpression(((helper = (helper = helpers['short-desc'] || (depth0 != null ? depth0['short-desc'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"short-desc","hash":{},"data":data}) : helper)))
    + "\n              </div>\n            </li>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "          <li class=\"timeline-widget-item\">\n            <div class=\"timeline-widget-item--header\">\n              <div class=\"timeline-widget-item--headline\">\n                <div class=\"timeline-widget-item--category\">Ocha <div class=\"arrow\"></div></div> <div class=\"timeline-widget-item--date\">"
    + escapeExpression(((helper = (helper = helpers['date-full'] || (depth0 != null ? depth0['date-full'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"date-full","hash":{},"data":data}) : helper)))
    + "</div>\n              </div>\n              <h1 class=\"timeline-widget-item--title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n            </div>\n            <div class=\"timeline-widget-item--content clearfix\">\n              <div class=\"timeline-widget-item--image grid--item\">\n                <div class=\"timeline-widget-item--image--icons\">\n                  <a class=\"timeline-widget-item--image--view-more\"><img src=\"../../images/eye-img.png\"></a>\n                  <a class=\"timeline-widget-item--image--country\">"
    + escapeExpression(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"country","hash":{},"data":data}) : helper)))
    + "</a>\n                </div>\n                <img src=\"../../images/timeline-img.png\">\n              </div>\n              <div class=\"timeline-widget-item--description grid--item\">\n                ";
  stack1 = ((helper = (helper = helpers['long-desc'] || (depth0 != null ? depth0['long-desc'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"long-desc","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                <div class=\"timeline-widget-item-link\">\n                  <a class=\"btn\" href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\"><span class=\"un-icon-product_type_report\"></span> Read full report</a>\n                </div>\n              </div>\n            </div>\n          </li>\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "        <li>\n          <div class=\"timeline-widget-pager--item\" data-slide=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n            <div class=\"timeline-widget--dot\"></div>\n            <div class=\"timeline-widget-pager--item-content\">\n              "
    + escapeExpression(((helper = (helper = helpers['short-desc'] || (depth0 != null ? depth0['short-desc'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"short-desc","hash":{},"data":data}) : helper)))
    + "\n            </div>\n          </div>\n        </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, buffer = "<div class=\"timeline-widget-wrapper\">\n  <div class=\"timeline-widget\">\n\n    <div class=\"timeline-widget--controls\">\n      <button class=\"prev\"><div class=\"arrow\"></div></button>\n      <button class=\"next\"><div class=\"arrow\"></div></button>\n    </div><!-- .timeline-widget--controls -->\n\n    <div class=\"timeline-widget--dropdown\">\n      <div class=\"timeline-widget--dropdown-heading\">\n        <span class=\"un-icon-product_type_report\"></span> Timeline - Calendar</div>\n      <div class=\"clear-both\"></div>\n      <div class=\"timeline-widget--dropdown--wrapper\">\n        <div class=\"timeline-widget--dropdown-controls\">\n          <div class=\"form-select\">\n            <select name=\"year\">\n            </select>\n          </div>\n          <div class=\"form-select\">\n            <select name=\"month\"></select>\n          </div>\n          <span class=\"close\"></span>\n        </div>\n        <div class=\"timeline-widget--dropdown--container\">\n          <ul class=\"slidee\">\n";
  stack1 = ((helper = (helper = helpers['timeline-items'] || (depth0 != null ? depth0['timeline-items'] : depth0)) != null ? helper : helperMissing),(options={"name":"timeline-items","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['timeline-items']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "          </ul>\n        </div>\n      </div>\n    </div><!-- .timeline-widget--controls -->\n\n    <div class=\"timeline-widget-frames-wrapper\">\n      <div class=\"timeline-widget-frames\">\n        <ul class=\"slidee\">\n";
  stack1 = ((helper = (helper = helpers['timeline-items'] || (depth0 != null ? depth0['timeline-items'] : depth0)) != null ? helper : helperMissing),(options={"name":"timeline-items","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['timeline-items']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </ul>\n        <div class=\"clear-both\"></div>\n      </div><!-- .timeline-widget-frames -->\n    </div><!-- .timeline-widget-frames-wrapper -->\n\n    <div class=\"timeline-widget-pager\">\n      <ul class=\"\">\n";
  stack1 = ((helper = (helper = helpers['timeline-items'] || (depth0 != null ? depth0['timeline-items'] : depth0)) != null ? helper : helperMissing),(options={"name":"timeline-items","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers['timeline-items']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </ul>\n      <div class=\"clear-both\"></div>\n    </div><!-- .timeline-widget-pager -->\n    <div class=\"timeline-widget-pager--current\"></div>\n\n  </div>\n\n</div>";
},"useData":true});
})();