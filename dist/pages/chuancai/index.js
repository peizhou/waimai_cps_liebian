(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/chuancai/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/chuancai/index.tsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/chuancai/index.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/pages/chuancai/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/chuancai/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);







function Index() {
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["useShareAppMessage"])(function () {
    return {};
  });
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["useReady"])(function () {
    requestList();
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      datalist = _useState2[0],
      setDatalist = _useState2[1];

  var redirectDetail = function redirectDetail(item) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.setStorage({
      key: 'id',
      data: item.id
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
      url: "../detail/index?id=" + item.id
    });
  };

  var requestList = function requestList() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showLoading({
      title: "加载中"
    });
    setTimeout(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
    }, 5000);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.request({
      url: "https://xcf.haozii.com/wp-json/wp/v2/posts?categories=20&page=1",
      data: {},
      success: function success(res) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
        setDatalist(res.data);
        console.log(res.data);
      },
      fail: function fail() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.hideLoading();
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.page
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.items
  }, datalist.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.top_banner,
      onClick: function onClick() {
        return redirectDetail(item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
      src: item.meta.thumbnaill,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.top_banner_img,
      mode: "aspectFill"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.textbg
    }, item.title.rendered));
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/chuancai/index.module.scss":
/*!**********************************************!*\
  !*** ./src/pages/chuancai/index.module.scss ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page":"index-module__page___3OoRx","top_banner":"index-module__top_banner___jkQgX","textbg":"index-module__textbg___1Pp6c","top_banner_img":"index-module__top_banner_img___1SaUA"};

/***/ }),

/***/ "./src/pages/chuancai/index.scss":
/*!***************************************!*\
  !*** ./src/pages/chuancai/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/chuancai/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/chuancai/index.tsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/chuancai/index.tsx");


var config = {"navigationBarTitleText":"每日川菜","enableShareAppMessage":true};

_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/chuancai/index', {}, config || {}))



/***/ })

},[["./src/pages/chuancai/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map