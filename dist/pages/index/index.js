(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/index/index.tsx ***!
  \****************************************************************************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/index/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);






var list = ["麻辣烫麻辣香锅", "饺子", "米线", "炒饭", "黄焖鸡", "麦当劳", "肯德基", "螺蛳粉", "炸鸡", "寿司", "粥", "酸菜鱼", "馄饨", "酸辣粉", "烧烤", "凉皮", "火锅", "水饺", "披萨", "冒菜", "拉面", "汉堡", "煎饼果子", "煲仔饭", "重庆小面", "炸酱面", "KFC", "包子", "黄焖鸡米饭", "鸡公煲", "烤冷面", "兰州拉面", "沙县", "肠粉", "西北风", "泡面", "小碗菜", "面包", "汉堡王", "盖浇饭", "面", "米饭", "沙县小吃", "咖喱饭", "炒面", "烤肉拌饭", "华莱士", "石锅拌饭", "猪脚饭"];
var coupons = [];
var max = list.length - 1;
var timer = null;

var getNum = function getNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      processing = _useState2[0],
      setProcessing = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState4 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      isFirst = _useState4[0],
      setIsFirst = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      current = _useState6[0],
      setCurrent = _useState6[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["useShareAppMessage"])(function (res) {
    return {
      title: "美团，饿了么外卖，有券有返利，单单帮你省。",
      path: "pages/ele/index"
    };
  });
  var random = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (timer) {
      clearInterval(timer);
      timer = null;
      setProcessing(false);
      return;
    } else {
      timer = setInterval(function () {
        setCurrent(list[getNum(0, max)]);
      }, 100);
      setProcessing(true);
      setIsFirst(false);
    }
  }, [setCurrent, setProcessing, setIsFirst]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {}, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()([_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.page, _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.index])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tipBox,
    style: {}
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.eat
  }, "\u5E72\u996D\u4EBA, \u4ECA\u5929\u5403\u70B9\u5565\uFF1F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tip
  }, "\u89E3\u51B3\u5E72\u996D\u4EBA\u7684\u4E16\u7EAA\u96BE\u9898\uFF01\u5E72\u996D\u4E0D\u7528\u6101\uFF01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.foodName
  }, current || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.randomBtn,
    onClick: random
  }, processing ? '停止' : isFirst ? '随机选一个' : '不行, 换一个'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btnGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()([_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn, _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.redPacket]),
    onClick: function onClick() {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateBack({
        delta: 2
      });
    }
  }, "\u9886\u5916\u5356\u7EA2\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    openType: "share",
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()([_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.btn, _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.share])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.icon
  }), "\u5206\u4EAB\u7ED9\u597D\u53CB")));
}

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/pages/index/index.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/index/index.module.scss ***!
  \*******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page":"index-module__page___1eOrK","index":"index-module__index___27tKF","animatedBird":"index-module__animatedBird___3sqTB","eat":"index-module__eat___1n0hl","tip":"index-module__tip___3oJ2G","foodName":"index-module__foodName___1cSL_","randomBtn":"index-module__randomBtn___2XltH","btnGroup":"index-module__btnGroup___23m0I","btn":"index-module__btn___jWsfU","icon":"index-module__icon___3cE_X"};

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"今天吃啥","enableShareAppMessage":true};

_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {}, config || {}))



/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map