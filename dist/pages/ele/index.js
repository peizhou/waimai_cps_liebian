(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/ele/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/ele/index.tsx":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/ele/index.tsx ***!
  \**************************************************************************************************/
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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/pages/ele/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);






var api = __webpack_require__(/*! ../../utils/utils.js */ "./src/utils/utils.js");

function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      movies = _useState2[0],
      setMovies = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState4 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      config = _useState4[0],
      setConfig = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState6 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      meituan = _useState6[0],
      setMeituan = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState8 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
      ele = _useState8[0],
      setEle = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState10 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
      ele_shangchao = _useState10[0],
      setEle_shangchao = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState12 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState11, 2),
      meituan_shangchao = _useState12[0],
      setMeituan_shangchao = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState14 = Object(_Users_zhoupei_projects_coupons_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState13, 2),
      meituan_hotel = _useState14[0],
      setMeituan_hotel = _useState14[1];

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["useDidShow"])(function () {
    requestElmeLink();
  });

  var toCoupon = function toCoupon(appid, path) {
    console.log('即将跳转:' + appid + '---' + path);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateToMiniProgram({
      appId: appid,
      //饿了么appid固定
      path: path
    });
  };

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["useShareAppMessage"])(function (res) {
    return {
      title: "美团，饿了么外卖，有券有返利，单单帮你省。",
      path: "pages/ele/index"
    };
  });

  var requestElmeLink = function requestElmeLink() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.request({
      url: api.IndexUrl,
      data: {
        wxappid: api.WXAppID
      },
      success: function success(res) {
        console.log(res.data.data.movies);
        setMovies(res.data.data.movies);
        setConfig(res.data.data.config);
        setMeituan(res.data.data.meituan);
        setEle(res.data.data.ele);
        setEle_shangchao(res.data.data.ele_shangchao);
        setMeituan_shangchao(res.data.data.meituan_shangchao);
        setMeituan_hotel(res.data.data.meituan_hotel);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "take_out"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "bg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "up-space"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "down_space"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "hover"
  }, config.showEle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Swiper */ "d"], {
    className: "swiper",
    autoplay: true,
    circular: true,
    indicatorActiveColor: "#fff",
    indicatorColor: "#ccc",
    indicatorDots: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "e"], {
    className: "swiper_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "img",
    mode: "widthFix",
    src: "https://img.mybei.cn/weapp-1.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "e"], {
    className: "swiper_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "img",
    mode: "widthFix",
    src: "https://qt-user-img.oss-cn-hangzhou.aliyuncs.com/weapp/takeout-banner2.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "e"], {
    className: "swiper_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "img",
    mode: "widthFix",
    src: "https://qt-user-img.oss-cn-hangzhou.aliyuncs.com/weapp/takeout-banner-3.png"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Swiper */ "d"], {
    className: "swiper",
    autoplay: true,
    circular: true,
    indicatorActiveColor: "#fff",
    indicatorColor: "#ccc",
    indicatorDots: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "e"], {
    className: "swiper_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "img",
    mode: "widthFix",
    src: "https://img.mybei.cn/weapp-1.png"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "icon_menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    className: "item",
    onClick: function onClick() {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
        url: "../index/index"
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "icon",
    mode: "widthFix",
    src: "https://qt-user-img.oss-cn-hangzhou.aliyuncs.com/weapp/takeout-home-icon-film.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "label"
  }, "\u4ECA\u5929\u5403\u5565")), config.showEle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    className: "item",
    onClick: function onClick() {
      return toCoupon(ele.target_appid, ele.target_path);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "icon",
    mode: "widthFix",
    src: "https://qt-user-img.oss-cn-hangzhou.aliyuncs.com/weapp/takeout-home-icon-ele.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "label"
  }, "\u997F\u4E86\u4E48")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    className: "item",
    onClick: function onClick() {
      return toCoupon(meituan.target_appid, meituan.target_path);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "icon",
    mode: "widthFix",
    src: "https://qt-user-img.oss-cn-hangzhou.aliyuncs.com/weapp/takeout-home-icon-meituan.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "label"
  }, "\u7F8E\u56E2\u5916\u5356")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    className: "item",
    onClick: function onClick() {
      return toCoupon(meituan.target_appid, meituan.target_path);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "icon",
    mode: "widthFix",
    src: "https://qt-user-img.oss-cn-hangzhou.aliyuncs.com/weapp/takeout-home-icon-meituan.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "label"
  }, "\u7F8E\u56E2\u5916\u5356")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
    className: "item",
    openType: "share"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "icon",
    mode: "widthFix",
    src: "https://qt-user-img.oss-cn-hangzhou.aliyuncs.com/weapp/takeout-home-icon-share.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "label"
  }, "\u5206\u4EAB\u597D\u53CB"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "list shadow"
  }, config.showEle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "item animated fadeIn",
    onClick: function onClick() {
      return toCoupon(ele.target_appid, ele.target_path);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "label ele",
    mode: "widthFix",
    src: "https://mpstatic.qingting123.com/img/take-out/label-ele.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "mark ele",
    mode: "widthFix",
    src: "https://mpstatic.qingting123.com/img/take-out/mark-ele.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "title"
  }, "\u997F\u4E86\u4E48\u5929\u5929\u62A2\u7EA2\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "price"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "unit"
  }, "66\u5143"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "tip"
  }, "\u4ECA\u65E5\u4EC5\u5269\u4E2A", ele.remain, "\u4E2A")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "btn red"
  }, "\u514D\u8D39\u9886\u53D6"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "item animated fadeIn",
    onClick: function onClick() {
      return toCoupon(meituan.target_appid, meituan.target_path);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "label mt",
    mode: "widthFix",
    src: "https://mpstatic.qingting123.com/img/take-out/label-mt.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "mark mt",
    mode: "widthFix",
    src: "https://mpstatic.qingting123.com/img/take-out/mark-mt.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "title"
  }, "\u7F8E\u56E2\u5916\u5356\u7EA2\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "price"
  }, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "unit"
  }, "\u5143"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "tip"
  }, "\u4ECA\u65E5\u4EC5\u5269", meituan.remain, "\u4E2A")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "btn red"
  }, "\u514D\u8D39\u9886\u53D6")))), config.showEle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "card films"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "title"
  }, "\u70ED\u6620\u7535\u5F71\u63A8\u8350"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "extra"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "value"
  }, "\u5168\u90E833\u90E8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
    className: "icon-font iconfont-arrow"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "c"], {
    className: "body",
    enableFlex: true,
    scrollX: true
  }, movies.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
      className: "item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
      className: "pic",
      mode: "aspectFit",
      src: item.pic
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "f"], {
      className: "grade"
    }, item.grade)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
      className: "name"
    }, item.name)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "card multi"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "title"
  }, "\u679C\u852C\xB7\u5546\u8D85\xB7\u9152\u5E97")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "body"
  }, config.showEle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "item",
    onClick: function onClick() {
      return toCoupon(ele_shangchao.target_appid, ele_shangchao.target_path);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "img",
    src: "https://qt-user-img.oss-cn-hangzhou.aliyuncs.com/weapp/takeout-home-card-ele-gs.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "btn"
  }, "\u9886\u53D6")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "item",
    onClick: function onClick() {
      return toCoupon(meituan_shangchao.target_appid, meituan_shangchao.target_path);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "img",
    src: "https://qt-user-img.oss-cn-hangzhou.aliyuncs.com/weapp/takeout-home-card-meituan-market.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "btn"
  }, "\u9886\u53D6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "item",
    onClick: function onClick() {
      return toCoupon(meituan_hotel.target_appid, meituan_hotel.target_path);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
    className: "img",
    src: "https://qt-user-img.oss-cn-hangzhou.aliyuncs.com/weapp/takeout-home-card-meituan-hotel.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "g"], {
    className: "btn"
  }, "\u9886\u53D6")))));
}

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/ele/index.scss":
/*!**********************************!*\
  !*** ./src/pages/ele/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/ele/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/ele/index.tsx ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/ele/index.tsx");


var config = {"navigationBarTitleText":"首页","enableShareAppMessage":true,"navigationBarBackgroundColor":"#EA3855"};

_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/ele/index', {}, config || {}))



/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// const ApiRootUrl = 'http://127.0.0.1:8360/api/';
var ApiRootUrl = 'https://p.mybei.cn/api/';
var WXAppID = 'wx5dee831b44329220';
module.exports = {
  // 登录
  WXAppID: WXAppID,
  Indexpath: "美团，饿了么外卖，有券有返利，单单帮你省。",
  IndexUrl: ApiRootUrl + "/mp/index"
};

/***/ })

},[["./src/pages/ele/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map