'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLatestPosts = exports.removeXSSIPrefix = exports.XSSIPrefix = exports.fetchLatestByUser = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchLatestByUser = exports.fetchLatestByUser = async function fetchLatestByUser(username) {
  var baseUrl = 'https://medium.com/' + username + '/latest?format=json';
  var response = await (0, _nodeFetch2.default)(baseUrl);

  if (!response.ok) {
    throw new Error('Invalid Medium Response (' + response.status + ')');
  }

  return response;
};

var XSSIPrefix = exports.XSSIPrefix = '])}while(1);</x>';

var removeXSSIPrefix = exports.removeXSSIPrefix = function removeXSSIPrefix(payload) {
  var cleanPayload = payload.replace(XSSIPrefix, '');
  return cleanPayload;
};

var getLatestPosts = exports.getLatestPosts = async function getLatestPosts(username) {
  try {
    var response = await fetchLatestByUser(username);
    var responseBody = await response.text();
    var json = JSON.parse(removeXSSIPrefix(responseBody));

    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
};
