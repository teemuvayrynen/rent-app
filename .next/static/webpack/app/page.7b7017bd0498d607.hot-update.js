"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Map/Map.js":
/*!***********************************!*\
  !*** ./src/components/Map/Map.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet-cluster */ \"(app-pages-browser)/./node_modules/react-leaflet-cluster/lib/index.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var node_modules_leaflet_geosearch_dist_geosearch_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/leaflet-geosearch/dist/geosearch.css */ \"(app-pages-browser)/./node_modules/leaflet-geosearch/dist/geosearch.css\");\n/* harmony import */ var _map_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.css */ \"(app-pages-browser)/./src/components/Map/map.css\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LeafletSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeafletSearch */ \"(app-pages-browser)/./src/components/Map/LeafletSearch.jsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useUserGeoLocation */ \"(app-pages-browser)/./src/components/Map/useUserGeoLocation.js\");\n/* harmony import */ var _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../apartmentData.json */ \"(app-pages-browser)/./apartmentData.json\");\n/* harmony import */ var _ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ApartmentCard/ApartmentCard */ \"(app-pages-browser)/./src/components/ApartmentCard/ApartmentCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst customIcon = new leaflet__WEBPACK_IMPORTED_MODULE_6__.Icon({\n    iconUrl: \"https://cdn-icons-png.flaticon.com/128/684/684908.png\",\n    iconSize: [\n        38,\n        38\n    ]\n});\nconst apartmentMarkers = _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment)=>{\n    return apartment.location;\n});\nfunction Map() {\n    _s();\n    const [previousMarker, setPreviousMarker] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const kruununhakaCoordinates = [\n        60.1729,\n        24.9591\n    ];\n    const userLocation = (0,_useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const goToUserLocation = ()=>{\n        if (userLocation.isLoaded && !userLocation.error) {\n            mapRef.current.flyTo([\n                userLocation.location.lat,\n                userLocation.location.long\n            ], 15, {\n                animate: true,\n                duration: 1\n            });\n        }\n    };\n    const goToApartmentLocation = (apartment)=>{\n        if (mapRef.current) {\n            mapRef.current.flyTo(apartment.location, 16, {\n                animate: true,\n                duration: 1\n            });\n            setTimeout(()=>{\n                mapRef.current.eachLayer(function(layer) {\n                    if (layer instanceof L.Marker && layer.getLatLng().equals(apartment.location)) {\n                        const markerElement = layer.getElement();\n                        markerElement.click();\n                    }\n                });\n            }, 100); // Delay the click action for 100 milliseconds\n        }\n    };\n    const widenMap = ()=>{\n        const map = document.querySelector(\".leaflet-container\");\n        const widenButton = document.querySelector(\".open-me\");\n        const container = document.querySelector(\".footer-container\");\n        container.classList.toggle(\"show\");\n        widenButton.classList.toggle(\"active\");\n        map.classList.toggle(\"active\");\n        document.querySelector(\".flex-container\").classList.toggle(\"disabled\");\n        setTimeout(()=>{\n            mapRef.current.invalidateSize();\n        }, 500);\n        const mapList = document.querySelector(\".map-apartment-list\");\n        const apartmentCards = document.querySelectorAll(\".card-container\");\n        apartmentCards.forEach((apartmentCard)=>apartmentCard.classList.toggle(\"map\"));\n        mapList.classList.toggle(\"active\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_12__.MapContainer, {\n                ref: mapRef,\n                center: kruununhakaCoordinates,\n                zoom: 13,\n                scrollWheelZoom: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_13__.TileLayer, {\n                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LeafletSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        chunkedLoading: true,\n                        children: apartmentMarkers.map((marker, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_14__.Marker, {\n                                position: marker,\n                                icon: customIcon,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_15__.Popup, {\n                                    children: \"Marker\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"locate-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faLocationDot,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: goToUserLocation\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"open-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faCircleChevronDown,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: widenMap\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"map-apartment-list\",\n                children: _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        apartment: apartment,\n                        handleClick: goToApartmentLocation\n                    }, index, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 98,\n                        columnNumber: 20\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Map, \"9kDQ0DqLhwBQNwH2ex1V7fCQ6a4=\", false, function() {\n    return [\n        _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcC9NYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDb0Q7QUFDdkI7QUFDckI7QUFDeUI7QUFDekM7QUFDYTtBQUNlO0FBQ21CO0FBQ29CO0FBQ2hDO0FBQ1o7QUFDYztBQUNJO0FBRzNELE1BQU1pQixhQUFhLElBQUlWLHlDQUFJQSxDQUFDO0lBQzFCVyxTQUFTO0lBQ1RDLFVBQVU7UUFBQztRQUFHO0tBQUc7QUFDbkI7QUFFQSxNQUFNQyxtQkFBbUJMLGlEQUFhQSxDQUFDTSxHQUFHLENBQUNDLENBQUFBO0lBQ3pDLE9BQU9BLFVBQVVDLFFBQVE7QUFDM0I7QUFFQSxTQUFTQzs7SUFDUCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1hLHlCQUF5QjtRQUFDO1FBQVM7S0FBUTtJQUNqRCxNQUFNQyxlQUFlaEIsK0RBQWtCQTtJQUN2QyxNQUFNaUIsU0FBU2hCLDZDQUFNQSxDQUFDO0lBRXRCLE1BQU1pQixtQkFBbUI7UUFDdkIsSUFBR0YsYUFBYUcsUUFBUSxJQUFJLENBQUNILGFBQWFJLEtBQUssRUFBQztZQUM1Q0gsT0FBT0ksT0FBTyxDQUFDQyxLQUFLLENBQUM7Z0JBQUNOLGFBQWFMLFFBQVEsQ0FBQ1ksR0FBRztnQkFBRVAsYUFBYUwsUUFBUSxDQUFDYSxJQUFJO2FBQUMsRUFBRSxJQUFJO2dCQUFDQyxTQUFRO2dCQUFNQyxVQUFVO1lBQUM7UUFDL0c7SUFDSDtJQUdBLE1BQU1DLHdCQUF3QixDQUFDakI7UUFDN0IsSUFBSU8sT0FBT0ksT0FBTyxFQUFFO1lBQ2xCSixPQUFPSSxPQUFPLENBQUNDLEtBQUssQ0FBQ1osVUFBVUMsUUFBUSxFQUFFLElBQUk7Z0JBQUVjLFNBQVM7Z0JBQU1DLFVBQVU7WUFBRTtZQUUxRUUsV0FBVztnQkFDVFgsT0FBT0ksT0FBTyxDQUFDUSxTQUFTLENBQUMsU0FBVUMsS0FBSztvQkFDdEMsSUFBSUEsaUJBQWlCQyxFQUFFeEMsTUFBTSxJQUFJdUMsTUFBTUUsU0FBUyxHQUFHQyxNQUFNLENBQUN2QixVQUFVQyxRQUFRLEdBQUc7d0JBQzdFLE1BQU11QixnQkFBZ0JKLE1BQU1LLFVBQVU7d0JBQ3RDRCxjQUFjRSxLQUFLO29CQUNyQjtnQkFDRjtZQUNGLEdBQUcsTUFBTSw4Q0FBOEM7UUFDekQ7SUFDRjtJQUVBLE1BQU1DLFdBQVc7UUFDZixNQUFNNUIsTUFBTTZCLFNBQVNDLGFBQWEsQ0FBQztRQUNuQyxNQUFNQyxjQUFjRixTQUFTQyxhQUFhLENBQUM7UUFDM0MsTUFBTUUsWUFBWUgsU0FBU0MsYUFBYSxDQUFDO1FBQ3pDRSxVQUFVQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUMzQkgsWUFBWUUsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDN0JsQyxJQUFJaUMsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDckJMLFNBQVNDLGFBQWEsQ0FBQyxtQkFBbUJHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQzNEZixXQUFXO1lBQU9YLE9BQU9JLE9BQU8sQ0FBQ3VCLGNBQWM7UUFBRSxHQUFHO1FBQ3BELE1BQU1DLFVBQVVQLFNBQVNDLGFBQWEsQ0FBQztRQUN2QyxNQUFNTyxpQkFBaUJSLFNBQVNTLGdCQUFnQixDQUFDO1FBQ2pERCxlQUFlRSxPQUFPLENBQUNDLENBQUFBLGdCQUFpQkEsY0FBY1AsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDdkVFLFFBQVFILFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO0lBQ3pCO0lBRUYscUJBQ0U7OzBCQUNFLDhEQUFDdEQsd0RBQVlBO2dCQUFDNkQsS0FBS2pDO2dCQUFRa0MsUUFBUXBDO2dCQUF3QnFDLE1BQU07Z0JBQUlDLGlCQUFpQjs7a0NBQ3BGLDhEQUFDL0QscURBQVNBO3dCQUNSZ0UsYUFBWTt3QkFDWkMsS0FBSTs7Ozs7O2tDQUVOLDhEQUFDM0Qsc0RBQWdCQTs7Ozs7a0NBQ2pCLDhEQUFDRiw4REFBa0JBO3dCQUFDOEQsY0FBYztrQ0FDL0JoRCxpQkFBaUJDLEdBQUcsQ0FBQyxDQUFDZ0QsUUFBUUM7NEJBQzdCLHFCQUNFLDhEQUFDbkUsa0RBQU1BO2dDQUFhb0UsVUFBVUY7Z0NBQVFHLE1BQU12RDswQ0FDMUMsNEVBQUNiLGlEQUFLQTs4Q0FBQzs7Ozs7OytCQURJa0U7Ozs7O3dCQU1qQjs7Ozs7O2tDQUVGLDhEQUFDRzt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2pFLDJFQUFlQTs0QkFBQytELE1BQU05RCw2RUFBYUE7NEJBQUVpRSxNQUFLOzRCQUFLQyxPQUFPO2dDQUFFQyxPQUFPOzRCQUFPOzRCQUFHQyxTQUFTaEQ7Ozs7Ozs7Ozs7O2tDQUV2Riw4REFBQzJDO3dCQUFJQyxXQUFVO2tDQUNmLDRFQUFDakUsMkVBQWVBOzRCQUFDK0QsTUFBTTdELG1GQUFtQkE7NEJBQUVnRSxNQUFLOzRCQUFLQyxPQUFPO2dDQUFFQyxPQUFPOzRCQUFPOzRCQUFHQyxTQUFTN0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUczRiw4REFBQ3dCO2dCQUFJQyxXQUFVOzBCQUNWM0QsaURBQWFBLENBQUNNLEdBQUcsQ0FBQyxDQUFDQyxXQUFXZ0Q7b0JBQzdCLHFCQUFPLDhEQUFDdEQscUVBQWFBO3dCQUFhTSxXQUFXQTt3QkFBV3lELGFBQWF4Qzt1QkFBMUMrQjs7Ozs7Z0JBQzdCOzs7Ozs7OztBQUtWO0dBN0VTOUM7O1FBR2NaLDJEQUFrQkE7OztLQUhoQ1k7QUErRVQsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFwL01hcC5qcz9iMjgzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIE1hcmtlciwgUG9wdXAsIHVzZU1hcCB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnXG5pbXBvcnQgTWFya2VyQ2x1c3Rlckdyb3VwIGZyb20gJ3JlYWN0LWxlYWZsZXQtY2x1c3Rlcic7XG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XG5pbXBvcnQgJ25vZGVfbW9kdWxlcy9sZWFmbGV0LWdlb3NlYXJjaC9kaXN0L2dlb3NlYXJjaC5jc3MnO1xuaW1wb3J0ICcuL21hcC5jc3MnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgTGVhZmxldGdlb1NlYXJjaCBmcm9tICcuL0xlYWZsZXRTZWFyY2gnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFMb2NhdGlvbkRvdCwgZmFDaXJjbGVDaGV2cm9uRG93bn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuaW1wb3J0IHVzZVVzZXJHZW9Mb2NhdGlvbiBmcm9tICcuL3VzZVVzZXJHZW9Mb2NhdGlvbidcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXBhcnRtZW50RGF0YSBmcm9tICcuLi8uLi8uLi9hcGFydG1lbnREYXRhLmpzb24nXG5pbXBvcnQgQXBhcnRtZW50Q2FyZCBmcm9tICcuLi9BcGFydG1lbnRDYXJkL0FwYXJ0bWVudENhcmQnO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSBuZXcgSWNvbih7XG4gIGljb25Vcmw6IFwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNjg0LzY4NDkwOC5wbmdcIixcbiAgaWNvblNpemU6IFszOCwzOF1cbn0pXG5cbmNvbnN0IGFwYXJ0bWVudE1hcmtlcnMgPSBhcGFydG1lbnREYXRhLm1hcChhcGFydG1lbnQgPT4ge1xuICByZXR1cm4gYXBhcnRtZW50LmxvY2F0aW9uXG59KSAgXG5cbmZ1bmN0aW9uIE1hcCgpIHtcbiAgY29uc3QgW3ByZXZpb3VzTWFya2VyLCBzZXRQcmV2aW91c01hcmtlcl0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBrcnV1bnVuaGFrYUNvb3JkaW5hdGVzID0gWzYwLjE3MjksIDI0Ljk1OTFdO1xuICBjb25zdCB1c2VyTG9jYXRpb24gPSB1c2VVc2VyR2VvTG9jYXRpb24oKVxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWYobnVsbClcblxuICBjb25zdCBnb1RvVXNlckxvY2F0aW9uID0gKCkgPT4ge1xuICAgIGlmKHVzZXJMb2NhdGlvbi5pc0xvYWRlZCAmJiAhdXNlckxvY2F0aW9uLmVycm9yKXtcbiAgICAgICAgbWFwUmVmLmN1cnJlbnQuZmx5VG8oW3VzZXJMb2NhdGlvbi5sb2NhdGlvbi5sYXQsIHVzZXJMb2NhdGlvbi5sb2NhdGlvbi5sb25nXSwgMTUsIHthbmltYXRlOnRydWUsIGR1cmF0aW9uOiAxfSlcbiAgICAgfVxuICB9XG5cblxuICBjb25zdCBnb1RvQXBhcnRtZW50TG9jYXRpb24gPSAoYXBhcnRtZW50KSA9PiB7XG4gICAgaWYgKG1hcFJlZi5jdXJyZW50KSB7XG4gICAgICBtYXBSZWYuY3VycmVudC5mbHlUbyhhcGFydG1lbnQubG9jYXRpb24sIDE2LCB7IGFuaW1hdGU6IHRydWUsIGR1cmF0aW9uOiAxIH0pO1xuICBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtYXBSZWYuY3VycmVudC5lYWNoTGF5ZXIoZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICAgICAgaWYgKGxheWVyIGluc3RhbmNlb2YgTC5NYXJrZXIgJiYgbGF5ZXIuZ2V0TGF0TG5nKCkuZXF1YWxzKGFwYXJ0bWVudC5sb2NhdGlvbikpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlckVsZW1lbnQgPSBsYXllci5nZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBtYXJrZXJFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDEwMCk7IC8vIERlbGF5IHRoZSBjbGljayBhY3Rpb24gZm9yIDEwMCBtaWxsaXNlY29uZHNcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgd2lkZW5NYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlYWZsZXQtY29udGFpbmVyJylcbiAgICBjb25zdCB3aWRlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1lJylcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgd2lkZW5CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICBtYXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1jb250YWluZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZCcpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7bWFwUmVmLmN1cnJlbnQuaW52YWxpZGF0ZVNpemUoKX0sIDUwMClcbiAgICBjb25zdCBtYXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcC1hcGFydG1lbnQtbGlzdCcpXG4gICAgY29uc3QgYXBhcnRtZW50Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1jb250YWluZXInKVxuICAgIGFwYXJ0bWVudENhcmRzLmZvckVhY2goYXBhcnRtZW50Q2FyZCA9PiBhcGFydG1lbnRDYXJkLmNsYXNzTGlzdC50b2dnbGUoJ21hcCcpKVxuICAgIG1hcExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWFwQ29udGFpbmVyIHJlZj17bWFwUmVmfSBjZW50ZXI9e2tydXVudW5oYWthQ29vcmRpbmF0ZXN9IHpvb209ezEzfSBzY3JvbGxXaGVlbFpvb209e3RydWV9PlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPExlYWZsZXRnZW9TZWFyY2gvPlxuICAgICAgICA8TWFya2VyQ2x1c3Rlckdyb3VwIGNodW5rZWRMb2FkaW5nPlxuICAgICAgICAgIHthcGFydG1lbnRNYXJrZXJzLm1hcCgobWFya2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE1hcmtlciBrZXk9e2luZGV4fSBwb3NpdGlvbj17bWFya2VyfSBpY29uPXtjdXN0b21JY29ufT5cbiAgICAgICAgICAgICAgICA8UG9wdXA+XG4gICAgICAgICAgICAgICAgICBNYXJrZXJcbiAgICAgICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9NYXJrZXJDbHVzdGVyR3JvdXA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2NhdGUtbWUnPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvY2F0aW9uRG90fSBzaXplPVwiM3hcIiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19IG9uQ2xpY2s9e2dvVG9Vc2VyTG9jYXRpb259Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcGVuLW1lJz5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNpcmNsZUNoZXZyb25Eb3dufSBzaXplPVwiM3hcIiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19IG9uQ2xpY2s9e3dpZGVuTWFwfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwLWFwYXJ0bWVudC1saXN0Jz5cbiAgICAgICAgICB7YXBhcnRtZW50RGF0YS5tYXAoKGFwYXJ0bWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8QXBhcnRtZW50Q2FyZCBrZXk9e2luZGV4fSBhcGFydG1lbnQ9e2FwYXJ0bWVudH0gaGFuZGxlQ2xpY2s9e2dvVG9BcGFydG1lbnRMb2NhdGlvbn0vPlxuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICAgICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJ1c2VNYXAiLCJNYXJrZXJDbHVzdGVyR3JvdXAiLCJJY29uIiwiTGVhZmxldGdlb1NlYXJjaCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhTG9jYXRpb25Eb3QiLCJmYUNpcmNsZUNoZXZyb25Eb3duIiwidXNlVXNlckdlb0xvY2F0aW9uIiwidXNlUmVmIiwidXNlU3RhdGUiLCJhcGFydG1lbnREYXRhIiwiQXBhcnRtZW50Q2FyZCIsImN1c3RvbUljb24iLCJpY29uVXJsIiwiaWNvblNpemUiLCJhcGFydG1lbnRNYXJrZXJzIiwibWFwIiwiYXBhcnRtZW50IiwibG9jYXRpb24iLCJNYXAiLCJwcmV2aW91c01hcmtlciIsInNldFByZXZpb3VzTWFya2VyIiwia3J1dW51bmhha2FDb29yZGluYXRlcyIsInVzZXJMb2NhdGlvbiIsIm1hcFJlZiIsImdvVG9Vc2VyTG9jYXRpb24iLCJpc0xvYWRlZCIsImVycm9yIiwiY3VycmVudCIsImZseVRvIiwibGF0IiwibG9uZyIsImFuaW1hdGUiLCJkdXJhdGlvbiIsImdvVG9BcGFydG1lbnRMb2NhdGlvbiIsInNldFRpbWVvdXQiLCJlYWNoTGF5ZXIiLCJsYXllciIsIkwiLCJnZXRMYXRMbmciLCJlcXVhbHMiLCJtYXJrZXJFbGVtZW50IiwiZ2V0RWxlbWVudCIsImNsaWNrIiwid2lkZW5NYXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWRlbkJ1dHRvbiIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImludmFsaWRhdGVTaXplIiwibWFwTGlzdCIsImFwYXJ0bWVudENhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhcGFydG1lbnRDYXJkIiwicmVmIiwiY2VudGVyIiwiem9vbSIsInNjcm9sbFdoZWVsWm9vbSIsImF0dHJpYnV0aW9uIiwidXJsIiwiY2h1bmtlZExvYWRpbmciLCJtYXJrZXIiLCJpbmRleCIsInBvc2l0aW9uIiwiaWNvbiIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiLCJzdHlsZSIsImNvbG9yIiwib25DbGljayIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Map/Map.js\n"));

/***/ })

});