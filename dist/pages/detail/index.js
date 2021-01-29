(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/detail/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/detail/index.tsx":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/detail/index.tsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro_html_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro/html.css */ "./node_modules/@tarojs/taro/html.css");
/* harmony import */ var _tarojs_taro_html_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro_html_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/pages/detail/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);


 // import '~taro-parse/dist/style/main.scss'



 // import classes from "./index.module.scss";
// import classnames from "classnames";
// const id = useRouter().params.id;
//
// const contents = useRouter().params.content;

function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      contentHtml = _useState4[0],
      setContentHtml = _useState4[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useReady"])(function () {
    requestList();
  });

  var escape2Html = function escape2Html(str) {
    var arrEntities = {
      lt: "<",
      gt: ">",
      nbsp: " ",
      amp: "&",
      quot: '"'
    };
    return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
      return arrEntities[t];
    }).replace(/<section/g, "<div").replace(/<img/gi, '<img style="max-width:100%;height:auto" ').replace(/<u>/g, "").replace(/<u style="">/g, "").replace(/<\/u>/g, "");
  };

  var requestList = function requestList() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.showLoading({
      title: "加载中"
    });
    setTimeout(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
    }, 5000);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.request({
      url: "https://xcf.haozii.com/wp-json/wp/v2/posts/" + _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getStorageSync("id"),
      data: {},
      success: function success(res) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
        setTitle(res.data.title.rendered);
        setContentHtml(res.data.content.rendered);
      },
      fail: function fail() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.hideLoading();
      }
    });
  };

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useShareAppMessage"])(function () {
    return {};
  });
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["useDidShow"])(function () {});
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
    className: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
    className: "title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "g"], {
    dangerouslySetInnerHTML: {
      __html: contentHtml
    },
    className: "content"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/detail/index.scss":
/*!*************************************!*\
  !*** ./src/pages/detail/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/index.tsx":
/*!************************************!*\
  !*** ./src/pages/detail/index.tsx ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/detail/index.tsx");


var config = {"navigationBarTitleText":"菜谱详情","enableShareAppMessage":true};

_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/detail/index', {}, config || {}))



/***/ })

},[["./src/pages/detail/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map