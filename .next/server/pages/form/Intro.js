(() => {
var exports = {};
exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 938:
/***/ ((module) => {

// Exports
module.exports = {
	"intro": "Intro_intro__HYCW_",
	"header": "Intro_header__XtkIm",
	"forms": "Intro_forms__e9OaM",
	"intro_title": "Intro_intro_title__vRdf8",
	"intro_description": "Intro_intro_description__K6OTg",
	"alert": "Intro_alert__botNX",
	"slide-in-and-out": "Intro_slide-in-and-out__lXj_c"
};


/***/ }),

/***/ 356:
/***/ ((module) => {

// Exports
module.exports = {
	"phoneNumber": "PhoneNumber_phoneNumber__XHZp9",
	"question": "PhoneNumber_question__LLixY",
	"phoneContainer": "PhoneNumber_phoneContainer__V_E5V",
	"phoneContainer_left": "PhoneNumber_phoneContainer_left__tZfbw",
	"dropdown": "PhoneNumber_dropdown__Kha03",
	"dropdownToggle": "PhoneNumber_dropdownToggle__FbUyA",
	"arrowDown": "PhoneNumber_arrowDown__ygDso",
	"arrowUp": "PhoneNumber_arrowUp__86OkR",
	"dropdownMenu": "PhoneNumber_dropdownMenu__lh5wd",
	"dropdownItem": "PhoneNumber_dropdownItem__LfL_m",
	"phoneContainer_right": "PhoneNumber_phoneContainer_right__zTXkg",
	"phoneContainer_right_prefix": "PhoneNumber_phoneContainer_right_prefix__uAeOg",
	"phoneContainer_right_input": "PhoneNumber_phoneContainer_right_input___jVk9"
};


/***/ }),

/***/ 153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fform_2FIntro_absolutePagePath_private_next_pages_2Fform_2FIntro_js_preferredRegion_),
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

// NAMESPACE OBJECT: ./pages/form/Intro.js
var Intro_namespaceObject = {};
__webpack_require__.r(Intro_namespaceObject);
__webpack_require__.d(Intro_namespaceObject, {
  "default": () => (Intro)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./styles/Intro.module.css
var Intro_module = __webpack_require__(938);
var Intro_module_default = /*#__PURE__*/__webpack_require__.n(Intro_module);
// EXTERNAL MODULE: ./components/SmallTextField/SmallTextField.js
var SmallTextField = __webpack_require__(114);
// EXTERNAL MODULE: ./styles/PhoneNumber.module.css
var PhoneNumber_module = __webpack_require__(356);
var PhoneNumber_module_default = /*#__PURE__*/__webpack_require__.n(PhoneNumber_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/PhoneNumber/PhoneNumber.js



function PhoneNumber({ value , onChange  }) {
    const [country, setCountry] = (0,external_react_.useState)({
        name: "United States",
        prefix: 1,
        flag: "us"
    });
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [isFocused, setIsFocused] = (0,external_react_.useState)(false);
    const dropdownRef = (0,external_react_.useRef)(null);
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen);
    };
    const selectCountry = (selectedCountry)=>{
        console.log("selectedCountry: ", selectedCountry);
        setCountry(selectedCountry);
        setIsOpen(false);
    };
    const isValidPhoneNumber = (phoneNumber)=>{
        const regex = /^\d{10}$/;
        return regex.test(phoneNumber);
    };
    const countries = [
        {
            name: "United States",
            prefix: 1,
            flag: "us"
        },
        {
            name: "Austria",
            prefix: 43,
            flag: "at"
        },
        {
            name: "Belgium",
            prefix: 32,
            flag: "be"
        },
        {
            name: "Bulgaria",
            prefix: 359,
            flag: "bg"
        },
        {
            name: "Croatia",
            prefix: 385,
            flag: "hr"
        },
        {
            name: "Cyprus",
            prefix: 357,
            flag: "cy"
        },
        {
            name: "Czech Republic",
            prefix: 420,
            flag: "cz"
        },
        {
            name: "Denmark",
            prefix: 45,
            flag: "dk"
        },
        {
            name: "Estonia",
            prefix: 372,
            flag: "ee"
        },
        {
            name: "Finland",
            prefix: 358,
            flag: "fi"
        },
        {
            name: "France",
            prefix: 33,
            flag: "fr"
        },
        {
            name: "Germany",
            prefix: 49,
            flag: "de"
        },
        {
            name: "Greece",
            prefix: 30,
            flag: "gr"
        },
        {
            name: "Hungary",
            prefix: 36,
            flag: "hu"
        },
        {
            name: "Iceland",
            prefix: 354,
            flag: "is"
        },
        {
            name: "Republic of Ireland",
            prefix: 353,
            flag: "ie"
        },
        {
            name: "Italy",
            prefix: 39,
            flag: "it"
        },
        {
            name: "Latvia",
            prefix: 371,
            flag: "lv"
        },
        {
            name: "Liechtenstein",
            prefix: 423,
            flag: "li"
        },
        {
            name: "Lithuania",
            prefix: 370,
            flag: "lt"
        },
        {
            name: "Luxembourg",
            prefix: 352,
            flag: "lu"
        },
        {
            name: "Malta",
            prefix: 356,
            flag: "mt"
        },
        {
            name: "Netherlands",
            prefix: 31,
            flag: "nl"
        },
        {
            name: "Norway",
            prefix: 47,
            flag: "no"
        },
        {
            name: "Poland",
            prefix: 48,
            flag: "pl"
        },
        {
            name: "Portugal",
            prefix: 351,
            flag: "pt"
        },
        {
            name: "Romania",
            prefix: 40,
            flag: "ro"
        },
        {
            name: "Slovakia",
            prefix: 421,
            flag: "sk"
        },
        {
            name: "Slovenia",
            prefix: 386,
            flag: "si"
        },
        {
            name: "Spain",
            prefix: 34,
            flag: "es"
        },
        {
            name: "Sweden",
            prefix: 46,
            flag: "se"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (PhoneNumber_module_default()).phoneNumber,
        style: isFocused ? {
            boxShadow: "rgb(0 0 0 / 20%) 0px 0px 15px"
        } : {},
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: (PhoneNumber_module_default()).question,
                children: "What is your phone number?"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (PhoneNumber_module_default()).phoneContainer,
                style: {
                    border: isFocused ? "1px solid var(--light-blue)" : "1px solid var(--gray)"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (PhoneNumber_module_default()).phoneContainer_left,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (PhoneNumber_module_default()).dropdown,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (PhoneNumber_module_default()).dropdownToggle,
                                    onClick: toggleDropdown,
                                    ref: dropdownRef,
                                    children: [
                                        String.fromCodePoint(parseInt(`1F1E6`, 16) + country.flag.toUpperCase().charCodeAt(0) - 65),
                                        String.fromCodePoint(parseInt(`1F1E6`, 16) + country.flag.toUpperCase().charCodeAt(1) - 65),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: isOpen ? (PhoneNumber_module_default()).arrowUp : (PhoneNumber_module_default()).arrowDown,
                                            children: "▾"
                                        })
                                    ]
                                }),
                                isOpen && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: (PhoneNumber_module_default()).dropdownMenu,
                                    children: countries.map((idxCountry)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (PhoneNumber_module_default()).dropdownItem,
                                            onClick: ()=>selectCountry(idxCountry),
                                            style: idxCountry.name === country.name ? {
                                                backgroundColor: "var(--grey60)"
                                            } : {},
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        String.fromCodePoint(parseInt(`1F1E6`, 16) + idxCountry.flag.toUpperCase().charCodeAt(0) - 65),
                                                        String.fromCodePoint(parseInt(`1F1E6`, 16) + idxCountry.flag.toUpperCase().charCodeAt(1) - 65)
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: idxCountry.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "(+",
                                                        idxCountry.prefix,
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        }, idxCountry.name))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (PhoneNumber_module_default()).phoneContainer_right,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: (PhoneNumber_module_default()).phoneContainer_right_prefix,
                                children: [
                                    "+",
                                    country.prefix
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "tel",
                                className: (PhoneNumber_module_default()).phoneContainer_right_input,
                                onChange: (e)=>onChange(e),
                                value: value,
                                onFocus: ()=>{
                                    setIsFocused(true);
                                    setIsOpen(false);
                                },
                                onBlur: ()=>setIsFocused(false)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ColoredButton/ColoredButton.js
var ColoredButton = __webpack_require__(225);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./slices/formSlice.js
var formSlice = __webpack_require__(489);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./pages/form/Intro.js


// components



// mui

// redux


// react

// routing

function Intro() {
    const name = (0,external_react_redux_.useSelector)(formSlice/* selectName */.lj);
    const phone = (0,external_react_redux_.useSelector)(formSlice/* selectPhone */.bD);
    const email = (0,external_react_redux_.useSelector)(formSlice/* selectEmail */.cQ);
    const [showErrorPopup, setShowErrorPopup] = (0,external_react_.useState)("");
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const handleNext = ()=>{
        // first check if the name is not empty
        if (name === "") {
            setShowErrorPopup("Please enter your name.");
            // wait 3 seconds and then remove the error popup
            setTimeout(()=>{
                setShowErrorPopup("");
            }, 3000);
            return;
        }
        // next check if the phone number is not empty
        if (phone === "") {
            setShowErrorPopup("Please enter your phone number.");
            // wait 3 seconds and then remove the error popup
            setTimeout(()=>{
                setShowErrorPopup("");
            }, 3000);
            return;
        }
        // next check if the phone number is valid
        if (phone.length !== 10) {
            setShowErrorPopup("Please enter a valid phone number.");
            // wait 3 seconds and then remove the error popup
            setTimeout(()=>{
                setShowErrorPopup("");
            }, 3000);
            return;
        }
        // next check if the email is not empty
        if (email === "") {
            setShowErrorPopup("Please enter your email.");
            // wait 3 seconds and then remove the error popup
            setTimeout(()=>{
                setShowErrorPopup("");
            }, 3000);
            return;
        }
        // next check if the email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setShowErrorPopup("Please enter a valid email.");
            // wait 3 seconds and then remove the error popup
            setTimeout(()=>{
                setShowErrorPopup("");
            }, 3000);
            return;
        }
        // if all of the above checks pass, then we can move on to the next page
        router.push("/form/Questions");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Intro_module_default()).intro,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Intro_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: (Intro_module_default()).intro_title,
                        children: "Form Demo"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: (Intro_module_default()).intro_description,
                        children: "This is a demo of a form built with Next.js and CSS modules. Thank you for visiting. I hope you enjoy this. Please note that I have never built using Next.js before, nor have i used quite literally any of the tools mentioned. Also admittedly i used redux instead of xcode, since redux (imo) is better."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: (Intro_module_default()).intro_description,
                        children: "I am traditionally a React native developer, using regular css, react, and have a general jack-of-all-trades knowledge for most deployment and application management stuff. You can see the stuff i've built on my github, personal website, etc. Nextjs is probably better, but I haven't had the time to learn it yet."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Intro_module_default()).forms,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(SmallTextField/* default */.Z, {
                        question: "What is your name?",
                        label: "First and last name.",
                        value: name,
                        onChange: (e)=>dispatch((0,formSlice/* setName */.qC)(e.target.value)),
                        isRequired: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(PhoneNumber, {
                        value: phone,
                        onChange: (e)=>{
                            dispatch((0,formSlice/* setPhone */._)(e.target.value));
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(SmallTextField/* default */.Z, {
                        question: "What is your email?",
                        label: "Email address.",
                        value: email,
                        onChange: (e)=>{
                            dispatch((0,formSlice/* setEmail */.vV)(e.target.value));
                        },
                        isRequired: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ColoredButton/* default */.Z, {
                        text: "Next",
                        onClick: handleNext
                    })
                ]
            }),
            showErrorPopup === "" ? null : /*#__PURE__*/ jsx_runtime.jsx(material_.Alert, {
                severity: "error",
                className: (Intro_module_default()).alert,
                children: showErrorPopup
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fform%2FIntro&absolutePagePath=private-next-pages%2Fform%2FIntro.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fform_2FIntro_absolutePagePath_private_next_pages_2Fform_2FIntro_js_preferredRegion_ = ((0,helpers/* hoist */.l)(Intro_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(Intro_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(Intro_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(Intro_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(Intro_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(Intro_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(Intro_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(Intro_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(Intro_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(Intro_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(Intro_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/form/Intro","pathname":"/form/Intro","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: Intro_namespaceObject })
        
        
    

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
var __webpack_exports__ = __webpack_require__.X(0, [722,893,489,123], () => (__webpack_exec__(153)));
module.exports = __webpack_exports__;

})();