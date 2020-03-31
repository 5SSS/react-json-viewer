"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tree;

var _react = _interopRequireDefault(require("react"));

var _utils = require("./utils.js");

var _complexTree = _interopRequireDefault(require("./complexTree.js"));

var _normalTree = _interopRequireDefault(require("./normalTree.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Tree(props) {
  var type = props.type;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (0, _utils.needFormat)(type) ? /*#__PURE__*/_react["default"].createElement(_complexTree["default"], props) : /*#__PURE__*/_react["default"].createElement(_normalTree["default"], props));
}