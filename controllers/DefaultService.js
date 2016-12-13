'use strict';

exports.graph_requestsGraphRequestIDGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * graphRequestID (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "imageStatus" : "FINSIHED",
  "imageURL" : "http://example.com/images/aca38948-3861-460d-86bc-4f7eee3e33de.png"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.graph_requestsPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * graphRequestBody (GraphRequestBody)
  **/
    var examples = {};
  examples['application/json'] = {
  "graphRequestID" : "aca38948-3861-460d-86bc-4f7eee3e33de",
  "pollingURL" : "http://example.com/graph-requests/aca38948-3861-460d-86bc-4f7eee3e33de"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

