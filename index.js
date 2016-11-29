/**
 * Created by fima on 29/11/16.
 */
var path = require("path");
var loaderUtils = require("loader-utils");


module.exports = function(content) {
  if(this.cacheable) this.cacheable();
  var callback = this.async();

  var cleanContent = content
    .replace(/\/\*(.|\n)*?\*\//gm, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/(['"])((?:(?!\1).)*?)\1/gm, '');
  var classes = cleanContent.match(/\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/gm) || [];
  var uniqueClasses = classes.filter(function(item, pos) {
    return classes.indexOf(item) == pos;
  });
  uniqueClasses = uniqueClasses.sort(function(a,b){
    return b.length - a.length;
  }).map(function(v) {
    return v.split('.')[1];
  });
  for (var i=0;i<uniqueClasses.length;i++) {
    content = content.split('.'+uniqueClasses[i]).join('.___' + uniqueClasses[i] + '__');
  }

  callback(null, content);
};