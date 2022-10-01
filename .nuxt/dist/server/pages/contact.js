exports.ids = [7];
exports.modules = {

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("63c9496b", content, true)

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Hidden; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Hidden/Hidden.vue?vue&type=template&id=057339fd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('mq-layout',{attrs:{"mq":_vm.breakpoints}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Hidden/Hidden.vue?vue&type=template&id=057339fd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hidden/Hidden.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Hiddenvue_type_script_lang_js_ = ({
  props: {
    point: {
      type: String,
      required: true
    }
  },
  computed: {
    breakpoints() {
      switch (this.point) {
        case 'smUp':
          return ['xsDown'];

        case 'mdUp':
          return ['xsDown', 'smDown'];

        case 'lgUp':
          return ['xsDown', 'smDown', 'mdDown'];

        case 'xsDown':
          return ['smDown', 'mdDown', 'lgDown', 'xl'];

        case 'smDown':
          return ['mdDown', 'lgDown', 'xl'];

        case 'mdDown':
          return ['lgDown', 'xl'];

        case 'lgDown':
          return 'xl';

        default:
          return 'xl';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Hidden/Hidden.vue?vue&type=script&lang=js&
 /* harmony default export */ var Hidden_Hiddenvue_type_script_lang_js_ = (Hiddenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Hidden/Hidden.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Hidden_Hiddenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "629b9c88"
  
)

/* harmony default export */ var Hidden = (component.exports);
// CONCATENATED MODULE: ./components/Hidden/index.js


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "b"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */
).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },

    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },

    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.isDark.call(this);
    },

    styles() {
      if (this.absolute || !this.app) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application;
      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(bottom + footer + insetFooter),
        paddingLeft: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(left),
        paddingRight: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* convertToUnit */ "g"])(bar + top)
      };
    }

  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },

  mounted() {
    if (this.isActive) this.setTimeout();
  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* removed */ "e"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq


    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__[/* deprecate */ "d"])('timeout="0"', '-1', this);
    }
  },

  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "o"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__[/* getSlot */ "o"])(this)]);
    },

    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        style: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          pointerenter: () => window.clearTimeout(this.activeTimeout),
          pointerleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },

    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },

    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);

      if (!this.isActive || // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }

      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }

}));

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4369d6fc", content, true, context)
};

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("447cefc8", content, true, context)
};

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("64e1bff6", content, true, context)
};

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_a6e2a324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(268);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_a6e2a324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_a6e2a324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_a6e2a324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_id_a6e2a324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-a6e2a324]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-a6e2a324]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-a6e2a324]{font-size:28px;line-height:44px}}.use-text-title2[data-v-a6e2a324]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-a6e2a324]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-a6e2a324]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-a6e2a324]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-a6e2a324]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-a6e2a324]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-a6e2a324]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-a6e2a324]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-a6e2a324]{font-size:16px;line-height:24px}}.use-text-caption[data-v-a6e2a324],.use-text-paragraph[data-v-a6e2a324]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-a6e2a324]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-a6e2a324]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-a6e2a324]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-a6e2a324]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-a6e2a324]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-a6e2a324]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-a6e2a324]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-a6e2a324]{display:none}}.form-wrap[data-v-a6e2a324]{padding-top:80px;position:relative;text-align:center}.theme--light .form-wrap[data-v-a6e2a324]{color:rgba(0,0,0,.54)}.theme--dark .form-wrap[data-v-a6e2a324]{color:hsla(0,0%,100%,.7)}.form-wrap h3[data-v-a6e2a324]{font-weight:var(--font-bold)}.theme--dark .form-wrap h3[data-v-a6e2a324]{color:var(--v-primarylight-base)}.theme--light .form-wrap h3[data-v-a6e2a324]{color:var(--v-primarydark-base)}@media(max-width:1279px){.form-wrap h3[data-v-a6e2a324]{font-size:36px}}.logo[data-v-a6e2a324]{display:flex;align-items:center;margin-bottom:40px}.logo.logo-header[data-v-a6e2a324]{flex-direction:column;align-items:center;position:relative;z-index:10}.logo img[data-v-a6e2a324]{width:64px}.logo p[data-v-a6e2a324],.logo span[data-v-a6e2a324]{display:block;font-size:24px;padding-bottom:4px;font-weight:var(--font-bold)}@media(min-width:960px){.desc[data-v-a6e2a324]{font-size:20px;padding:0 80px}}.input[data-v-a6e2a324]{width:100%}.form[data-v-a6e2a324]{position:relative;margin-top:40px;padding-bottom:80px}[dir=ltr] .form[data-v-a6e2a324]{text-align:left}[dir=rtl] .form[data-v-a6e2a324]{text-align:right}@media(min-width:1280px){.form[data-v-a6e2a324]{padding:0 120px 80px}}.btn-area[data-v-a6e2a324]{margin-top:40px}[dir=ltr] .btn-area label[data-v-a6e2a324]{text-align:left}[dir=rtl] .btn-area label[data-v-a6e2a324]{text-align:right}@media(min-width:600px){.btn-area[data-v-a6e2a324]{display:flex;justify-content:space-between}}@media(max-width:599px){.btn-area[data-v-a6e2a324]{text-align:center}.btn-area .form-control-label[data-v-a6e2a324]{text-align:left}.btn-area button[data-v-a6e2a324]{margin-top:40px}}.btn-area span a[data-v-a6e2a324]{color:var(--v-primary-base)}.decoration[data-v-a6e2a324]{position:fixed;width:100%;height:120%;top:0;overflow:hidden}[dir=ltr] .decoration[data-v-a6e2a324]{left:0}[dir=rtl] .decoration[data-v-a6e2a324]{right:0}.decoration .oval[data-v-a6e2a324]{width:1000px;height:1000px;border-radius:50%;position:absolute;left:-40%;top:-100px;opacity:.2}.theme--light .decoration .oval[data-v-a6e2a324]{background-color:var(--v-primarylight-base)}.theme--dark .decoration .oval[data-v-a6e2a324]{background-color:var(--v-primarydark-base)}.capsul[data-v-a6e2a324]{width:900px;height:500px;border-radius:500px;transform:rotate(-30deg);position:absolute;opacity:.75}.theme--light .capsul[data-v-a6e2a324]{background-image:linear-gradient(144deg,var(--v-primarylight-base),var(--v-secondarylight-base))}.theme--dark .capsul[data-v-a6e2a324]{background-image:linear-gradient(144deg,var(--v-primarydark-base),var(--v-secondarydark-base))}@media(max-width:1279px){.capsul[data-v-a6e2a324]{opacity:0}}.circle[data-v-a6e2a324]{width:700px;height:700px;border-radius:50%;border:1px solid;position:absolute}.theme--light .circle[data-v-a6e2a324]{border-color:var(--v-primarylight-base)}.theme--dark .circle[data-v-a6e2a324]{border-color:var(--v-primarydark-base)}@media(max-width:1279px){.circle[data-v-a6e2a324]{opacity:0}}.deco-top .capsul[data-v-a6e2a324]{top:-200px;right:-50%}.deco-top .circle[data-v-a6e2a324]{top:-30%;right:-30%}.deco-bottom .capsul[data-v-a6e2a324]{left:-50%;bottom:-30%}.deco-bottom .circle[data-v-a6e2a324]{left:-30%;bottom:-30%}[dir=ltr] .right-icon[data-v-a6e2a324]{margin-left:8px}[dir=rtl] .right-icon[data-v-a6e2a324]{margin-right:8px}.form-control-label[data-v-a6e2a324]  .v-messages{min-height:0}.form-control-label>div[data-v-a6e2a324]{margin-top:0}.backtohome[data-v-a6e2a324]{width:80px;height:80px;border-radius:50%;position:absolute;top:60px}[dir=ltr] .backtohome[data-v-a6e2a324]{left:60px}[dir=rtl] .backtohome[data-v-a6e2a324]{right:60px}@media(max-width:959px){.backtohome[data-v-a6e2a324]{top:-120px}[dir=ltr] .backtohome[data-v-a6e2a324]{left:calc(50% - 40px)}[dir=rtl] .backtohome[data-v-a6e2a324]{right:calc(50% - 40px)}}.backtohome i[data-v-a6e2a324]{font-size:36px}.theme--light .backtohome i[data-v-a6e2a324]{color:rgba(0,0,0,.38)}.theme--dark .backtohome i[data-v-a6e2a324]{color:hsla(0,0%,100%,.5)}.backtohome>span i[data-v-a6e2a324]:first-child{opacity:1;transition:opacity .3s ease}.backtohome>span i[data-v-a6e2a324]:last-child{position:absolute;opacity:0;transition:all .3s ease}[dir=ltr] .backtohome>span i[data-v-a6e2a324]:last-child{right:0}[dir=rtl] .backtohome>span i[data-v-a6e2a324]:last-child{left:0}.backtohome:hover>span i[data-v-a6e2a324]:first-child{opacity:0}.backtohome:hover>span i[data-v-a6e2a324]:last-child{opacity:1}[dir=ltr] .backtohome:hover>span i[data-v-a6e2a324]:last-child{right:27px}[dir=rtl] .backtohome:hover>span i[data-v-a6e2a324]:last-child{left:27px}.notification .v-btn--round .v-btn__content .v-icon[data-v-a6e2a324]{color:#fff}.title-default[data-v-a6e2a324]{padding:0 16px}@media(min-width:600px){.title-default[data-v-a6e2a324]{padding:0 32px}}.title-primary[data-v-a6e2a324]{font-size:48px;line-height:62px;text-transform:capitalize;font-weight:700;margin-bottom:40px;position:relative}@media(max-width:1279px){.title-primary[data-v-a6e2a324]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-primary[data-v-a6e2a324]{text-align:center;margin-bottom:32px}}@media(max-width:599px){.title-primary[data-v-a6e2a324]{font-size:32px;line-height:42px}}.title-secondary[data-v-a6e2a324]{color:var(--v-secondarydark-base);font-size:48px;line-height:62px;text-transform:capitalize;font-weight:700;margin-bottom:40px;position:relative}@media(max-width:1279px){.title-secondary[data-v-a6e2a324]{font-size:38px;line-height:50px}}@media(max-width:599px){.title-secondary[data-v-a6e2a324]{font-size:32px;line-height:42px}}.title-deco[data-v-a6e2a324]{position:relative;display:inline-block}.title-deco h3[data-v-a6e2a324]{overflow:hidden;color:#fff;padding:32px;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;text-transform:capitalize;font-size:48px;font-Weight:var(--font-bold)}@media(min-width:960px){.title-deco h3[data-v-a6e2a324]{border-radius:50%;width:300px;height:300px;background-color:var(--v-primary-base);background-attachment:fixed;background-repeat:no-repeat;background-size:contain}[dir=ltr] .title-deco h3[data-v-a6e2a324]{background-position:0}[dir=rtl] .title-deco h3[data-v-a6e2a324]{background-position:100%}.title-deco h3.bg-img[data-v-a6e2a324]:before{content:\"\";width:100%;height:100%;background:#3b3b3b;opacity:.38;position:absolute;top:0;left:0}.title-deco h3 span[data-v-a6e2a324]{position:relative}}@media(max-width:1279px){.title-deco h3[data-v-a6e2a324]{font-size:38px;line-height:50px}}@media(max-width:959px){.title-deco h3[data-v-a6e2a324]{padding-bottom:16px;background:none!important;width:auto;text-align:center}.theme--dark .title-deco h3[data-v-a6e2a324]{color:var(--v-primarylight-base)}.theme--light .title-deco h3[data-v-a6e2a324]{color:var(--v-primarydark-base)}}@media(max-width:599px){.title-deco h3[data-v-a6e2a324]{font-size:32px;line-height:42px}}.title-deco[data-v-a6e2a324]:before{content:\"\";width:400px;height:400px;top:-50px;left:-50px;border-radius:50%;border:1px solid;position:absolute}.theme--light .title-deco[data-v-a6e2a324]:before{border-color:var(--v-primarylight-base)}.theme--dark .title-deco[data-v-a6e2a324]:before{border-color:var(--v-primarydark-base)}@media(max-width:959px){.title-deco[data-v-a6e2a324]:before{display:none}}@media(min-width:1280px){.title-icon-deco[data-v-a6e2a324]{width:350px}}.title-icon-deco h3[data-v-a6e2a324]{font-weight:700;text-transform:capitalize;width:200px;min-height:120px;font-size:48px;line-height:62px;position:relative}.theme--dark .title-icon-deco h3[data-v-a6e2a324]{color:#fff}.theme--light .title-icon-deco h3[data-v-a6e2a324]{color:var(--v-primarydark-base)}@media(max-width:1279px){.title-icon-deco h3[data-v-a6e2a324]{font-size:38px;line-height:50px;width:100%;text-align:center}}@media(max-width:599px){.title-icon-deco h3[data-v-a6e2a324]{font-size:32px;line-height:42px}}.title-icon-deco .icon[data-v-a6e2a324]{position:relative;font-size:80px;color:transparent;-webkit-text-stroke:2px var(--v-primary-base);display:block;margin:144px 0 24px}[dir=ltr] .title-icon-deco .icon[data-v-a6e2a324]{text-align:left}[dir=rtl] .title-icon-deco .icon[data-v-a6e2a324]{text-align:right}@media(max-width:1279px){.title-icon-deco .icon[data-v-a6e2a324]{display:none}}.title-icon-deco .capsul[data-v-a6e2a324]{width:900px;height:500px;border-radius:500px;position:absolute;opacity:.75;top:80px}.theme--light .title-icon-deco .capsul[data-v-a6e2a324]{background-image:linear-gradient(144deg,var(--v-primarylight-base),var(--v-secondarylight-base))}.theme--dark .title-icon-deco .capsul[data-v-a6e2a324]{background-image:linear-gradient(144deg,var(--v-primarydark-base),var(--v-secondarydark-base))}[dir=ltr] .title-icon-deco .capsul[data-v-a6e2a324]{right:-300px}[dir=rtl] .title-icon-deco .capsul[data-v-a6e2a324]{left:-300px;transform:rotate(30deg)}[dir=ltr] .title-icon-deco .capsul[data-v-a6e2a324]{transform:rotate(-30deg)}.title-icon-deco .circle[data-v-a6e2a324]{width:700px;height:700px;top:50px;border-radius:50%;border:1px solid;position:absolute}[dir=ltr] .title-icon-deco .circle[data-v-a6e2a324]{right:-40px}[dir=rtl] .title-icon-deco .circle[data-v-a6e2a324]{left:-40px}.theme--light .title-icon-deco .circle[data-v-a6e2a324]{border-color:var(--v-primarylight-base)}.theme--dark .title-icon-deco .circle[data-v-a6e2a324]{border-color:var(--v-primarydark-base)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("12a190a6", content, true)

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(323);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("5c8fbe94", content, true)

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title{font-size:28px;line-height:44px}}.use-text-title2{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2{font-size:24px;line-height:36px}}.use-text-subtitle{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle{font-size:18px;line-height:28px}}.use-text-subtitle2{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2{font-size:16px;line-height:24px}}.use-text-caption,.use-text-paragraph{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down{display:none}}@media(max-width:1279px){.use-hidden-md-down{display:none}}@media(max-width:959px){.use-hidden-sm-down{display:none}}@media(max-width:599px){.use-hidden-xs-down{display:none}}@media(min-width:1280px){.use-hidden-lg-up{display:none}}@media(min-width:960px){.use-hidden-md-up{display:none}}@media(min-width:600px){.use-hidden-sm-up{display:none}}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_d4c98ce6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(269);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_d4c98ce6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_d4c98ce6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_d4c98ce6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Decoration_vue_vue_type_style_index_0_id_d4c98ce6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-d4c98ce6]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-d4c98ce6]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-d4c98ce6]{font-size:28px;line-height:44px}}.use-text-title2[data-v-d4c98ce6]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-d4c98ce6]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-d4c98ce6]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-d4c98ce6]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-d4c98ce6]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-d4c98ce6]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-d4c98ce6]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-d4c98ce6]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-d4c98ce6]{font-size:16px;line-height:24px}}.use-text-caption[data-v-d4c98ce6],.use-text-paragraph[data-v-d4c98ce6]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-d4c98ce6]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-d4c98ce6]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-d4c98ce6]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-d4c98ce6]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-d4c98ce6]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-d4c98ce6]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-d4c98ce6]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-d4c98ce6]{display:none}}.form-wrap[data-v-d4c98ce6]{padding-top:80px;position:relative;text-align:center}.theme--light .form-wrap[data-v-d4c98ce6]{color:rgba(0,0,0,.54)}.theme--dark .form-wrap[data-v-d4c98ce6]{color:hsla(0,0%,100%,.7)}.form-wrap h3[data-v-d4c98ce6]{font-weight:var(--font-bold)}.theme--dark .form-wrap h3[data-v-d4c98ce6]{color:var(--v-primarylight-base)}.theme--light .form-wrap h3[data-v-d4c98ce6]{color:var(--v-primarydark-base)}@media(max-width:1279px){.form-wrap h3[data-v-d4c98ce6]{font-size:36px}}.logo[data-v-d4c98ce6]{display:flex;align-items:center;margin-bottom:40px}.logo.logo-header[data-v-d4c98ce6]{flex-direction:column;align-items:center;position:relative;z-index:10}.logo img[data-v-d4c98ce6]{width:64px}.logo p[data-v-d4c98ce6],.logo span[data-v-d4c98ce6]{display:block;font-size:24px;padding-bottom:4px;font-weight:var(--font-bold)}@media(min-width:960px){.desc[data-v-d4c98ce6]{font-size:20px;padding:0 80px}}.input[data-v-d4c98ce6]{width:100%}.form[data-v-d4c98ce6]{position:relative;margin-top:40px;padding-bottom:80px}[dir=ltr] .form[data-v-d4c98ce6]{text-align:left}[dir=rtl] .form[data-v-d4c98ce6]{text-align:right}@media(min-width:1280px){.form[data-v-d4c98ce6]{padding:0 120px 80px}}.btn-area[data-v-d4c98ce6]{margin-top:40px}[dir=ltr] .btn-area label[data-v-d4c98ce6]{text-align:left}[dir=rtl] .btn-area label[data-v-d4c98ce6]{text-align:right}@media(min-width:600px){.btn-area[data-v-d4c98ce6]{display:flex;justify-content:space-between}}@media(max-width:599px){.btn-area[data-v-d4c98ce6]{text-align:center}.btn-area .form-control-label[data-v-d4c98ce6]{text-align:left}.btn-area button[data-v-d4c98ce6]{margin-top:40px}}.btn-area span a[data-v-d4c98ce6]{color:var(--v-primary-base)}.decoration[data-v-d4c98ce6]{position:fixed;width:100%;height:120%;top:0;overflow:hidden}[dir=ltr] .decoration[data-v-d4c98ce6]{left:0}[dir=rtl] .decoration[data-v-d4c98ce6]{right:0}.decoration .oval[data-v-d4c98ce6]{width:1000px;height:1000px;border-radius:50%;position:absolute;left:-40%;top:-100px;opacity:.2}.theme--light .decoration .oval[data-v-d4c98ce6]{background-color:var(--v-primarylight-base)}.theme--dark .decoration .oval[data-v-d4c98ce6]{background-color:var(--v-primarydark-base)}.capsul[data-v-d4c98ce6]{width:900px;height:500px;border-radius:500px;transform:rotate(-30deg);position:absolute;opacity:.75}.theme--light .capsul[data-v-d4c98ce6]{background-image:linear-gradient(144deg,var(--v-primarylight-base),var(--v-secondarylight-base))}.theme--dark .capsul[data-v-d4c98ce6]{background-image:linear-gradient(144deg,var(--v-primarydark-base),var(--v-secondarydark-base))}@media(max-width:1279px){.capsul[data-v-d4c98ce6]{opacity:0}}.circle[data-v-d4c98ce6]{width:700px;height:700px;border-radius:50%;border:1px solid;position:absolute}.theme--light .circle[data-v-d4c98ce6]{border-color:var(--v-primarylight-base)}.theme--dark .circle[data-v-d4c98ce6]{border-color:var(--v-primarydark-base)}@media(max-width:1279px){.circle[data-v-d4c98ce6]{opacity:0}}.deco-top .capsul[data-v-d4c98ce6]{top:-200px;right:-50%}.deco-top .circle[data-v-d4c98ce6]{top:-30%;right:-30%}.deco-bottom .capsul[data-v-d4c98ce6]{left:-50%;bottom:-30%}.deco-bottom .circle[data-v-d4c98ce6]{left:-30%;bottom:-30%}[dir=ltr] .right-icon[data-v-d4c98ce6]{margin-left:8px}[dir=rtl] .right-icon[data-v-d4c98ce6]{margin-right:8px}.form-control-label[data-v-d4c98ce6]  .v-messages{min-height:0}.form-control-label>div[data-v-d4c98ce6]{margin-top:0}.backtohome[data-v-d4c98ce6]{width:80px;height:80px;border-radius:50%;position:absolute;top:60px}[dir=ltr] .backtohome[data-v-d4c98ce6]{left:60px}[dir=rtl] .backtohome[data-v-d4c98ce6]{right:60px}@media(max-width:959px){.backtohome[data-v-d4c98ce6]{top:-120px}[dir=ltr] .backtohome[data-v-d4c98ce6]{left:calc(50% - 40px)}[dir=rtl] .backtohome[data-v-d4c98ce6]{right:calc(50% - 40px)}}.backtohome i[data-v-d4c98ce6]{font-size:36px}.theme--light .backtohome i[data-v-d4c98ce6]{color:rgba(0,0,0,.38)}.theme--dark .backtohome i[data-v-d4c98ce6]{color:hsla(0,0%,100%,.5)}.backtohome>span i[data-v-d4c98ce6]:first-child{opacity:1;transition:opacity .3s ease}.backtohome>span i[data-v-d4c98ce6]:last-child{position:absolute;opacity:0;transition:all .3s ease}[dir=ltr] .backtohome>span i[data-v-d4c98ce6]:last-child{right:0}[dir=rtl] .backtohome>span i[data-v-d4c98ce6]:last-child{left:0}.backtohome:hover>span i[data-v-d4c98ce6]:first-child{opacity:0}.backtohome:hover>span i[data-v-d4c98ce6]:last-child{opacity:1}[dir=ltr] .backtohome:hover>span i[data-v-d4c98ce6]:last-child{right:27px}[dir=rtl] .backtohome:hover>span i[data-v-d4c98ce6]:last-child{left:27px}.notification .v-btn--round .v-btn__content .v-icon[data-v-d4c98ce6]{color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_4859c0ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_4859c0ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_4859c0ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_4859c0ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_4859c0ba_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".use-text-title[data-v-4859c0ba]{font-weight:var(--font-bold);font-size:48px;line-height:72px}@media(max-width:1279px){.use-text-title[data-v-4859c0ba]{font-size:38px;line-height:60px}}@media(max-width:599px){.use-text-title[data-v-4859c0ba]{font-size:28px;line-height:44px}}.use-text-title2[data-v-4859c0ba]{font-size:36px;line-height:56px;font-weight:var(--font-bold)}@media(max-width:1279px){.use-text-title2[data-v-4859c0ba]{font-size:32px;line-height:48px}}@media(max-width:599px){.use-text-title2[data-v-4859c0ba]{font-size:24px;line-height:36px}}.use-text-subtitle[data-v-4859c0ba]{font-weight:var(--font-medium);font-size:28px;line-height:44px}@media(max-width:1279px){.use-text-subtitle[data-v-4859c0ba]{font-size:24px;line-height:36px}}@media(max-width:599px){.use-text-subtitle[data-v-4859c0ba]{font-size:18px;line-height:28px}}.use-text-subtitle2[data-v-4859c0ba]{font-weight:var(--font-regular);font-size:22px;line-height:32px}@media(max-width:1279px){.use-text-subtitle2[data-v-4859c0ba]{font-size:20px;line-height:32px}}@media(max-width:599px){.use-text-subtitle2[data-v-4859c0ba]{font-size:16px;line-height:24px}}.use-text-caption[data-v-4859c0ba],.use-text-paragraph[data-v-4859c0ba]{font-weight:var(--font-regular);font-size:16px;line-height:24px}@media(max-width:599px){.use-text-caption[data-v-4859c0ba]{font-size:14px;line-height:22px}}@media(max-width:1919px){.use-hidden-lg-down[data-v-4859c0ba]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-4859c0ba]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-4859c0ba]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-4859c0ba]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-4859c0ba]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-4859c0ba]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-4859c0ba]{display:none}}.main-wrap[data-v-4859c0ba]{position:relative}.theme--dark .main-wrap[data-v-4859c0ba]{background-color:#303030}.theme--light .main-wrap[data-v-4859c0ba]{background-color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=4859c0ba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-wrap"},[_c('decoration'),_vm._ssrNode(" "),_c('contact')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=4859c0ba&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Contact.vue?vue&type=template&id=a6e2a324&scoped=true&
var Contactvue_type_template_id_a6e2a324_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-wrap"},[_c('v-snackbar',{staticClass:"notification",attrs:{"timeout":4000,"top":"","right":""},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('div',{staticClass:"action"},[_vm._v("\n      Message Sent\n    ")]),_vm._v(" "),_c('v-btn',{attrs:{"text":"","icon":""},on:{"click":function($event){_vm.snackbar = false}}},[_c('v-icon',[_vm._v("mdi-close")])],1)],1),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"mdUp"}},[_c('div',{staticClass:"logo logo-header"},[_c('nuxt-link',{attrs:{"to":_vm.routeLink.medical.home}},[_c('img',{attrs:{"src":_vm.logo,"alt":"logo"}})])],1)]),_vm._ssrNode(" "),_c('hidden',{attrs:{"point":"smDown"}},[_c('v-btn',{staticClass:"backtohome",attrs:{"href":_vm.routeLink.medical.home,"icon":""}},[_c('i',{staticClass:"ion-ios-home-outline"}),_vm._v(" "),_c('i',{staticClass:"ion-ios-arrow-round-back-outline"})])],1),_vm._ssrNode(" "),_c('v-container',{staticClass:"max-md"},[_c('h3',{staticClass:"use-text-title pb-3 text-center"},[_vm._v("\n      "+_vm._s(_vm.$t('common.contact_title'))+"\n    ")]),_vm._v(" "),_c('p',{staticClass:"desc use-text-subtitle2 text-center"},[_vm._v("\n      "+_vm._s(_vm.$t('common.contact_subtitle'))+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"form"},[_c('v-form',{ref:"form",model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-row',{staticClass:"spacing6"},[_c('v-col',{staticClass:"pa-6",attrs:{"cols":"12","sm":"6"}},[_c('v-text-field',{staticClass:"input",attrs:{"rules":_vm.nameRules,"label":_vm.$t('common.form_name'),"required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"cols":"12","sm":"6"}},[_c('v-text-field',{staticClass:"input",attrs:{"rules":_vm.emailRules,"label":_vm.$t('common.form_email'),"required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"cols":"12","sm":"6"}},[_c('v-text-field',{staticClass:"input",attrs:{"label":_vm.$t('common.form_phone')},model:{value:(_vm.phone),callback:function ($$v) {_vm.phone=$$v},expression:"phone"}})],1),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"cols":"12","sm":"6"}},[_c('v-text-field',{staticClass:"input",attrs:{"label":_vm.$t('common.form_company')},model:{value:(_vm.company),callback:function ($$v) {_vm.company=$$v},expression:"company"}})],1),_vm._v(" "),_c('v-col',{staticClass:"pa-6",attrs:{"cols":"12"}},[_c('v-textarea',{staticClass:"input",attrs:{"rows":"6","label":_vm.$t('common.form_message')},model:{value:(_vm.message),callback:function ($$v) {_vm.message=$$v},expression:"message"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"btn-area"},[_c('div',{staticClass:"form-control-label"},[_c('v-checkbox',{attrs:{"color":"primary","rules":[function (v) { return !!v || 'You must agree to continue!'; }],"label":_vm.$t('common.form_terms'),"required":""},model:{value:(_vm.checkbox),callback:function ($$v) {_vm.checkbox=$$v},expression:"checkbox"}}),_vm._v(" "),_c('a',{attrs:{"href":"#"}},[_vm._v("\n              "+_vm._s(_vm.$t('common.form_privacy'))+"\n            ")])],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary","large":""},on:{"click":_vm.validate}},[_vm._v("\n            "+_vm._s(_vm.$t('common.form_send'))+"\n            "),_c('v-icon',{staticClass:"right-icon"},[_vm._v("\n              mdi-send\n            ")])],1)],1)],1)],1)])],2)}
var Contactvue_type_template_id_a6e2a324_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/Contact.vue?vue&type=template&id=a6e2a324&scoped=true&

// EXTERNAL MODULE: ./static/images/medical-logo.svg
var medical_logo = __webpack_require__(52);
var medical_logo_default = /*#__PURE__*/__webpack_require__.n(medical_logo);

// EXTERNAL MODULE: ./static/text/brand.js
var brand = __webpack_require__(32);

// EXTERNAL MODULE: ./static/text/link.js
var text_link = __webpack_require__(51);

// EXTERNAL MODULE: ./components/Hidden/index.js + 5 modules
var Hidden = __webpack_require__(241);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Contact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Contactvue_type_script_lang_js_ = ({
  components: {
    Hidden: Hidden["a" /* default */]
  },

  data() {
    return {
      valid: true,
      snackbar: false,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      phone: '',
      company: '',
      message: '',
      checkbox: false,
      logo: medical_logo_default.a,
      brand: brand["a" /* default */],
      routeLink: text_link["a" /* default */]
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Forms/Contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forms_Contactvue_type_script_lang_js_ = (Contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 1 modules
var VBtn = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCheckbox/VCheckbox.sass
var VCheckbox = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/vuetify/src/styles/components/_selection-controls.sass
var _selection_controls = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/selectable/index.js + 1 modules
var selectable = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js
// Styles

 // Components


 // Mixins


/* @vue/component */

/* harmony default export */ var VCheckbox_VCheckbox = (selectable["a" /* default */].extend({
  name: 'v-checkbox',
  props: {
    indeterminate: Boolean,
    indeterminateIcon: {
      type: String,
      default: '$checkboxIndeterminate'
    },
    offIcon: {
      type: String,
      default: '$checkboxOff'
    },
    onIcon: {
      type: String,
      default: '$checkboxOn'
    }
  },

  data() {
    return {
      inputIndeterminate: this.indeterminate
    };
  },

  computed: {
    classes() {
      return { ...VInput["a" /* default */].options.computed.classes.call(this),
        'v-input--selection-controls': true,
        'v-input--checkbox': true,
        'v-input--indeterminate': this.inputIndeterminate
      };
    },

    computedIcon() {
      if (this.inputIndeterminate) {
        return this.indeterminateIcon;
      } else if (this.isActive) {
        return this.onIcon;
      } else {
        return this.offIcon;
      }
    },

    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.isDisabled && !this.inputIndeterminate) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    }

  },
  watch: {
    indeterminate(val) {
      // https://github.com/vuetifyjs/vuetify/issues/8270
      this.$nextTick(() => this.inputIndeterminate = val);
    },

    inputIndeterminate(val) {
      this.$emit('update:indeterminate', val);
    },

    isActive() {
      if (!this.indeterminate) return;
      this.inputIndeterminate = false;
    }

  },
  methods: {
    genCheckbox() {
      const {
        title,
        ...checkboxAttrs
      } = this.attrs$;
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.$createElement(VIcon["a" /* default */], this.setTextColor(this.validationState, {
        props: {
          dense: this.dense,
          dark: this.dark,
          light: this.light
        }
      }), this.computedIcon), this.genInput('checkbox', { ...checkboxAttrs,
        'aria-checked': this.inputIndeterminate ? 'mixed' : this.isActive.toString()
      }), this.genRipple(this.setTextColor(this.rippleState))]);
    },

    genDefaultSlot() {
      return [this.genCheckbox(), this.genLabel()];
    }

  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/binds-attrs/index.js
var binds_attrs = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/registrable/index.js
var registrable = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
// Mixins



/* @vue/component */

/* harmony default export */ var VForm = (Object(mixins["a" /* default */])(binds_attrs["a" /* default */], Object(registrable["b" /* provide */])('form')
/* @vue/component */
).extend({
  name: 'v-form',

  provide() {
    return {
      form: this
    };
  },

  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };

      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };

      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }

      return watchers;
    },

    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },

    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },

    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },

    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },

    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },

    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);

      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }

      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }

  },

  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon_VIcon = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(264);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTextarea/VTextarea.sass
var VTextarea = __webpack_require__(322);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTextarea/VTextarea.js
// Styles
 // Extensions

 // Utilities


const baseMixins = Object(mixins["a" /* default */])(VTextField["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VTextarea_VTextarea = (baseMixins.extend({
  name: 'v-textarea',
  props: {
    autoGrow: Boolean,
    noResize: Boolean,
    rowHeight: {
      type: [Number, String],
      default: 24,
      validator: v => !isNaN(parseFloat(v))
    },
    rows: {
      type: [Number, String],
      default: 5,
      validator: v => !isNaN(parseInt(v, 10))
    }
  },
  computed: {
    classes() {
      return {
        'v-textarea': true,
        'v-textarea--auto-grow': this.autoGrow,
        'v-textarea--no-resize': this.noResizeHandle,
        ...VTextField["a" /* default */].options.computed.classes.call(this)
      };
    },

    noResizeHandle() {
      return this.noResize || this.autoGrow;
    }

  },
  watch: {
    autoGrow(val) {
      this.$nextTick(() => {
        var _this$$refs$input;

        val ? this.calculateInputHeight() : (_this$$refs$input = this.$refs.input) == null ? void 0 : _this$$refs$input.style.removeProperty('height');
      });
    },

    lazyValue() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    },

    rowHeight() {
      this.autoGrow && this.$nextTick(this.calculateInputHeight);
    }

  },

  mounted() {
    setTimeout(() => {
      this.autoGrow && this.calculateInputHeight();
    }, 0);
  },

  methods: {
    calculateInputHeight() {
      const input = this.$refs.input;
      if (!input) return;
      input.style.height = '0';
      const height = input.scrollHeight;
      const minHeight = parseInt(this.rows, 10) * parseFloat(this.rowHeight); // This has to be done ASAP, waiting for Vue
      // to update the DOM causes ugly layout jumping

      input.style.height = Math.max(minHeight, height) + 'px';
    },

    genInput() {
      const input = VTextField["a" /* default */].options.methods.genInput.call(this);
      input.tag = 'textarea';
      delete input.data.attrs.type;
      input.data.attrs.rows = this.rows;
      return input;
    },

    onInput(e) {
      VTextField["a" /* default */].options.methods.onInput.call(this, e);
      this.autoGrow && this.calculateInputHeight();
    },

    onKeyDown(e) {
      // Prevents closing of a
      // dialog when pressing
      // enter
      if (this.isFocused && e.keyCode === 13) {
        e.stopPropagation();
      }

      this.$emit('keydown', e);
    }

  }
}));
// CONCATENATED MODULE: ./components/Forms/Contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(318)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Forms_Contactvue_type_script_lang_js_,
  Contactvue_type_template_id_a6e2a324_scoped_true_render,
  Contactvue_type_template_id_a6e2a324_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "a6e2a324",
  "b2be0f4e"
  
)

/* harmony default export */ var Contact = (component.exports);

/* vuetify-loader */











installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCheckbox: VCheckbox_VCheckbox,VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm,VIcon: VIcon_VIcon["a" /* default */],VRow: VRow["a" /* default */],VSnackbar: VSnackbar["a" /* default */],VTextField: VTextField["a" /* default */],VTextarea: VTextarea_VTextarea})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forms/Decoration.vue?vue&type=template&id=d4c98ce6&scoped=true&
var Decorationvue_type_template_id_d4c98ce6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"decoration"},[_vm._ssrNode("<div class=\"oval\" data-v-d4c98ce6></div> <div class=\"deco-top\" data-v-d4c98ce6><div class=\"capsul\" data-v-d4c98ce6></div> <div class=\"circle\" data-v-d4c98ce6></div></div> <div class=\"deco-bottom\" data-v-d4c98ce6><div class=\"capsul\" data-v-d4c98ce6></div> <div class=\"circle\" data-v-d4c98ce6></div></div>")])}
var Decorationvue_type_template_id_d4c98ce6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Forms/Decoration.vue?vue&type=template&id=d4c98ce6&scoped=true&

// CONCATENATED MODULE: ./components/Forms/Decoration.vue

var script = {}
function Decoration_injectStyles (context) {
  
  var style0 = __webpack_require__(324)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Decoration_component = Object(componentNormalizer["a" /* default */])(
  script,
  Decorationvue_type_template_id_d4c98ce6_scoped_true_render,
  Decorationvue_type_template_id_d4c98ce6_scoped_true_staticRenderFns,
  false,
  Decoration_injectStyles,
  "d4c98ce6",
  "4ee5f207"
  
)

/* harmony default export */ var Decoration = (Decoration_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  components: {
    Contact: Contact,
    Decoration: Decoration
  },

  head() {
    return {
      title: brand["a" /* default */].medical.name + ' - Contact'
    };
  }

});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/contact.vue



function contact_injectStyles (context) {
  
  var style0 = __webpack_require__(326)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var contact_component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  contact_injectStyles,
  "4859c0ba",
  "2bacd2b3"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (contact_component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map