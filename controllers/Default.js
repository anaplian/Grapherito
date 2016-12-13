'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.graph_requestsGraphRequestIDGET = function graph_requestsGraphRequestIDGET (req, res, next) {
  Default.graph_requestsGraphRequestIDGET(req.swagger.params, res, next);
};

module.exports.graph_requestsPOST = function graph_requestsPOST (req, res, next) {
  Default.graph_requestsPOST(req.swagger.params, res, next);
};
