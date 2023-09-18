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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet-cluster */ \"(app-pages-browser)/./node_modules/react-leaflet-cluster/lib/index.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var node_modules_leaflet_geosearch_dist_geosearch_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/leaflet-geosearch/dist/geosearch.css */ \"(app-pages-browser)/./node_modules/leaflet-geosearch/dist/geosearch.css\");\n/* harmony import */ var _map_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.css */ \"(app-pages-browser)/./src/components/Map/map.css\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LeafletSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeafletSearch */ \"(app-pages-browser)/./src/components/Map/LeafletSearch.jsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useUserGeoLocation */ \"(app-pages-browser)/./src/components/Map/useUserGeoLocation.js\");\n/* harmony import */ var _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../apartmentData.json */ \"(app-pages-browser)/./apartmentData.json\");\n/* harmony import */ var _ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ApartmentCard/ApartmentCard */ \"(app-pages-browser)/./src/components/ApartmentCard/ApartmentCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst customIcon = new leaflet__WEBPACK_IMPORTED_MODULE_6__.Icon({\n    iconUrl: \"https://cdn-icons-png.flaticon.com/128/684/684908.png\",\n    iconSize: [\n        38,\n        38\n    ]\n});\nconst apartmentMarkers = _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment)=>{\n    return apartment.location;\n});\nfunction Map() {\n    _s();\n    const [previousMarker, setPreviousMarker] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const kruununhakaCoordinates = [\n        60.1729,\n        24.9591\n    ];\n    const userLocation = (0,_useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const goToUserLocation = ()=>{\n        if (userLocation.isLoaded && !userLocation.error) {\n            mapRef.current.flyTo([\n                userLocation.location.lat,\n                userLocation.location.long\n            ], 15, {\n                animate: true,\n                duration: 1\n            });\n        }\n    };\n    const goToApartmentLocation = (apartment)=>{\n        console.log(apartment.location);\n        if (previousMarker) {\n            previousMarker.click();\n        }\n        if (mapRef.current) {\n            mapRef.current.flyTo(apartment.location, 16, {\n                animate: true,\n                duration: 1\n            });\n            mapRef.current.eachLayer(function(layer) {\n                if (layer instanceof L.Marker) {\n                    if (layer.getLatLng().equals(apartment.location)) {\n                        const markerElement = layer.getElement();\n                        setPreviousMarker((prev)=>markerElement);\n                        setTimeout(()=>{\n                            markerElement.click();\n                        }, 2000);\n                    }\n                }\n            });\n        }\n    };\n    const widenMap = ()=>{\n        const map = document.querySelector(\".leaflet-container\");\n        const widenButton = document.querySelector(\".open-me\");\n        const container = document.querySelector(\".footer-container\");\n        container.classList.toggle(\"show\");\n        widenButton.classList.toggle(\"active\");\n        map.classList.toggle(\"active\");\n        document.querySelector(\".flex-container\").classList.toggle(\"disabled\");\n        setTimeout(()=>{\n            mapRef.current.invalidateSize();\n        }, 500);\n        const mapList = document.querySelector(\".map-apartment-list\");\n        const apartmentCards = document.querySelectorAll(\".card-container\");\n        apartmentCards.forEach((apartmentCard)=>apartmentCard.classList.toggle(\"map\"));\n        mapList.classList.toggle(\"active\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_12__.MapContainer, {\n                ref: mapRef,\n                center: kruununhakaCoordinates,\n                zoom: 13,\n                scrollWheelZoom: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_13__.TileLayer, {\n                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LeafletSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        chunkedLoading: true,\n                        children: apartmentMarkers.map((marker, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_14__.Marker, {\n                                position: marker,\n                                icon: customIcon,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_15__.Popup, {\n                                    children: \"Marker\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"locate-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faLocationDot,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: goToUserLocation\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"open-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faCircleChevronDown,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: widenMap\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 103,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"map-apartment-list\",\n                children: _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        apartment: apartment,\n                        handleClick: goToApartmentLocation\n                    }, index, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 108,\n                        columnNumber: 20\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Map, \"9kDQ0DqLhwBQNwH2ex1V7fCQ6a4=\", false, function() {\n    return [\n        _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcC9NYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDb0Q7QUFDdkI7QUFDckI7QUFDeUI7QUFDekM7QUFDYTtBQUNlO0FBQ21CO0FBQ29CO0FBQ2hDO0FBQ1o7QUFDYztBQUNJO0FBRzNELE1BQU1pQixhQUFhLElBQUlWLHlDQUFJQSxDQUFDO0lBQzFCVyxTQUFTO0lBQ1RDLFVBQVU7UUFBQztRQUFHO0tBQUc7QUFDbkI7QUFFQSxNQUFNQyxtQkFBbUJMLGlEQUFhQSxDQUFDTSxHQUFHLENBQUNDLENBQUFBO0lBQ3pDLE9BQU9BLFVBQVVDLFFBQVE7QUFDM0I7QUFFQSxTQUFTQzs7SUFDUCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1hLHlCQUF5QjtRQUFDO1FBQVM7S0FBUTtJQUNqRCxNQUFNQyxlQUFlaEIsK0RBQWtCQTtJQUN2QyxNQUFNaUIsU0FBU2hCLDZDQUFNQSxDQUFDO0lBRXRCLE1BQU1pQixtQkFBbUI7UUFDdkIsSUFBR0YsYUFBYUcsUUFBUSxJQUFJLENBQUNILGFBQWFJLEtBQUssRUFBQztZQUM1Q0gsT0FBT0ksT0FBTyxDQUFDQyxLQUFLLENBQUM7Z0JBQUNOLGFBQWFMLFFBQVEsQ0FBQ1ksR0FBRztnQkFBRVAsYUFBYUwsUUFBUSxDQUFDYSxJQUFJO2FBQUMsRUFBRSxJQUFJO2dCQUFDQyxTQUFRO2dCQUFNQyxVQUFVO1lBQUM7UUFDL0c7SUFDSDtJQUdBLE1BQU1DLHdCQUF3QixDQUFDakI7UUFDN0JrQixRQUFRQyxHQUFHLENBQUNuQixVQUFVQyxRQUFRO1FBQzlCLElBQUdFLGdCQUFlO1lBQ2hCQSxlQUFlaUIsS0FBSztRQUN0QjtRQUVBLElBQUdiLE9BQU9JLE9BQU8sRUFBQztZQUNoQkosT0FBT0ksT0FBTyxDQUFDQyxLQUFLLENBQUNaLFVBQVVDLFFBQVEsRUFBRSxJQUFJO2dCQUFDYyxTQUFRO2dCQUFNQyxVQUFVO1lBQUM7WUFFdkVULE9BQU9JLE9BQU8sQ0FBQ1UsU0FBUyxDQUFDLFNBQVVDLEtBQUs7Z0JBQ3RDLElBQUlBLGlCQUFpQkMsRUFBRTFDLE1BQU0sRUFBRTtvQkFFN0IsSUFBSXlDLE1BQU1FLFNBQVMsR0FBR0MsTUFBTSxDQUFDekIsVUFBVUMsUUFBUSxHQUFHO3dCQUNoRCxNQUFNeUIsZ0JBQWdCSixNQUFNSyxVQUFVO3dCQUN0Q3ZCLGtCQUFrQndCLENBQUFBLE9BQVFGO3dCQUMxQkcsV0FBVzs0QkFDVEgsY0FBY04sS0FBSzt3QkFDckIsR0FBRTtvQkFDSjtnQkFDRjtZQUNGO1FBRUY7SUFDRjtJQUVBLE1BQU1VLFdBQVc7UUFDZixNQUFNL0IsTUFBTWdDLFNBQVNDLGFBQWEsQ0FBQztRQUNuQyxNQUFNQyxjQUFjRixTQUFTQyxhQUFhLENBQUM7UUFDM0MsTUFBTUUsWUFBWUgsU0FBU0MsYUFBYSxDQUFDO1FBQ3pDRSxVQUFVQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUMzQkgsWUFBWUUsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDN0JyQyxJQUFJb0MsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDckJMLFNBQVNDLGFBQWEsQ0FBQyxtQkFBbUJHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQzNEUCxXQUFXO1lBQU90QixPQUFPSSxPQUFPLENBQUMwQixjQUFjO1FBQUUsR0FBRztRQUNwRCxNQUFNQyxVQUFVUCxTQUFTQyxhQUFhLENBQUM7UUFDdkMsTUFBTU8saUJBQWlCUixTQUFTUyxnQkFBZ0IsQ0FBQztRQUNqREQsZUFBZUUsT0FBTyxDQUFDQyxDQUFBQSxnQkFBaUJBLGNBQWNQLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3ZFRSxRQUFRSCxTQUFTLENBQUNDLE1BQU0sQ0FBQztJQUN6QjtJQUVGLHFCQUNFOzswQkFDRSw4REFBQ3pELHdEQUFZQTtnQkFBQ2dFLEtBQUtwQztnQkFBUXFDLFFBQVF2QztnQkFBd0J3QyxNQUFNO2dCQUFJQyxpQkFBaUI7O2tDQUNwRiw4REFBQ2xFLHFEQUFTQTt3QkFDUm1FLGFBQVk7d0JBQ1pDLEtBQUk7Ozs7OztrQ0FFTiw4REFBQzlELHNEQUFnQkE7Ozs7O2tDQUNqQiw4REFBQ0YsOERBQWtCQTt3QkFBQ2lFLGNBQWM7a0NBQy9CbkQsaUJBQWlCQyxHQUFHLENBQUMsQ0FBQ21ELFFBQVFDOzRCQUM3QixxQkFDRSw4REFBQ3RFLGtEQUFNQTtnQ0FBYXVFLFVBQVVGO2dDQUFRRyxNQUFNMUQ7MENBQzFDLDRFQUFDYixpREFBS0E7OENBQUM7Ozs7OzsrQkFESXFFOzs7Ozt3QkFNakI7Ozs7OztrQ0FFRiw4REFBQ0c7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNwRSwyRUFBZUE7NEJBQUNrRSxNQUFNakUsNkVBQWFBOzRCQUFFb0UsTUFBSzs0QkFBS0MsT0FBTztnQ0FBRUMsT0FBTzs0QkFBTzs0QkFBR0MsU0FBU25EOzs7Ozs7Ozs7OztrQ0FFdkYsOERBQUM4Qzt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ3BFLDJFQUFlQTs0QkFBQ2tFLE1BQU1oRSxtRkFBbUJBOzRCQUFFbUUsTUFBSzs0QkFBS0MsT0FBTztnQ0FBRUMsT0FBTzs0QkFBTzs0QkFBR0MsU0FBUzdCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHM0YsOERBQUN3QjtnQkFBSUMsV0FBVTswQkFDVjlELGlEQUFhQSxDQUFDTSxHQUFHLENBQUMsQ0FBQ0MsV0FBV21EO29CQUM3QixxQkFBTyw4REFBQ3pELHFFQUFhQTt3QkFBYU0sV0FBV0E7d0JBQVc0RCxhQUFhM0M7dUJBQTFDa0M7Ozs7O2dCQUM3Qjs7Ozs7Ozs7QUFLVjtHQXZGU2pEOztRQUdjWiwyREFBa0JBOzs7S0FIaENZO0FBeUZULCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01hcC9NYXAuanM/YjI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcENvbnRhaW5lciwgVGlsZUxheWVyLCBNYXJrZXIsIFBvcHVwLCB1c2VNYXAgfSBmcm9tICdyZWFjdC1sZWFmbGV0J1xuaW1wb3J0IE1hcmtlckNsdXN0ZXJHcm91cCBmcm9tICdyZWFjdC1sZWFmbGV0LWNsdXN0ZXInO1xuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xuaW1wb3J0ICdub2RlX21vZHVsZXMvbGVhZmxldC1nZW9zZWFyY2gvZGlzdC9nZW9zZWFyY2guY3NzJztcbmltcG9ydCAnLi9tYXAuY3NzJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IExlYWZsZXRnZW9TZWFyY2ggZnJvbSAnLi9MZWFmbGV0U2VhcmNoJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhTG9jYXRpb25Eb3QsIGZhQ2lyY2xlQ2hldnJvbkRvd259IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB1c2VVc2VyR2VvTG9jYXRpb24gZnJvbSAnLi91c2VVc2VyR2VvTG9jYXRpb24nXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwYXJ0bWVudERhdGEgZnJvbSAnLi4vLi4vLi4vYXBhcnRtZW50RGF0YS5qc29uJ1xuaW1wb3J0IEFwYXJ0bWVudENhcmQgZnJvbSAnLi4vQXBhcnRtZW50Q2FyZC9BcGFydG1lbnRDYXJkJztcblxuXG5jb25zdCBjdXN0b21JY29uID0gbmV3IEljb24oe1xuICBpY29uVXJsOiBcImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzY4NC82ODQ5MDgucG5nXCIsXG4gIGljb25TaXplOiBbMzgsMzhdXG59KVxuXG5jb25zdCBhcGFydG1lbnRNYXJrZXJzID0gYXBhcnRtZW50RGF0YS5tYXAoYXBhcnRtZW50ID0+IHtcbiAgcmV0dXJuIGFwYXJ0bWVudC5sb2NhdGlvblxufSkgIFxuXG5mdW5jdGlvbiBNYXAoKSB7XG4gIGNvbnN0IFtwcmV2aW91c01hcmtlciwgc2V0UHJldmlvdXNNYXJrZXJdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3Qga3J1dW51bmhha2FDb29yZGluYXRlcyA9IFs2MC4xNzI5LCAyNC45NTkxXTtcbiAgY29uc3QgdXNlckxvY2F0aW9uID0gdXNlVXNlckdlb0xvY2F0aW9uKClcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgZ29Ub1VzZXJMb2NhdGlvbiA9ICgpID0+IHtcbiAgICBpZih1c2VyTG9jYXRpb24uaXNMb2FkZWQgJiYgIXVzZXJMb2NhdGlvbi5lcnJvcil7XG4gICAgICAgIG1hcFJlZi5jdXJyZW50LmZseVRvKFt1c2VyTG9jYXRpb24ubG9jYXRpb24ubGF0LCB1c2VyTG9jYXRpb24ubG9jYXRpb24ubG9uZ10sIDE1LCB7YW5pbWF0ZTp0cnVlLCBkdXJhdGlvbjogMX0pXG4gICAgIH1cbiAgfVxuXG5cbiAgY29uc3QgZ29Ub0FwYXJ0bWVudExvY2F0aW9uID0gKGFwYXJ0bWVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFwYXJ0bWVudC5sb2NhdGlvbilcbiAgICBpZihwcmV2aW91c01hcmtlcil7XG4gICAgICBwcmV2aW91c01hcmtlci5jbGljaygpXG4gICAgfVxuXG4gICAgaWYobWFwUmVmLmN1cnJlbnQpe1xuICAgICAgbWFwUmVmLmN1cnJlbnQuZmx5VG8oYXBhcnRtZW50LmxvY2F0aW9uLCAxNiwge2FuaW1hdGU6dHJ1ZSwgZHVyYXRpb246IDF9KVxuXG4gICAgICBtYXBSZWYuY3VycmVudC5lYWNoTGF5ZXIoZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICAgIGlmIChsYXllciBpbnN0YW5jZW9mIEwuTWFya2VyKSB7XG4gICAgICBcbiAgICAgICAgICBpZiAobGF5ZXIuZ2V0TGF0TG5nKCkuZXF1YWxzKGFwYXJ0bWVudC5sb2NhdGlvbikpIHsgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbWFya2VyRWxlbWVudCA9IGxheWVyLmdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIHNldFByZXZpb3VzTWFya2VyKHByZXYgPT4gbWFya2VyRWxlbWVudClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBtYXJrZXJFbGVtZW50LmNsaWNrKClcbiAgICAgICAgICAgIH0sMjAwMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgICAgIFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHdpZGVuTWFwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWFmbGV0LWNvbnRhaW5lcicpXG4gICAgY29uc3Qgd2lkZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1tZScpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci1jb250YWluZXInKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIHdpZGVuQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgbWFwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZXgtY29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzYWJsZWQnKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge21hcFJlZi5jdXJyZW50LmludmFsaWRhdGVTaXplKCl9LCA1MDApXG4gICAgY29uc3QgbWFwTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAtYXBhcnRtZW50LWxpc3QnKVxuICAgIGNvbnN0IGFwYXJ0bWVudENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtY29udGFpbmVyJylcbiAgICBhcGFydG1lbnRDYXJkcy5mb3JFYWNoKGFwYXJ0bWVudENhcmQgPT4gYXBhcnRtZW50Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdtYXAnKSlcbiAgICBtYXBMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1hcENvbnRhaW5lciByZWY9e21hcFJlZn0gY2VudGVyPXtrcnV1bnVuaGFrYUNvb3JkaW5hdGVzfSB6b29tPXsxM30gc2Nyb2xsV2hlZWxab29tPXt0cnVlfT5cbiAgICAgICAgPFRpbGVMYXllclxuICAgICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxMZWFmbGV0Z2VvU2VhcmNoLz5cbiAgICAgICAgPE1hcmtlckNsdXN0ZXJHcm91cCBjaHVua2VkTG9hZGluZz5cbiAgICAgICAgICB7YXBhcnRtZW50TWFya2Vycy5tYXAoKG1hcmtlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxNYXJrZXIga2V5PXtpbmRleH0gcG9zaXRpb249e21hcmtlcn0gaWNvbj17Y3VzdG9tSWNvbn0+XG4gICAgICAgICAgICAgICAgPFBvcHVwPlxuICAgICAgICAgICAgICAgICAgTWFya2VyXG4gICAgICAgICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvTWFya2VyQ2x1c3Rlckdyb3VwPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9jYXRlLW1lJz5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMb2NhdGlvbkRvdH0gc2l6ZT1cIjN4XCIgc3R5bGU9e3sgY29sb3I6ICdibHVlJyB9fSBvbkNsaWNrPXtnb1RvVXNlckxvY2F0aW9ufS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3Blbi1tZSc+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaXJjbGVDaGV2cm9uRG93bn0gc2l6ZT1cIjN4XCIgc3R5bGU9e3sgY29sb3I6ICdibHVlJyB9fSBvbkNsaWNrPXt3aWRlbk1hcH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWFwQ29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21hcC1hcGFydG1lbnQtbGlzdCc+XG4gICAgICAgICAge2FwYXJ0bWVudERhdGEubWFwKChhcGFydG1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEFwYXJ0bWVudENhcmQga2V5PXtpbmRleH0gYXBhcnRtZW50PXthcGFydG1lbnR9IGhhbmRsZUNsaWNrPXtnb1RvQXBhcnRtZW50TG9jYXRpb259Lz5cbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICAgICAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIk1hcmtlciIsIlBvcHVwIiwidXNlTWFwIiwiTWFya2VyQ2x1c3Rlckdyb3VwIiwiSWNvbiIsIkxlYWZsZXRnZW9TZWFyY2giLCJGb250QXdlc29tZUljb24iLCJmYUxvY2F0aW9uRG90IiwiZmFDaXJjbGVDaGV2cm9uRG93biIsInVzZVVzZXJHZW9Mb2NhdGlvbiIsInVzZVJlZiIsInVzZVN0YXRlIiwiYXBhcnRtZW50RGF0YSIsIkFwYXJ0bWVudENhcmQiLCJjdXN0b21JY29uIiwiaWNvblVybCIsImljb25TaXplIiwiYXBhcnRtZW50TWFya2VycyIsIm1hcCIsImFwYXJ0bWVudCIsImxvY2F0aW9uIiwiTWFwIiwicHJldmlvdXNNYXJrZXIiLCJzZXRQcmV2aW91c01hcmtlciIsImtydXVudW5oYWthQ29vcmRpbmF0ZXMiLCJ1c2VyTG9jYXRpb24iLCJtYXBSZWYiLCJnb1RvVXNlckxvY2F0aW9uIiwiaXNMb2FkZWQiLCJlcnJvciIsImN1cnJlbnQiLCJmbHlUbyIsImxhdCIsImxvbmciLCJhbmltYXRlIiwiZHVyYXRpb24iLCJnb1RvQXBhcnRtZW50TG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwiY2xpY2siLCJlYWNoTGF5ZXIiLCJsYXllciIsIkwiLCJnZXRMYXRMbmciLCJlcXVhbHMiLCJtYXJrZXJFbGVtZW50IiwiZ2V0RWxlbWVudCIsInByZXYiLCJzZXRUaW1lb3V0Iiwid2lkZW5NYXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWRlbkJ1dHRvbiIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImludmFsaWRhdGVTaXplIiwibWFwTGlzdCIsImFwYXJ0bWVudENhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhcGFydG1lbnRDYXJkIiwicmVmIiwiY2VudGVyIiwiem9vbSIsInNjcm9sbFdoZWVsWm9vbSIsImF0dHJpYnV0aW9uIiwidXJsIiwiY2h1bmtlZExvYWRpbmciLCJtYXJrZXIiLCJpbmRleCIsInBvc2l0aW9uIiwiaWNvbiIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiLCJzdHlsZSIsImNvbG9yIiwib25DbGljayIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Map/Map.js\n"));

/***/ })

});