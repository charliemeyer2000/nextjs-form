(() => {
var exports = {};
exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 458:
/***/ ((module) => {

// Exports
module.exports = {
	"button_wrapper": "BoringButton_button_wrapper__gpZ67",
	"button": "BoringButton_button__wfb4Q",
	"button_text": "BoringButton_button_text__1kG2b"
};


/***/ }),

/***/ 514:
/***/ ((module) => {

// Exports
module.exports = {
	"button_wrapper": "ColoredButton_button_wrapper__sN4Ur",
	"button": "ColoredButton_button__cHcX8",
	"button_text": "ColoredButton_button_text__1Vuuw"
};


/***/ }),

/***/ 520:
/***/ ((module) => {

// Exports
module.exports = {
	"confirmation": "Confirmation_confirmation__QozVj",
	"header": "Confirmation_header__2Z6VR",
	"title": "Confirmation_title__8K235",
	"description": "Confirmation_description__877k_",
	"answers": "Confirmation_answers__udfhr",
	"answer": "Confirmation_answer__Rqls_",
	"question": "Confirmation_question__WI6YZ",
	"response": "Confirmation_response__Q_wK0",
	"buttons": "Confirmation_buttons__I2eXt"
};


/***/ }),

/***/ 875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fform_2FConfirmation_absolutePagePath_private_next_pages_2Fform_2FConfirmation_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/form/Confirmation.js
var Confirmation_namespaceObject = {};
__webpack_require__.r(Confirmation_namespaceObject);
__webpack_require__.d(Confirmation_namespaceObject, {
  "default": () => (Confirmation)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./styles/Confirmation.module.css
var Confirmation_module = __webpack_require__(520);
var Confirmation_module_default = /*#__PURE__*/__webpack_require__.n(Confirmation_module);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./slices/formSlice.js
var formSlice = __webpack_require__(489);
// EXTERNAL MODULE: ./components/BoringButton/BoringButton.js
var BoringButton = __webpack_require__(701);
// EXTERNAL MODULE: ./components/ColoredButton/ColoredButton.js
var ColoredButton = __webpack_require__(225);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./pages/form/Confirmation.js


// redux


// components


// navigation

function Confirmation() {
    const name = (0,external_react_redux_.useSelector)(formSlice/* selectName */.lj);
    const phone = (0,external_react_redux_.useSelector)(formSlice/* selectPhone */.bD);
    const email = (0,external_react_redux_.useSelector)(formSlice/* selectEmail */.cQ);
    const question1 = (0,external_react_redux_.useSelector)(formSlice/* selectQuestion1 */.tj);
    const question2 = (0,external_react_redux_.useSelector)(formSlice/* selectQuestion2 */.N);
    const question3 = (0,external_react_redux_.useSelector)(formSlice/* selectQuestion3 */.WZ);
    const question4 = (0,external_react_redux_.useSelector)(formSlice/* selectQuestion4 */.sr);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Confirmation_module_default()).confirmation,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Confirmation_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: (Confirmation_module_default()).title,
                        children: "Please review your answers here. "
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: (Confirmation_module_default()).description,
                        children: 'If you need to make any changes, please click the back button at the bottom. If you are satisfied with your responses, please click "Confirm" to submit your answers.'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Confirmation_module_default()).answers,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Confirmation_module_default()).answer,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: (Confirmation_module_default()).question,
                                children: "What is your name?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Confirmation_module_default()).response,
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Confirmation_module_default()).answer,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: (Confirmation_module_default()).question,
                                children: "What is your phone number?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Confirmation_module_default()).response,
                                children: phone
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Confirmation_module_default()).answer,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: (Confirmation_module_default()).question,
                                children: "What is your email address?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Confirmation_module_default()).response,
                                children: email
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Confirmation_module_default()).answer,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: (Confirmation_module_default()).question,
                                children: "What is your favorite color?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Confirmation_module_default()).response,
                                children: question1
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Confirmation_module_default()).answer,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: (Confirmation_module_default()).question,
                                children: "What is your favorite food?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Confirmation_module_default()).response,
                                children: question2
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Confirmation_module_default()).answer,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: (Confirmation_module_default()).question,
                                children: "What is your favorite animal?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Confirmation_module_default()).response,
                                children: question3
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Confirmation_module_default()).answer,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: (Confirmation_module_default()).question,
                                children: "What is your favorite movie?"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Confirmation_module_default()).response,
                                children: question4
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Confirmation_module_default()).buttons,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(BoringButton/* default */.Z, {
                        text: "Back",
                        onClick: ()=>{
                            router.push("/form/Questions");
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ColoredButton/* default */.Z, {
                        text: "Confirm Submission",
                        onClick: ()=>{
                            router.push("/form/Success");
                        }
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fform%2FConfirmation&absolutePagePath=private-next-pages%2Fform%2FConfirmation.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fform_2FConfirmation_absolutePagePath_private_next_pages_2Fform_2FConfirmation_js_preferredRegion_ = ((0,helpers/* hoist */.l)(Confirmation_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(Confirmation_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(Confirmation_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(Confirmation_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(Confirmation_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(Confirmation_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(Confirmation_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(Confirmation_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(Confirmation_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(Confirmation_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(Confirmation_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/form/Confirmation","pathname":"/form/Confirmation","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: Confirmation_namespaceObject })
        
        
    

/***/ }),

/***/ 701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ BoringButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _styles_BoringButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(458);
/* harmony import */ var _styles_BoringButton_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_BoringButton_module_css__WEBPACK_IMPORTED_MODULE_1__);


function BoringButton({ text , onClick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_BoringButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().button_wrapper),
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_styles_BoringButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_styles_BoringButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().button_text),
                children: text
            })
        })
    });
}


/***/ }),

/***/ 225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ColoredButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _styles_ColoredButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(514);
/* harmony import */ var _styles_ColoredButton_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ColoredButton_module_css__WEBPACK_IMPORTED_MODULE_1__);


function ColoredButton({ text , onClick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_ColoredButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().button_wrapper),
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_styles_ColoredButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_styles_ColoredButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().button_text),
                children: text
            })
        })
    });
}


/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 76:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [722,893,489], () => (__webpack_exec__(875)));
module.exports = __webpack_exports__;

})();