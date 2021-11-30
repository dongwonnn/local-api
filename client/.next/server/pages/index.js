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
/* harmony import */ var _hooks_useInfinityScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInfinityScroll */ "./hooks/useInfinityScroll.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\LG\\Documents\\GitHub\\local-api\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const UserIds = ["roy", "jay"];

const MsgList = () => {
  const {
    query: {
      userId = ""
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const fetchMoreElement = useRef();
  const intersetcing = (0,_hooks_useInfinityScroll__WEBPACK_IMPORTED_MODULE_5__.default)(fetchMoreElement);

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
    setMsgs(newMsgs);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getMessages();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        startEdit: () => setEditingId(x.id),
        onDelete: () => onDelete(x.id),
        isEditing: editingId === x.id,
        myId: userId
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      ref: fetchMoreElement
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
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

/***/ "./hooks/useInfinityScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfinityScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInfinieScroll = targetEl => {
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: intersecting,
    1: setIntersetcing
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //  이 hook은 새로고침시나 할 때나, 데이터가 새로 불러올때마다 연거푸 실행됨을 방지한다.
  //  옵저버를 useCallback으로 레퍼런스로 만든다.
  //   const observer = new IntersectionObserver((entries) =>
  //     setIntersecting(entries.some((entry) => entry.isIntersecting))
  //   );

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entries => setIntersecting(entries.some(entry => entry.isIntersecting)));
    }

    return observerRef.current;
  }, [observerRef.current]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (targetEl.current) getObserver.observe(targetEl.current);
    return () => {
      getObserver.disconnect();
    };
  }, [targetEl.current]);
  return intersecting;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfinieScroll);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxNQUFNRyxRQUFRLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxNQUFGO0FBQVVDLEVBQUFBLEVBQUUsR0FBR0MsU0FBZjtBQUEwQkMsRUFBQUEsSUFBSSxHQUFHO0FBQWpDLENBQUQsS0FBMkM7QUFDMUQsUUFBTUMsT0FBTyxHQUFHTiw2Q0FBTSxDQUFDLElBQUQsQ0FBdEI7QUFFQSxRQUFNTyxRQUFRLEdBQUdSLGtEQUFXLENBQUVTLENBQUQsSUFBTztBQUNsQ0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FELElBQUFBLENBQUMsQ0FBQ0UsZUFBRjtBQUVBLFVBQU1MLElBQUksR0FBR0MsT0FBTyxDQUFDSyxPQUFSLENBQWdCQyxLQUE3QjtBQUNBTixJQUFBQSxPQUFPLENBQUNLLE9BQVIsQ0FBZ0JDLEtBQWhCLEdBQXdCLEVBQXhCO0FBRUFWLElBQUFBLE1BQU0sQ0FBQ0csSUFBRCxFQUFPRixFQUFQLENBQU47QUFDRCxHQVIyQixDQUE1QjtBQVVBLHNCQUNFO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxZQUFRLEVBQUVJLFFBQTVDO0FBQUEsNEJBQ0U7QUFDRSxTQUFHLEVBQUVELE9BRFA7QUFFRSxrQkFBWSxFQUFFRCxJQUZoQjtBQUdFLGlCQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBdkJEOztBQXlCQSxpRUFBZUosUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTs7OztBQUVBLE1BQU1ZLE9BQU8sR0FBRyxDQUFDO0FBQ2ZWLEVBQUFBLEVBRGU7QUFFZlcsRUFBQUEsTUFGZTtBQUdmQyxFQUFBQSxTQUhlO0FBSWZWLEVBQUFBLElBSmU7QUFLZlcsRUFBQUEsUUFMZTtBQU1mQyxFQUFBQSxTQU5lO0FBT2ZDLEVBQUFBLFNBUGU7QUFRZkMsRUFBQUEsUUFSZTtBQVNmQyxFQUFBQTtBQVRlLENBQUQsS0FVVjtBQUNKLHNCQUNFO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQSw0QkFDRTtBQUFBLGlCQUNHTixNQURILGVBRUU7QUFBQSxrQkFDRyxJQUFJTyxJQUFKLENBQVNOLFNBQVQsRUFBb0JPLGNBQXBCLENBQW1DLE9BQW5DLEVBQTRDO0FBQzNDQyxVQUFBQSxJQUFJLEVBQUUsU0FEcUM7QUFFM0NDLFVBQUFBLEtBQUssRUFBRSxTQUZvQztBQUczQ0MsVUFBQUEsR0FBRyxFQUFFLFNBSHNDO0FBSTNDQyxVQUFBQSxJQUFJLEVBQUUsU0FKcUM7QUFLM0NDLFVBQUFBLE1BQU0sRUFBRSxTQUxtQztBQU0zQ0MsVUFBQUEsTUFBTSxFQUFFO0FBTm1DLFNBQTVDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFlR1gsU0FBUyxnQkFDUjtBQUFBLDZCQUNFLDhEQUFDLDhDQUFEO0FBQVUsY0FBTSxFQUFFRCxRQUFsQjtBQUE0QixZQUFJLEVBQUVYLElBQWxDO0FBQXdDLFVBQUUsRUFBRUY7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQURRLEdBS1JFLElBcEJKLEVBdUJHZSxJQUFJLEtBQUtOLE1BQVQsaUJBQ0M7QUFBSyxlQUFTLEVBQUMsRUFBZjtBQUFBLDhCQUNFO0FBQVEsZUFBTyxFQUFFSSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQVEsZUFBTyxFQUFFQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0NELENBM0NEOztBQTZDQSxpRUFBZU4sT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNcUIsT0FBTyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBaEI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTTtBQUNKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRXRCLE1BQUFBLE1BQU0sR0FBRztBQUFYO0FBREgsTUFFRmlCLHNEQUFTLEVBRmI7QUFHQSxRQUFNO0FBQUEsT0FBQ00sSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JSLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDUyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QlYsK0NBQVEsQ0FBQyxJQUFELENBQTFDO0FBQ0EsUUFBTVcsZ0JBQWdCLEdBQUd6QyxNQUFNLEVBQS9CO0FBQ0EsUUFBTTBDLFlBQVksR0FBR1QsaUVBQWdCLENBQUNRLGdCQUFELENBQXJDOztBQUVBLFFBQU1FLFFBQVEsR0FBRyxNQUFPdEMsSUFBUCxJQUFnQjtBQUMvQixVQUFNdUMsTUFBTSxHQUFHLE1BQU1aLGlEQUFPLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUI7QUFBRTNCLE1BQUFBLElBQUY7QUFBUVMsTUFBQUE7QUFBUixLQUFyQixDQUE1QjtBQUNBLFFBQUksQ0FBQzhCLE1BQUwsRUFBYSxNQUFNQyxLQUFLLENBQUMsaUJBQUQsQ0FBWDtBQUViUCxJQUFBQSxPQUFPLENBQUVELElBQUQsSUFBVSxDQUFDTyxNQUFELEVBQVMsR0FBR1AsSUFBWixDQUFYLENBQVA7QUFDRCxHQUxEOztBQU9BLFFBQU1yQixRQUFRLEdBQUcsT0FBT1gsSUFBUCxFQUFhRixFQUFiLEtBQW9CO0FBQ25DLFVBQU15QyxNQUFNLEdBQUcsTUFBTVosaURBQU8sQ0FBQyxLQUFELEVBQVMsWUFBVzdCLEVBQUcsRUFBdkIsRUFBMEI7QUFBRUUsTUFBQUEsSUFBRjtBQUFRUyxNQUFBQTtBQUFSLEtBQTFCLENBQTVCO0FBRUEsUUFBSSxDQUFDOEIsTUFBTCxFQUFhLE1BQU1DLEtBQUssQ0FBQyxpQkFBRCxDQUFYO0FBQ2JQLElBQUFBLE9BQU8sQ0FBRUQsSUFBRCxJQUFVO0FBQ2hCLFlBQU1TLFdBQVcsR0FBR1QsSUFBSSxDQUFDVSxTQUFMLENBQWdCQyxHQUFELElBQVNBLEdBQUcsQ0FBQzdDLEVBQUosS0FBV0EsRUFBbkMsQ0FBcEI7QUFDQSxVQUFJMkMsV0FBVyxHQUFHLENBQWxCLEVBQXFCO0FBRXJCLFlBQU1HLE9BQU8sR0FBRyxDQUFDLEdBQUdaLElBQUosQ0FBaEI7QUFDQVksTUFBQUEsT0FBTyxDQUFDQyxNQUFSLENBQWVKLFdBQWYsRUFBNEIsQ0FBNUIsRUFBK0JGLE1BQS9CO0FBRUEsYUFBT0ssT0FBUDtBQUNELEtBUk0sQ0FBUDtBQVNBRSxJQUFBQSxRQUFRO0FBQ1QsR0FkRDs7QUFnQkEsUUFBTWhDLFFBQVEsR0FBRyxNQUFPaEIsRUFBUCxJQUFjO0FBQzdCLFVBQU1pRCxVQUFVLEdBQUcsTUFBTXBCLGlEQUFPLENBQUMsUUFBRCxFQUFZLFlBQVc3QixFQUFHLEVBQTFCLEVBQTZCO0FBQUVXLE1BQUFBO0FBQUYsS0FBN0IsQ0FBaEM7QUFFQSxRQUFJLENBQUNzQyxVQUFMLEVBQWlCLE1BQU1QLEtBQUssQ0FBQyxpQkFBRCxDQUFYO0FBRWpCUCxJQUFBQSxPQUFPLENBQUVELElBQUQsSUFBVTtBQUNoQixZQUFNUyxXQUFXLEdBQUdULElBQUksQ0FBQ1UsU0FBTCxDQUFnQkMsR0FBRCxJQUFTQSxHQUFHLENBQUM3QyxFQUFKLEtBQVdBLEVBQW5DLENBQXBCO0FBQ0EsVUFBSTJDLFdBQVcsR0FBRyxDQUFsQixFQUFxQjtBQUVyQixZQUFNRyxPQUFPLEdBQUcsQ0FBQyxHQUFHWixJQUFKLENBQWhCO0FBQ0FZLE1BQUFBLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSixXQUFmLEVBQTRCLENBQTVCO0FBRUEsYUFBT0csT0FBUDtBQUNELEtBUk0sQ0FBUDtBQVNELEdBZEQ7O0FBZ0JBLFFBQU1FLFFBQVEsR0FBRyxNQUFNO0FBQ3JCWCxJQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0QsR0FGRCxDQWhEb0IsQ0FvRHBCOzs7QUFDQSxRQUFNYSxXQUFXLEdBQUcsWUFBWTtBQUFBOztBQUM5QixVQUFNSixPQUFPLEdBQUcsTUFBTWpCLGlEQUFPLENBQUMsS0FBRCxFQUFRLFdBQVIsRUFBcUI7QUFDaERzQixNQUFBQSxNQUFNLEVBQUU7QUFBRUMsUUFBQUEsTUFBTSxFQUFFbEIsSUFBSSxDQUFDQSxJQUFJLENBQUNtQixNQUFMLFNBQWMsQ0FBZCxzQ0FBYyxFQUFHckQsRUFBakIsS0FBdUIsRUFBeEI7QUFBZDtBQUR3QyxLQUFyQixDQUE3QjtBQUdBbUMsSUFBQUEsT0FBTyxDQUFDVyxPQUFELENBQVA7QUFDRCxHQUxEOztBQU9BcEIsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2R3QixJQUFBQSxXQUFXO0FBQ1osR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsOENBQUQ7QUFBVSxZQUFNLEVBQUVWO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsZ0JBQ0dOLElBQUksQ0FBQ29CLEdBQUwsQ0FBVUMsQ0FBRCxpQkFDUiw4REFBQyw2Q0FBRCxrQ0FFTUEsQ0FGTjtBQUdFLGdCQUFRLEVBQUUxQyxRQUhaO0FBSUUsaUJBQVMsRUFBRSxNQUFNd0IsWUFBWSxDQUFDa0IsQ0FBQyxDQUFDdkQsRUFBSCxDQUovQjtBQUtFLGdCQUFRLEVBQUUsTUFBTWdCLFFBQVEsQ0FBQ3VDLENBQUMsQ0FBQ3ZELEVBQUgsQ0FMMUI7QUFNRSxpQkFBUyxFQUFFb0MsU0FBUyxLQUFLbUIsQ0FBQyxDQUFDdkQsRUFON0I7QUFPRSxZQUFJLEVBQUVXO0FBUFIsVUFDTzRDLENBQUMsQ0FBQ3ZELEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFlRTtBQUFLLFNBQUcsRUFBRXNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBLGtCQURGO0FBbUJELENBbkZEOztBQXFGQSxpRUFBZU4sT0FBZjs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUVBd0IsK0RBQUEsR0FBeUIsdUJBQXpCOztBQUNBLE1BQU0zQixPQUFPLEdBQUcsT0FBTzhCLE1BQVAsRUFBZUMsR0FBZixFQUFvQixHQUFHQyxJQUF2QixLQUFnQztBQUM5QyxRQUFNQyxHQUFHLEdBQUcsTUFBTU4sOENBQUssQ0FBQ0csTUFBRCxDQUFMLENBQWNDLEdBQWQsRUFBbUIsR0FBR0MsSUFBdEIsQ0FBbEI7QUFFQSxTQUFPQyxHQUFHLENBQUNDLElBQVg7QUFDRCxDQUpEOztBQU1BLGlFQUFlbEMsT0FBZixHQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBSWtDLFFBQUQsSUFBYztBQUNyQyxRQUFNQyxXQUFXLEdBQUdwRSw2Q0FBTSxDQUFDLElBQUQsQ0FBMUI7QUFDQSxRQUFNO0FBQUEsT0FBQ3FFLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDeEMsK0NBQVEsQ0FBQyxLQUFELENBQWhELENBRnFDLENBSXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBTXlDLFdBQVcsR0FBR3hFLFdBQVcsQ0FBQyxNQUFNO0FBQ3BDLFFBQUksQ0FBQ3FFLFdBQVcsQ0FBQ3pELE9BQWpCLEVBQTBCO0FBQ3hCeUQsTUFBQUEsV0FBVyxDQUFDekQsT0FBWixHQUFzQixJQUFJNkQsb0JBQUosQ0FBMEJDLE9BQUQsSUFDN0NDLGVBQWUsQ0FBQ0QsT0FBTyxDQUFDRSxJQUFSLENBQWNDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxjQUE5QixDQUFELENBREssQ0FBdEI7QUFHRDs7QUFFRCxXQUFPVCxXQUFXLENBQUN6RCxPQUFuQjtBQUNELEdBUjhCLEVBUTVCLENBQUN5RCxXQUFXLENBQUN6RCxPQUFiLENBUjRCLENBQS9CO0FBVUFrQixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJc0MsUUFBUSxDQUFDeEQsT0FBYixFQUFzQjRELFdBQVcsQ0FBQ08sT0FBWixDQUFvQlgsUUFBUSxDQUFDeEQsT0FBN0I7QUFFdEIsV0FBTyxNQUFNO0FBQ1g0RCxNQUFBQSxXQUFXLENBQUNRLFVBQVo7QUFDRCxLQUZEO0FBR0QsR0FOUSxFQU1OLENBQUNaLFFBQVEsQ0FBQ3hELE9BQVYsQ0FOTSxDQUFUO0FBUUEsU0FBTzBELFlBQVA7QUFDRCxDQTdCRDs7QUErQkEsaUVBQWVwQyxnQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTs7O0FBRUEsTUFBTStDLElBQUksR0FBRyxNQUFNO0FBQ2pCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsQ0FQRDs7QUFTQSxpRUFBZUEsSUFBZjs7Ozs7Ozs7OztBQ1pBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vaG9va3MvdXNlSW5maW5pdHlTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCBpZCA9IHVuZGVmaW5lZCwgdGV4dCA9IFwiXCIgfSkgPT4ge1xyXG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgbXV0YXRlKHRleHQsIGlkKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pbnB1dFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIHJlZj17dGV4dFJlZn1cclxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RleHR9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyZhOujjDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoe1xyXG4gIGlkLFxyXG4gIHVzZXJJZCxcclxuICB0aW1lc3RhbXAsXHJcbiAgdGV4dCxcclxuICBvblVwZGF0ZSxcclxuICBpc0VkaXRpbmcsXHJcbiAgc3RhcnRFZGl0LFxyXG4gIG9uRGVsZXRlLFxyXG4gIG15SWQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VfX2l0ZW1cIj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIHt1c2VySWR9XHJcbiAgICAgICAgPHN1Yj5cclxuICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKFwia28tS1JcIiwge1xyXG4gICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcclxuICAgICAgICAgICAgaG91cjEyOiB0cnVlLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9zdWI+XHJcbiAgICAgIDwvaDM+XHJcblxyXG4gICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIHRleHRcclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL2ZldGNoZXJcIjtcclxuaW1wb3J0IHVzZUluZmluaWVTY3JvbGwgZnJvbSBcIi4uL2hvb2tzL3VzZUluZmluaXR5U2Nyb2xsXCI7XHJcblxyXG5jb25zdCBVc2VySWRzID0gW1wicm95XCIsIFwiamF5XCJdO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyB1c2VySWQgPSBcIlwiIH0sXHJcbiAgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZmV0Y2hNb3JlRWxlbWVudCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGludGVyc2V0Y2luZyA9IHVzZUluZmluaWVTY3JvbGwoZmV0Y2hNb3JlRWxlbWVudCk7XHJcblxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgKHRleHQpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwb3N0XCIsIFwibWVzc2FnZXNcIiwgeyB0ZXh0LCB1c2VySWQgfSk7XHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcblxyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKFwicHV0XCIsIGBtZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG5cclxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcihcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gICAgZG9uZUVkaXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoXCJkZWxldGVcIiwgYG1lc3NhZ2VzLyR7aWR9YCwgeyB1c2VySWQgfSk7XHJcblxyXG4gICAgaWYgKCFyZWNlaXZlZElkKSB0aHJvdyBFcnJvcihcInNvbWV0aGluZyB3cm9uZ1wiKTtcclxuXHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiB7XHJcbiAgICBzZXRFZGl0aW5nSWQobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gdXNlRWZmZWN064qUIGFzeW5jIOyCrOyaqeydhCDtlLztlZjqs6Ag7J6I7J2MLiDrlYzrrLjsl5Ag7ZWo7IiY66W8IOuUsOuhnCDrubzshJwg7IKs7JqpXHJcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcihcImdldFwiLCBcIi9tZXNzYWdlc1wiLCB7XHJcbiAgICAgIHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxPy5pZCB8fCBcIlwiXSB9LFxyXG4gICAgfSk7XHJcbiAgICBzZXRNc2dzKG5ld01zZ3MpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRNZXNzYWdlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcclxuICAgICAgICAgIDxNc2dJdGVtXHJcbiAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgey4uLnh9XHJcbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbGVtZW50fSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiO1xyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKG1ldGhvZCwgdXJsLCAuLi5yZXN0KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIC4uLnJlc3QpO1xyXG5cclxuICByZXR1cm4gcmVzLmRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyO1xyXG5cclxuLy8gLi4ucmVzdOydmCDsnZjrr7guLlxyXG5cclxuLypcclxuYXhpb3MuZ2V0KHVybFssIGNvbmZpZ10pXHJcbmF4aW9zLmRlbGV0ZSh1cmxbLCBjb25maWddKVxyXG5heGlvcy5wb3N0KHVybCxkYXRhWywgY29uZmlnXSlcclxuYXhpb3MucHV0KHVybCxkYXRhWywgY29uZmlnXSlcclxuKi9cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VJbmZpbmllU2Nyb2xsID0gKHRhcmdldEVsKSA9PiB7XHJcbiAgY29uc3Qgb2JzZXJ2ZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2ludGVyc2VjdGluZywgc2V0SW50ZXJzZXRjaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gIOydtCBob29r7J2AIOyDiOuhnOqzoOy5qOyLnOuCmCDtlaAg65WM64KYLCDrjbDsnbTthLDqsIAg7IOI66GcIOu2iOufrOyYrOuVjOuniOuLpCDsl7DqsbDtkbgg7Iuk7ZaJ65Co7J2EIOuwqeyngO2VnOuLpC5cclxuICAvLyAg7Ji17KCA67KE66W8IHVzZUNhbGxiYWNr7Jy866GcIOugiO2NvOufsOyKpOuhnCDrp4zrk6Dri6QuXHJcbiAgLy8gICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT5cclxuICAvLyAgICAgc2V0SW50ZXJzZWN0aW5nKGVudHJpZXMuc29tZSgoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSlcclxuICAvLyAgICk7XHJcblxyXG4gIGNvbnN0IGdldE9ic2VydmVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFvYnNlcnZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+XHJcbiAgICAgICAgc2V0SW50ZXJzZWN0aW5nKGVudHJpZXMuc29tZSgoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JzZXJ2ZXJSZWYuY3VycmVudDtcclxuICB9LCBbb2JzZXJ2ZXJSZWYuY3VycmVudF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRhcmdldEVsLmN1cnJlbnQpIGdldE9ic2VydmVyLm9ic2VydmUodGFyZ2V0RWwuY3VycmVudCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZ2V0T2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfTtcclxuICB9LCBbdGFyZ2V0RWwuY3VycmVudF0pO1xyXG5cclxuICByZXR1cm4gaW50ZXJzZWN0aW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5maW5pZVNjcm9sbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTXNnTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nc2dMaXN0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+U2ltcGxlIFNOUzwvaDE+XHJcbiAgICAgIDxNc2dMaXN0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJpZCIsInVuZGVmaW5lZCIsInRleHQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJNc2dJdGVtIiwidXNlcklkIiwidGltZXN0YW1wIiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJvbkRlbGV0ZSIsIm15SWQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXNlSW5maW5pZVNjcm9sbCIsIlVzZXJJZHMiLCJNc2dMaXN0IiwicXVlcnkiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsZW1lbnQiLCJpbnRlcnNldGNpbmciLCJvbkNyZWF0ZSIsIm5ld01zZyIsIkVycm9yIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJyZWNlaXZlZElkIiwiZ2V0TWVzc2FnZXMiLCJwYXJhbXMiLCJjdXJzb3IiLCJsZW5ndGgiLCJtYXAiLCJ4IiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJtZXRob2QiLCJ1cmwiLCJyZXN0IiwicmVzIiwiZGF0YSIsInRhcmdldEVsIiwib2JzZXJ2ZXJSZWYiLCJpbnRlcnNlY3RpbmciLCJzZXRJbnRlcnNldGNpbmciLCJnZXRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInNldEludGVyc2VjdGluZyIsInNvbWUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==