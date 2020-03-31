"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NormalTree;

var _react = _interopRequireDefault(require("react"));

var _utils = require("./utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NormalTree(props) {
  var name = props.name,
      value = props.value,
      line = props.line,
      showIndex = props.showIndex,
      type = props.type,
      needComma = props.needComma,
      _props$level = props.level,
      level = _props$level === void 0 ? 1 : _props$level;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "x-json-line"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "x-json-mark",
    style: (0, _utils.getLeft)(level)
  }, line), /*#__PURE__*/_react["default"].createElement("span", {
    className: "x-json-content"
  }, showIndex && /*#__PURE__*/_react["default"].createElement("span", {
    className: "x-json-key"
  }, name, ": "), /*#__PURE__*/_react["default"].createElement("span", {
    className: "x-json-".concat(type)
  }, value), /*#__PURE__*/_react["default"].createElement("span", {
    className: "x-json-comma"
  }, needComma ? ',' : '')));
}