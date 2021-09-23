"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\LG\\Documents\\GitHub\\local-api\\client\\components\\MsgInput.js";



const MsgInput = ({
  mutate
}) => {
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = "";
    mutate(text);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    className: "messages__input",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
      ref: textRef,
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);

/***/ }),

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
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\LG\\Documents\\GitHub\\local-api\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const UserIds = ["roy", "jay"];

const getRandomUserId = () => UserIds[Math.round(Math.round())];

const originalMsgs = Array(50).fill(0).map((_, i) => ({
  id: 50 - i,
  userId: getRandomUserId(),
  timestamp: 1234567890123 + (50 - i) * 1000 * 60,
  text: `${50 - i} mock text`
}));

const MsgList = () => {
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(originalMsgs);

  const onCreate = text => {
    const newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1} ${text}`
    };
    setMsgs(msgs => [newMsg, ...msgs]);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread({}, x), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFmOzs7Ozs7Ozs7O0FDWkE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSW5wdXQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNc2dJbnB1dCA9ICh7IG11dGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBtdXRhdGUodGV4dCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pbnB1dFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC5cIiAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoeyB1c2VySWQsIHRpbWVzdGFtcCwgdGV4dCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlX19pdGVtXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICB7dXNlcklkfVxyXG4gICAgICAgIDxzdWI+XHJcbiAgICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZyhcImtvLUtSXCIsIHtcclxuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgIG1vbnRoOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc3ViPlxyXG4gICAgICA8L2gzPlxyXG5cclxuICAgICAge3RleHR9XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuXHJcbmNvbnN0IFVzZXJJZHMgPSBbXCJyb3lcIiwgXCJqYXlcIl07XHJcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJvdW5kKCkpXTtcclxuXHJcbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4gIC5maWxsKDApXHJcbiAgLm1hcCgoXywgaSkgPT4gKHtcclxuICAgIGlkOiA1MCAtIGksXHJcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgKDUwIC0gaSkgKiAxMDAwICogNjAsXHJcbiAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGAsXHJcbiAgfSkpO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xyXG5cclxuICBjb25zdCBvbkNyZWF0ZSA9ICh0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgIH07XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcclxuICAgICAgICAgIDxNc2dJdGVtIGtleT17eC5pZH0gey4uLnh9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTXNnTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nc2dMaXN0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+U2ltcGxlIFNOUzwvaDE+XHJcbiAgICAgIDxNc2dMaXN0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0ZXh0IiwiY3VycmVudCIsInZhbHVlIiwiTXNnSXRlbSIsInVzZXJJZCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJ1c2VTdGF0ZSIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwiTXNnTGlzdCIsIm1zZ3MiLCJzZXRNc2dzIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJub3ciLCJ4IiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=