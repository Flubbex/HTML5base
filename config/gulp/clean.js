var select  = require("./select");
var path    = require("./path");

module.exports = [
  path.dist,
  path.release,
  path.doc_js+select.app,
  path.doc_css+select.surface_css,
  path.doc_disc+select.all,
  path.doc_docs+select.all
];
