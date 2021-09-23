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
  mutate,
  id = undefined,
  text = ""
}) => {
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = "";
    mutate(text, id);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    className: "messages__input",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
      ref: textRef,
      defaultValue: text,
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
      lineNumber: 22,
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
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\LG\\Documents\\GitHub\\local-api\\client\\components\\MsgItem.js";





const MsgItem = ({
  id,
  userId,
  timestamp,
  text,
  onUpdate,
  isEditing,
  startEdit,
  onDelete
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
    className: "message__item",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
      children: [userId, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sub", {
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
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
        mutate: onUpdate,
        text: text,
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined)
    }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: startEdit,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: onDelete,
        children: "\uC0AD\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const onCreate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(text => {
    const newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: `${msgs.length + 1} ${text}`
    };
    setMsgs(msgs => [newMsg, ...msgs]);
  }, []);
  const onUpdate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text, id) => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        text
      }));
      return newMsgs;
    });
    doneEdit();
  }, []);

  const onDelete = id => {
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const doneEdit = () => {
    setEditingId(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        startEdit: () => setEditingId(x.id),
        onDelete: () => onDelete(x.id),
        isEditing: editingId === x.id
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO0FBQ3JCVixJQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBLGdCQUNHSixJQUFJLENBQUNKLEdBQUwsQ0FBVWtCLENBQUQsaUJBQ1IsOERBQUMsNkNBQUQsa0NBRU1BLENBRk47QUFHRSxnQkFBUSxFQUFFdEMsUUFIWjtBQUlFLGlCQUFTLEVBQUUsTUFBTTJCLFlBQVksQ0FBQ1csQ0FBQyxDQUFDbkQsRUFBSCxDQUovQjtBQUtFLGdCQUFRLEVBQUUsTUFBTWdCLFFBQVEsQ0FBQ21DLENBQUMsQ0FBQ25ELEVBQUgsQ0FMMUI7QUFNRSxpQkFBUyxFQUFFdUMsU0FBUyxLQUFLWSxDQUFDLENBQUNuRDtBQU43QixVQUNPbUQsQ0FBQyxDQUFDbkQsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLGtCQURGO0FBaUJELENBL0REOztBQWlFQSxpRUFBZW9DLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7OztBQUVBLE1BQU1nQixJQUFJLEdBQUcsTUFBTTtBQUNqQixzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBUEQ7O0FBU0EsaUVBQWVBLElBQWY7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCBpZCA9IHVuZGVmaW5lZCwgdGV4dCA9IFwiXCIgfSkgPT4ge1xyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgbXV0YXRlKHRleHQsIGlkKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwibWVzc2FnZXNfX2lucHV0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgcmVmPXt0ZXh0UmVmfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuuCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuXCJcclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7JmE66OMPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5cclxuY29uc3QgTXNnSXRlbSA9ICh7XHJcbiAgaWQsXHJcbiAgdXNlcklkLFxyXG4gIHRpbWVzdGFtcCxcclxuICB0ZXh0LFxyXG4gIG9uVXBkYXRlLFxyXG4gIGlzRWRpdGluZyxcclxuICBzdGFydEVkaXQsXHJcbiAgb25EZWxldGUsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VfX2l0ZW1cIj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIHt1c2VySWR9XHJcbiAgICAgICAgPHN1Yj5cclxuICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKFwia28tS1JcIiwge1xyXG4gICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcclxuICAgICAgICAgICAgaG91cjEyOiB0cnVlLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zdWI+XHJcbiAgICAgIDwvaDM+XHJcblxyXG4gICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIHRleHRcclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuXHJcbmNvbnN0IFVzZXJJZHMgPSBbXCJyb3lcIiwgXCJqYXlcIl07XHJcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJvdW5kKCkpXTtcclxuXHJcbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxyXG4gIC5maWxsKDApXHJcbiAgLm1hcCgoXywgaSkgPT4gKHtcclxuICAgIGlkOiA1MCAtIGksXHJcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgKDUwIC0gaSkgKiAxMDAwICogNjAsXHJcbiAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGAsXHJcbiAgfSkpO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgb25DcmVhdGUgPSB1c2VDYWxsYmFjaygodGV4dCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNnID0ge1xyXG4gICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxyXG4gICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXHJcbiAgICB9O1xyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25VcGRhdGUgPSB1c2VDYWxsYmFjaygodGV4dCwgaWQpID0+IHtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcclxuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgICBkb25lRWRpdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSAoaWQpID0+IHtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHtcclxuICAgIHNldEVkaXRpbmdJZChudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxyXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTXNnTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nc2dMaXN0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+U2ltcGxlIFNOUzwvaDE+XHJcbiAgICAgIDxNc2dMaXN0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJpZCIsInVuZGVmaW5lZCIsInRleHQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJNc2dJdGVtIiwidXNlcklkIiwidGltZXN0YW1wIiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJvbkRlbGV0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJ1c2VTdGF0ZSIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwibm93IiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJ4IiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=