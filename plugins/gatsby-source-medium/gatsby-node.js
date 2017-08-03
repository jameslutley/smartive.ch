'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _medium = require('./medium');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.sourceNodes = async function (_ref, _ref2) {
  var boundActionCreators = _ref.boundActionCreators;
  var username = _ref2.username;
  var createNode = boundActionCreators.createNode;

  try {
    var _Array$prototype;

    var response = await (0, _medium.fetchLatestByUser)(username);
    var textBody = await response.text();
    var json = JSON.parse((0, _medium.removeXSSIPrefix)(textBody));

    var posts = json.payload.posts;

    var collectionKeys = Object.keys(json.payload.references.Collection);
    var userKeys = Object.keys(json.payload.references.User);

    var importableResources = [posts, collectionKeys.map(function (key) {
      return json.payload.references.Collection[key];
    }), userKeys.map(function (key) {
      return json.payload.references.User[key];
    })];

    var resources = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, importableResources);

    resources.map(function (resource) {
      var digest = _crypto2.default.createHash('md5').update(JSON.stringify(resource)).digest('hex');

      var node = _extends({}, resource, {
        id: resource.id ? resource.id : resource.userId,
        parent: '__SOURCE__',
        children: [],
        internal: {
          mediaType: 'application/json',
          type: 'Medium' + resource.type,
          content: resource.title ? resource.title : resource.name,
          contentDigest: digest
        }
      });

      console.info('=> Creating ' + resource.type + ' ' + (resource.title ? resource.title : resource.name));
      createNode(node);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
