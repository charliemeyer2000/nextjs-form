(() => {
var exports = {};
exports.id = 648;
exports.ids = [648];
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

/***/ 596:
/***/ ((module) => {

// Exports
module.exports = {
	"multipleChoice": "MultipleChoice_multipleChoice__BFEcK",
	"question": "MultipleChoice_question__pb7pC",
	"label": "MultipleChoice_label__loe7P",
	"options": "MultipleChoice_options__Qj7oA",
	"option": "MultipleChoice_option__4o_r8",
	"radio": "MultipleChoice_radio__ZTQgH"
};


/***/ }),

/***/ 193:
/***/ ((module) => {

// Exports
module.exports = {
	"questions": "Questions_questions__aMviX",
	"header": "Questions_header__kAF8n",
	"forms": "Questions_forms__0CXs_",
	"title": "Questions_title__xEeSZ",
	"description": "Questions_description__y9u9d",
	"submitWrapper": "Questions_submitWrapper__m0Mob",
	"alert": "Questions_alert__e_ElX",
	"slide-in-and-out": "Questions_slide-in-and-out__W4P6y"
};


/***/ }),

/***/ 120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fform_2FQuestions_absolutePagePath_private_next_pages_2Fform_2FQuestions_js_preferredRegion_),
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

// NAMESPACE OBJECT: ./pages/form/Questions.js
var Questions_namespaceObject = {};
__webpack_require__.r(Questions_namespaceObject);
__webpack_require__.d(Questions_namespaceObject, {
  "default": () => (Questions)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./styles/Questions.module.css
var Questions_module = __webpack_require__(193);
var Questions_module_default = /*#__PURE__*/__webpack_require__.n(Questions_module);
// EXTERNAL MODULE: ./components/SmallTextField/SmallTextField.js
var SmallTextField = __webpack_require__(114);
// EXTERNAL MODULE: ./styles/MultipleChoice.module.css
var MultipleChoice_module = __webpack_require__(596);
var MultipleChoice_module_default = /*#__PURE__*/__webpack_require__.n(MultipleChoice_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/MultipleChoice/MultipleChoice.js


// react

function MultipleChoice({ question , label , value , onChange , options  }) {
    const [isFocused, setIsFocused] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (MultipleChoice_module_default()).multipleChoice,
        style: isFocused ? {
            boxShadow: "rgb(0 0 0 / 20%) 0px 0px 15px"
        } : {},
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: (MultipleChoice_module_default()).question,
                children: question
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (MultipleChoice_module_default()).options,
                children: options.map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (MultipleChoice_module_default()).option,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "radio",
                                className: (MultipleChoice_module_default()).radio,
                                id: option,
                                name: label,
                                value: option,
                                checked: value === option,
                                onChange: onChange,
                                onFocus: ()=>setIsFocused(true),
                                onBlur: ()=>setIsFocused(false)
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                htmlFor: option,
                                className: (MultipleChoice_module_default()).option_label,
                                children: option
                            })
                        ]
                    }))
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ColoredButton/ColoredButton.js
var ColoredButton = __webpack_require__(225);
// EXTERNAL MODULE: ./components/BoringButton/BoringButton.js
var BoringButton = __webpack_require__(701);
// EXTERNAL MODULE: ./slices/formSlice.js
var formSlice = __webpack_require__(489);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: ./pages/form/Questions.js


// components




// redux


// routing

// react

// mui

function Questions() {
    const question1 = (0,external_react_redux_.useSelector)(formSlice/* selectQuestion1 */.tj);
    const question2 = (0,external_react_redux_.useSelector)(formSlice/* selectQuestion2 */.N);
    const question3 = (0,external_react_redux_.useSelector)(formSlice/* selectQuestion3 */.WZ);
    const question4 = (0,external_react_redux_.useSelector)(formSlice/* selectQuestion4 */.sr);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const [showErrorPopup, setShowErrorPopup] = (0,external_react_.useState)("");
    const goBack = ()=>{
        router.push("/form/Intro");
    };
    const handleNext = ()=>{
        // first check if the name is not empty
        if (question1 === "") {
            setShowErrorPopup("Please answer question 1.");
            // wait 3 seconds and then remove the error popup
            setTimeout(()=>{
                setShowErrorPopup("");
            }, 3000);
            return;
        }
        // next check if question 2 is not empty
        if (question2 === "") {
            setShowErrorPopup("Please answer question 2.");
            // wait 3 seconds and then remove the error popup
            setTimeout(()=>{
                setShowErrorPopup("");
            }, 3000);
            return;
        }
        // next check if question 3 is not empty
        if (question3 === "") {
            setShowErrorPopup("Please answer question 3.");
            // wait 3 seconds and then remove the error popup
            setTimeout(()=>{
                setShowErrorPopup("");
            }, 3000);
            return;
        }
        // next check if question 4 is not empty
        if (question4 === "") {
            setShowErrorPopup("Please answer question 4.");
            // wait 3 seconds and then remove the error popup
            setTimeout(()=>{
                setShowErrorPopup("");
            }, 3000);
            return;
        }
        // if we get here, then all the questions are answered
        // so we can go to the next page
        router.push("/form/Confirmation");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Questions_module_default()).questions,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Questions_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: (Questions_module_default()).title,
                        children: "Questions"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: (Questions_module_default()).description,
                        children: "Please answer the following questions. The questions may be multiple choice questions, or they may be short-answer questions. Please fill out all of them with the best answer."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Questions_module_default()).forms,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(SmallTextField/* default */.Z, {
                        question: "What is your favorite color?",
                        label: "Favorite Color",
                        value: question1,
                        onChange: (e)=>dispatch((0,formSlice/* setQuestion1 */.uw)(e.target.value))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(MultipleChoice, {
                        question: "What is your favorite food?",
                        value: question2,
                        onChange: (e)=>dispatch((0,formSlice/* setQuestion2 */.qD)(e.target.value)),
                        options: [
                            "Pizza",
                            "Pasta",
                            "Burgers",
                            "Hot Dogs"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(SmallTextField/* default */.Z, {
                        question: "What is your favorite animal?",
                        label: "Favorite Animal",
                        value: question3,
                        onChange: (e)=>dispatch((0,formSlice/* setQuestion3 */.lL)(e.target.value))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(MultipleChoice, {
                        question: "What is your favorite sport?",
                        value: question4,
                        onChange: (e)=>dispatch((0,formSlice/* setQuestion4 */.SC)(e.target.value)),
                        options: [
                            "Football",
                            "Basketball",
                            "Baseball",
                            "Soccer"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Questions_module_default()).submitWrapper,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(BoringButton/* default */.Z, {
                                text: "Back",
                                onClick: goBack
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(ColoredButton/* default */.Z, {
                                text: "Next",
                                onClick: handleNext
                            })
                        ]
                    })
                ]
            }),
            showErrorPopup === "" ? null : /*#__PURE__*/ jsx_runtime.jsx(material_.Alert, {
                severity: "error",
                className: (Questions_module_default()).alert,
                children: showErrorPopup
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fform%2FQuestions&absolutePagePath=private-next-pages%2Fform%2FQuestions.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fform_2FQuestions_absolutePagePath_private_next_pages_2Fform_2FQuestions_js_preferredRegion_ = ((0,helpers/* hoist */.l)(Questions_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(Questions_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(Questions_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(Questions_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(Questions_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(Questions_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(Questions_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(Questions_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(Questions_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(Questions_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(Questions_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/form/Questions","pathname":"/form/Questions","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: Questions_namespaceObject })
        
        
    

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

/***/ 692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

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
var __webpack_exports__ = __webpack_require__.X(0, [722,893,489,123], () => (__webpack_exec__(120)));
module.exports = __webpack_exports__;

})();