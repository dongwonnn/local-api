"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\LG\\Documents\\GitHub\\local-api\\client\\components\\MsgItem.js";



const MsgItem = ({
  userId,
  timestamp,
  text
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
    className: "message__item",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
      children: [userId, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("sub", {
        children: new Date(timestamp).toLocaleString("ko-KR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), text]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\LG\\Documents\\GitHub\\local-api\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const UserIds = ["roy", "jay"];

const getRandomUserId = () => UserIds[Math.round(Math.round())];

const msgs = Array(50).fill(0).map((_, i) => ({
  id: 50 - i,
  userId: getRandomUserId(),
  timestamp: 1234567890123 + (50 - i) * 1000 * 60,
  text: `${50 - i} mock text`
}));

const MsgList = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
    className: "messages",
    children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread({}, x), x.id, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\LG\\Documents\\GitHub\\local-api\\client\\pages\\index.js";




const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      children: "Simple SNS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxNQUFGO0FBQVVDLEVBQUFBLFNBQVY7QUFBcUJDLEVBQUFBO0FBQXJCLENBQUQsS0FBaUM7QUFDL0Msc0JBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBLDRCQUNFO0FBQUEsaUJBQ0dGLE1BREgsZUFFRTtBQUFBLGtCQUNHLElBQUlHLElBQUosQ0FBU0YsU0FBVCxFQUFvQkcsY0FBcEIsQ0FBbUMsT0FBbkMsRUFBNEM7QUFDM0NDLFVBQUFBLElBQUksRUFBRSxTQURxQztBQUUzQ0MsVUFBQUEsS0FBSyxFQUFFLFNBRm9DO0FBRzNDQyxVQUFBQSxHQUFHLEVBQUUsU0FIc0M7QUFJM0NDLFVBQUFBLElBQUksRUFBRSxTQUpxQztBQUszQ0MsVUFBQUEsTUFBTSxFQUFFLFNBTG1DO0FBTTNDQyxVQUFBQSxNQUFNLEVBQUU7QUFObUMsU0FBNUM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQWVHUixJQWZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUJELENBcEJEOztBQXNCQSxpRUFBZUgsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7O0FBRUEsTUFBTVksT0FBTyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBaEI7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHLE1BQU1ELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0MsS0FBTCxFQUFYLENBQUQsQ0FBckM7O0FBRUEsTUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQ1ZDLElBRFUsQ0FDTCxDQURLLEVBRVZDLEdBRlUsQ0FFTixDQUFDQyxDQUFELEVBQUlDLENBQUosTUFBVztBQUNkQyxFQUFBQSxFQUFFLEVBQUUsS0FBS0QsQ0FESztBQUVkcEIsRUFBQUEsTUFBTSxFQUFFWSxlQUFlLEVBRlQ7QUFHZFgsRUFBQUEsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUttQixDQUFOLElBQVcsSUFBWCxHQUFrQixFQUgvQjtBQUlkbEIsRUFBQUEsSUFBSSxFQUFHLEdBQUUsS0FBS2tCLENBQUU7QUFKRixDQUFYLENBRk0sQ0FBYjs7QUFTQSxNQUFNRSxPQUFPLEdBQUcsTUFBTTtBQUNwQixzQkFDRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUEsY0FDR1AsSUFBSSxDQUFDRyxHQUFMLENBQVVLLENBQUQsaUJBQ1IsOERBQUMsNkNBQUQsb0JBQXdCQSxDQUF4QixHQUFjQSxDQUFDLENBQUNGLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQVJEOztBQVVBLGlFQUFlQyxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFFQSxNQUFNRSxJQUFJLEdBQUcsTUFBTTtBQUNqQixzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBUEQ7O0FBU0EsaUVBQWVBLElBQWY7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoeyB1c2VySWQsIHRpbWVzdGFtcCwgdGV4dCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlX19pdGVtXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICB7dXNlcklkfVxyXG4gICAgICAgIDxzdWI+XHJcbiAgICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZyhcImtvLUtSXCIsIHtcclxuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgIG1vbnRoOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc3ViPlxyXG4gICAgICA8L2gzPlxyXG5cclxuICAgICAge3RleHR9XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuXHJcbmNvbnN0IFVzZXJJZHMgPSBbXCJyb3lcIiwgXCJqYXlcIl07XHJcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJvdW5kKCkpXTtcclxuXHJcbmNvbnN0IG1zZ3MgPSBBcnJheSg1MClcclxuICAuZmlsbCgwKVxyXG4gIC5tYXAoKF8sIGkpID0+ICh7XHJcbiAgICBpZDogNTAgLSBpLFxyXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLFxyXG4gICAgdGV4dDogYCR7NTAgLSBpfSBtb2NrIHRleHRgLFxyXG4gIH0pKTtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICB7bXNncy5tYXAoKHgpID0+IChcclxuICAgICAgICA8TXNnSXRlbSBrZXk9e3guaWR9IHsuLi54fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1zZ0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXNnTGlzdFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlNpbXBsZSBTTlM8L2gxPlxyXG4gICAgICA8TXNnTGlzdCAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJNc2dJdGVtIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwibXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJNc2dMaXN0IiwieCIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9