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
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
  onDelete,
  myId
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
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
        mutate: onUpdate,
        text: text,
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)
    }, void 0, false) : text, myId === userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: startEdit,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: onDelete,
        children: "\uC0AD\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\LG\\Documents\\GitHub\\local-api\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import useInfinieScroll from "../hooks/useInfinityScroll";




const MsgList = ({
  smsgs,
  users
}) => {
  const {
    query: {
      userId = ""
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(smsgs);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const fetchMoreElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: hasNext,
    1: setHasNext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // const intersecting = useInfinieScroll(fetchMoreElement);

  const onCreate = async text => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)("post", "messages", {
      text,
      userId
    });
    if (!newMsg) throw Error("something wrong");
    setMsgs(msgs => [newMsg, ...msgs]);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)("put", `messages/${id}`, {
      text,
      userId
    });
    if (!newMsg) throw Error("something wrong");
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = async id => {
    const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)("delete", `messages/${id}`, {
      userId
    });
    if (!receivedId) throw Error("something wrong");
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
  }; // useEffect는 async 사용을 피하고 있음. 때문에 함수를 따로 빼서 사용


  const getMessages = async () => {
    var _;

    const newMsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__.default)("get", "/messages", {
      params: {
        cursor: msgs[msgs.length - ((_ = 1) === null || _ === void 0 ? void 0 : _.id) || ""]
      }
    });

    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }

    setMsgs(newMsgs);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (intersecting && hasNext) getMessages;
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        startEdit: () => setEditingId(x.id),
        onDelete: () => onDelete(x.id),
        isEditing: editingId === x.id,
        myId: userId
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      ref: fetchMoreElement
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);

/***/ }),

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = "http://localhost:4000";

const fetcher = async (method, url, ...rest) => {
  const res = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, ...rest);
  return res.data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher); // ...rest의 의미..

/*
axios.get(url[, config])
axios.delete(url[, config])
axios.post(url,data[, config])
axios.put(url,data[, config])
*/

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\LG\\Documents\\GitHub\\local-api\\client\\pages\\index.js";






const Home = ({
  smsgs,
  users
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Simple SNS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__.default, {
      smsgs: smsgs,
      users: users
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

const getServerSideProps = async () => {
  const smsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_2__.default)("get", "/messages");
  const users = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_2__.default)("get", "/users");
  return {
    props: {
      smsgs,
      users
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLE1BQU1ILGlEQUFPLENBQUMsS0FBRCxFQUFRLFFBQVIsQ0FBM0I7QUFDQSxTQUFPO0FBQ0x1QyxJQUFBQSxLQUFLLEVBQUU7QUFBRXJDLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUE7QUFBVDtBQURGLEdBQVA7QUFHRCxDQU5NO0FBUVAsaUVBQWVrQyxJQUFmOzs7Ozs7Ozs7O0FDckJBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCBpZCA9IHVuZGVmaW5lZCwgdGV4dCA9IFwiXCIgfSkgPT4ge1xyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgbXV0YXRlKHRleHQsIGlkKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pbnB1dFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIHJlZj17dGV4dFJlZn1cclxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RleHR9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyZhOujjDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoe1xyXG4gIGlkLFxyXG4gIHVzZXJJZCxcclxuICB0aW1lc3RhbXAsXHJcbiAgdGV4dCxcclxuICBvblVwZGF0ZSxcclxuICBpc0VkaXRpbmcsXHJcbiAgc3RhcnRFZGl0LFxyXG4gIG9uRGVsZXRlLFxyXG4gIG15SWQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VfX2l0ZW1cIj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIHt1c2VySWR9XHJcbiAgICAgICAgPHN1Yj5cclxuICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKFwia28tS1JcIiwge1xyXG4gICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcclxuICAgICAgICAgICAgaG91cjEyOiB0cnVlLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zdWI+XHJcbiAgICAgIDwvaDM+XHJcblxyXG4gICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIHRleHRcclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi9mZXRjaGVyXCI7XHJcbi8vIGltcG9ydCB1c2VJbmZpbmllU2Nyb2xsIGZyb20gXCIuLi9ob29rcy91c2VJbmZpbml0eVNjcm9sbFwiO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICh7IHNtc2dzLCB1c2VycyB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcXVlcnk6IHsgdXNlcklkID0gXCJcIiB9LFxyXG4gIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShzbXNncyk7XHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGZldGNoTW9yZUVsZW1lbnQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAvLyBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbmllU2Nyb2xsKGZldGNoTW9yZUVsZW1lbnQpO1xyXG5cclxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jICh0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKFwicG9zdFwiLCBcIm1lc3NhZ2VzXCIsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG5cclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInB1dFwiLCBgbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcclxuXHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKFwiZGVsZXRlXCIsIGBtZXNzYWdlcy8ke2lkfWAsIHsgdXNlcklkIH0pO1xyXG5cclxuICAgIGlmICghcmVjZWl2ZWRJZCkgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcblxyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4ge1xyXG4gICAgc2V0RWRpdGluZ0lkKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIC8vIHVzZUVmZmVjdOuKlCBhc3luYyDsgqzsmqnsnYQg7ZS87ZWY6rOgIOyeiOydjC4g65WM66y47JeQIO2VqOyImOulvCDrlLDroZwg67m87IScIOyCrOyaqVxyXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNncyA9IGF3YWl0IGZldGNoZXIoXCJnZXRcIiwgXCIvbWVzc2FnZXNcIiwge1xyXG4gICAgICBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMT8uaWQgfHwgXCJcIl0gfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChuZXdNc2dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRIYXNOZXh0KGZhbHNlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1zZ3MobmV3TXNncyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbnRlcnNlY3RpbmcgJiYgaGFzTmV4dCkgZ2V0TWVzc2FnZXM7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxyXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsZW1lbnR9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCI7XHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAobWV0aG9kLCB1cmwsIC4uLnJlc3QpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvc1ttZXRob2RdKHVybCwgLi4ucmVzdCk7XHJcblxyXG4gIHJldHVybiByZXMuZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoZXI7XHJcblxyXG4vLyAuLi5yZXN07J2YIOydmOuvuC4uXHJcblxyXG4vKlxyXG5heGlvcy5nZXQodXJsWywgY29uZmlnXSlcclxuYXhpb3MuZGVsZXRlKHVybFssIGNvbmZpZ10pXHJcbmF4aW9zLnBvc3QodXJsLGRhdGFbLCBjb25maWddKVxyXG5heGlvcy5wdXQodXJsLGRhdGFbLCBjb25maWddKVxyXG4qL1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNc2dMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL01zZ0xpc3RcIjtcclxuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL2ZldGNoZXJcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+U2ltcGxlIFNOUzwvaDE+XHJcbiAgICAgIDxNc2dMaXN0IHNtc2dzPXtzbXNnc30gdXNlcnM9e3VzZXJzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgc21zZ3MgPSBhd2FpdCBmZXRjaGVyKFwiZ2V0XCIsIFwiL21lc3NhZ2VzXCIpO1xyXG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgZmV0Y2hlcihcImdldFwiLCBcIi91c2Vyc1wiKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgc21zZ3MsIHVzZXJzIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJlZiIsIk1zZ0lucHV0IiwibXV0YXRlIiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0IiwidGV4dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsInZhbHVlIiwiTXNnSXRlbSIsInVzZXJJZCIsInRpbWVzdGFtcCIsIm9uVXBkYXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0Iiwib25EZWxldGUiLCJteUlkIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiZmV0Y2hlciIsIk1zZ0xpc3QiLCJzbXNncyIsInVzZXJzIiwicXVlcnkiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsZW1lbnQiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwiRXJyb3IiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsInJlY2VpdmVkSWQiLCJnZXRNZXNzYWdlcyIsInBhcmFtcyIsImN1cnNvciIsImxlbmd0aCIsImludGVyc2VjdGluZyIsIm1hcCIsIngiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIm1ldGhvZCIsInVybCIsInJlc3QiLCJyZXMiLCJkYXRhIiwiSG9tZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==