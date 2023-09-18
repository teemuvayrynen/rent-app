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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet-cluster */ \"(app-pages-browser)/./node_modules/react-leaflet-cluster/lib/index.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var node_modules_leaflet_geosearch_dist_geosearch_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/leaflet-geosearch/dist/geosearch.css */ \"(app-pages-browser)/./node_modules/leaflet-geosearch/dist/geosearch.css\");\n/* harmony import */ var _map_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.css */ \"(app-pages-browser)/./src/components/Map/map.css\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LeafletSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeafletSearch */ \"(app-pages-browser)/./src/components/Map/LeafletSearch.jsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useUserGeoLocation */ \"(app-pages-browser)/./src/components/Map/useUserGeoLocation.js\");\n/* harmony import */ var _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../apartmentData.json */ \"(app-pages-browser)/./apartmentData.json\");\n/* harmony import */ var _ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ApartmentCard/ApartmentCard */ \"(app-pages-browser)/./src/components/ApartmentCard/ApartmentCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst customIcon = new leaflet__WEBPACK_IMPORTED_MODULE_6__.Icon({\n    iconUrl: \"https://cdn-icons-png.flaticon.com/128/684/684908.png\",\n    iconSize: [\n        38,\n        38\n    ]\n});\nconst apartmentMarkers = _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment)=>{\n    return apartment.location;\n});\nfunction Map() {\n    _s();\n    const kruununhakaCoordinates = [\n        60.1729,\n        24.9591\n    ];\n    const userLocation = (0,_useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const goToUserLocation = ()=>{\n        if (userLocation.isLoaded && !userLocation.error) {\n            mapRef.current.flyTo([\n                userLocation.location.lat,\n                userLocation.location.long\n            ], 15, {\n                animate: true,\n                duration: 1\n            });\n        }\n    };\n    const goToApartmentLocation = (apartment)=>{\n        console.log(apartment.location);\n        if (mapRef.current) {\n            mapRef.current.flyTo(apartment.location, 16, {\n                animate: true,\n                duration: 1\n            });\n            mapRef.current.eachLayer(function(layer) {\n                if (layer instanceof L.Marker) {\n                    if (layer.getLatLng().equals(apartment.location)) {\n                        const markerElement = layer.getElement();\n                        setTimeout(()=>{\n                            markerElement.click();\n                        }, 2000);\n                    }\n                }\n            });\n        }\n    };\n    const widenMap = ()=>{\n        const map = document.querySelector(\".leaflet-container\");\n        const widenButton = document.querySelector(\".open-me\");\n        const container = document.querySelector(\".footer-container\");\n        container.classList.toggle(\"show\");\n        widenButton.classList.toggle(\"active\");\n        map.classList.toggle(\"active\");\n        document.querySelector(\".flex-container\").classList.toggle(\"disabled\");\n        setTimeout(()=>{\n            mapRef.current.invalidateSize();\n        }, 500);\n        const mapList = document.querySelector(\".map-apartment-list\");\n        const apartmentCards = document.querySelectorAll(\".card-container\");\n        apartmentCards.forEach((apartmentCard)=>apartmentCard.classList.toggle(\"map\"));\n        mapList.classList.toggle(\"active\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_12__.MapContainer, {\n                ref: mapRef,\n                center: kruununhakaCoordinates,\n                zoom: 13,\n                scrollWheelZoom: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_13__.TileLayer, {\n                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LeafletSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        chunkedLoading: true,\n                        children: apartmentMarkers.map((marker, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_14__.Marker, {\n                                position: marker,\n                                icon: customIcon,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_15__.Popup, {\n                                    children: \"Marker\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"locate-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faLocationDot,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: goToUserLocation\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"open-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faCircleChevronDown,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: widenMap\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 97,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"map-apartment-list\",\n                children: _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        apartment: apartment,\n                        handleClick: goToApartmentLocation\n                    }, index, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 102,\n                        columnNumber: 20\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Map, \"cf7nFnvvGhzmLOHN8ahglPz7d0Q=\", false, function() {\n    return [\n        _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcC9NYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDb0Q7QUFDdkI7QUFDckI7QUFDeUI7QUFDekM7QUFDYTtBQUNlO0FBQ21CO0FBQ29CO0FBQ2hDO0FBQ3RCO0FBQ3dCO0FBQ0k7QUFHM0QsTUFBTWdCLGFBQWEsSUFBSVQseUNBQUlBLENBQUM7SUFDMUJVLFNBQVM7SUFDVEMsVUFBVTtRQUFDO1FBQUc7S0FBRztBQUNuQjtBQUVBLE1BQU1DLG1CQUFtQkwsaURBQWFBLENBQUNNLEdBQUcsQ0FBQ0MsQ0FBQUE7SUFDekMsT0FBT0EsVUFBVUMsUUFBUTtBQUMzQjtBQUVBLFNBQVNDOztJQUNQLE1BQU1DLHlCQUF5QjtRQUFDO1FBQVM7S0FBUTtJQUNqRCxNQUFNQyxlQUFlYiwrREFBa0JBO0lBQ3ZDLE1BQU1jLFNBQVNiLDZDQUFNQSxDQUFDO0lBRXRCLE1BQU1jLG1CQUFtQjtRQUN2QixJQUFHRixhQUFhRyxRQUFRLElBQUksQ0FBQ0gsYUFBYUksS0FBSyxFQUFDO1lBQzVDSCxPQUFPSSxPQUFPLENBQUNDLEtBQUssQ0FBQztnQkFBQ04sYUFBYUgsUUFBUSxDQUFDVSxHQUFHO2dCQUFFUCxhQUFhSCxRQUFRLENBQUNXLElBQUk7YUFBQyxFQUFFLElBQUk7Z0JBQUNDLFNBQVE7Z0JBQU1DLFVBQVU7WUFBQztRQUMvRztJQUNIO0lBR0EsTUFBTUMsd0JBQXdCLENBQUNmO1FBQzdCZ0IsUUFBUUMsR0FBRyxDQUFDakIsVUFBVUMsUUFBUTtRQUM5QixJQUFHSSxPQUFPSSxPQUFPLEVBQUM7WUFDaEJKLE9BQU9JLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDVixVQUFVQyxRQUFRLEVBQUUsSUFBSTtnQkFBQ1ksU0FBUTtnQkFBTUMsVUFBVTtZQUFDO1lBRXZFVCxPQUFPSSxPQUFPLENBQUNTLFNBQVMsQ0FBQyxTQUFVQyxLQUFLO2dCQUN0QyxJQUFJQSxpQkFBaUJDLEVBQUV0QyxNQUFNLEVBQUU7b0JBRTdCLElBQUlxQyxNQUFNRSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ3RCLFVBQVVDLFFBQVEsR0FBRzt3QkFDaEQsTUFBTXNCLGdCQUFnQkosTUFBTUssVUFBVTt3QkFDdENDLFdBQVc7NEJBQ1RGLGNBQWNHLEtBQUs7d0JBQ3JCLEdBQUU7b0JBQ0o7Z0JBQ0Y7WUFDRjtRQUVGO0lBQ0Y7SUFFQSxNQUFNQyxXQUFXO1FBQ2YsTUFBTTVCLE1BQU02QixTQUFTQyxhQUFhLENBQUM7UUFDbkMsTUFBTUMsY0FBY0YsU0FBU0MsYUFBYSxDQUFDO1FBQzNDLE1BQU1FLFlBQVlILFNBQVNDLGFBQWEsQ0FBQztRQUN6Q0UsVUFBVUMsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDM0JILFlBQVlFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQzdCbEMsSUFBSWlDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3JCTCxTQUFTQyxhQUFhLENBQUMsbUJBQW1CRyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUMzRFIsV0FBVztZQUFPcEIsT0FBT0ksT0FBTyxDQUFDeUIsY0FBYztRQUFFLEdBQUc7UUFDcEQsTUFBTUMsVUFBVVAsU0FBU0MsYUFBYSxDQUFDO1FBQ3ZDLE1BQU1PLGlCQUFpQlIsU0FBU1MsZ0JBQWdCLENBQUM7UUFDakRELGVBQWVFLE9BQU8sQ0FBQ0MsQ0FBQUEsZ0JBQWlCQSxjQUFjUCxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUN2RUUsUUFBUUgsU0FBUyxDQUFDQyxNQUFNLENBQUM7SUFDekI7SUFFRixxQkFDRTs7MEJBQ0UsOERBQUNyRCx3REFBWUE7Z0JBQUM0RCxLQUFLbkM7Z0JBQVFvQyxRQUFRdEM7Z0JBQXdCdUMsTUFBTTtnQkFBSUMsaUJBQWlCOztrQ0FDcEYsOERBQUM5RCxxREFBU0E7d0JBQ1IrRCxhQUFZO3dCQUNaQyxLQUFJOzs7Ozs7a0NBRU4sOERBQUMxRCxzREFBZ0JBOzs7OztrQ0FDakIsOERBQUNGLDhEQUFrQkE7d0JBQUM2RCxjQUFjO2tDQUMvQmhELGlCQUFpQkMsR0FBRyxDQUFDLENBQUNnRCxRQUFRQzs0QkFDN0IscUJBQ0UsOERBQUNsRSxrREFBTUE7Z0NBQWFtRSxVQUFVRjtnQ0FBUUcsTUFBTXZEOzBDQUMxQyw0RUFBQ1osaURBQUtBOzhDQUFDOzs7Ozs7K0JBRElpRTs7Ozs7d0JBTWpCOzs7Ozs7a0NBRUYsOERBQUNHO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDaEUsMkVBQWVBOzRCQUFDOEQsTUFBTTdELDZFQUFhQTs0QkFBRWdFLE1BQUs7NEJBQUtDLE9BQU87Z0NBQUVDLE9BQU87NEJBQU87NEJBQUdDLFNBQVNsRDs7Ozs7Ozs7Ozs7a0NBRXZGLDhEQUFDNkM7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNoRSwyRUFBZUE7NEJBQUM4RCxNQUFNNUQsbUZBQW1CQTs0QkFBRStELE1BQUs7NEJBQUtDLE9BQU87Z0NBQUVDLE9BQU87NEJBQU87NEJBQUdDLFNBQVM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzNGLDhEQUFDd0I7Z0JBQUlDLFdBQVU7MEJBQ1YzRCxpREFBYUEsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLFdBQVdnRDtvQkFDN0IscUJBQU8sOERBQUN0RCxxRUFBYUE7d0JBQWFNLFdBQVdBO3dCQUFXeUQsYUFBYTFDO3VCQUExQ2lDOzs7OztnQkFDN0I7Ozs7Ozs7O0FBS1Y7R0FqRlM5Qzs7UUFFY1gsMkRBQWtCQTs7O0tBRmhDVztBQW1GVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzP2IyODMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXBDb250YWluZXIsIFRpbGVMYXllciwgTWFya2VyLCBQb3B1cCwgdXNlTWFwIH0gZnJvbSAncmVhY3QtbGVhZmxldCdcbmltcG9ydCBNYXJrZXJDbHVzdGVyR3JvdXAgZnJvbSAncmVhY3QtbGVhZmxldC1jbHVzdGVyJztcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcbmltcG9ydCAnbm9kZV9tb2R1bGVzL2xlYWZsZXQtZ2Vvc2VhcmNoL2Rpc3QvZ2Vvc2VhcmNoLmNzcyc7XG5pbXBvcnQgJy4vbWFwLmNzcydcbmltcG9ydCB7IEljb24gfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCBMZWFmbGV0Z2VvU2VhcmNoIGZyb20gJy4vTGVhZmxldFNlYXJjaCdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUxvY2F0aW9uRG90LCBmYUNpcmNsZUNoZXZyb25Eb3dufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgdXNlVXNlckdlb0xvY2F0aW9uIGZyb20gJy4vdXNlVXNlckdlb0xvY2F0aW9uJ1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwYXJ0bWVudERhdGEgZnJvbSAnLi4vLi4vLi4vYXBhcnRtZW50RGF0YS5qc29uJ1xuaW1wb3J0IEFwYXJ0bWVudENhcmQgZnJvbSAnLi4vQXBhcnRtZW50Q2FyZC9BcGFydG1lbnRDYXJkJztcblxuXG5jb25zdCBjdXN0b21JY29uID0gbmV3IEljb24oe1xuICBpY29uVXJsOiBcImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzY4NC82ODQ5MDgucG5nXCIsXG4gIGljb25TaXplOiBbMzgsMzhdXG59KVxuXG5jb25zdCBhcGFydG1lbnRNYXJrZXJzID0gYXBhcnRtZW50RGF0YS5tYXAoYXBhcnRtZW50ID0+IHtcbiAgcmV0dXJuIGFwYXJ0bWVudC5sb2NhdGlvblxufSkgIFxuXG5mdW5jdGlvbiBNYXAoKSB7XG4gIGNvbnN0IGtydXVudW5oYWthQ29vcmRpbmF0ZXMgPSBbNjAuMTcyOSwgMjQuOTU5MV07XG4gIGNvbnN0IHVzZXJMb2NhdGlvbiA9IHVzZVVzZXJHZW9Mb2NhdGlvbigpXG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGNvbnN0IGdvVG9Vc2VyTG9jYXRpb24gPSAoKSA9PiB7XG4gICAgaWYodXNlckxvY2F0aW9uLmlzTG9hZGVkICYmICF1c2VyTG9jYXRpb24uZXJyb3Ipe1xuICAgICAgICBtYXBSZWYuY3VycmVudC5mbHlUbyhbdXNlckxvY2F0aW9uLmxvY2F0aW9uLmxhdCwgdXNlckxvY2F0aW9uLmxvY2F0aW9uLmxvbmddLCAxNSwge2FuaW1hdGU6dHJ1ZSwgZHVyYXRpb246IDF9KVxuICAgICB9XG4gIH1cblxuXG4gIGNvbnN0IGdvVG9BcGFydG1lbnRMb2NhdGlvbiA9IChhcGFydG1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhcGFydG1lbnQubG9jYXRpb24pXG4gICAgaWYobWFwUmVmLmN1cnJlbnQpe1xuICAgICAgbWFwUmVmLmN1cnJlbnQuZmx5VG8oYXBhcnRtZW50LmxvY2F0aW9uLCAxNiwge2FuaW1hdGU6dHJ1ZSwgZHVyYXRpb246IDF9KVxuXG4gICAgICBtYXBSZWYuY3VycmVudC5lYWNoTGF5ZXIoZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICAgIGlmIChsYXllciBpbnN0YW5jZW9mIEwuTWFya2VyKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGxheWVyLmdldExhdExuZygpLmVxdWFscyhhcGFydG1lbnQubG9jYXRpb24pKSB7ICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlckVsZW1lbnQgPSBsYXllci5nZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbWFya2VyRWxlbWVudC5jbGljaygpXG4gICAgICAgICAgICB9LDIwMDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICAgICBcbiAgICB9XG4gIH1cblxuICBjb25zdCB3aWRlbk1hcCA9ICgpID0+IHtcbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVhZmxldC1jb250YWluZXInKVxuICAgIGNvbnN0IHdpZGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbWUnKVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICB3aWRlbkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIG1hcC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWNvbnRhaW5lcicpLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2FibGVkJylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHttYXBSZWYuY3VycmVudC5pbnZhbGlkYXRlU2l6ZSgpfSwgNTAwKVxuICAgIGNvbnN0IG1hcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwLWFwYXJ0bWVudC1saXN0JylcbiAgICBjb25zdCBhcGFydG1lbnRDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWNvbnRhaW5lcicpXG4gICAgYXBhcnRtZW50Q2FyZHMuZm9yRWFjaChhcGFydG1lbnRDYXJkID0+IGFwYXJ0bWVudENhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnbWFwJykpXG4gICAgbWFwTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNYXBDb250YWluZXIgcmVmPXttYXBSZWZ9IGNlbnRlcj17a3J1dW51bmhha2FDb29yZGluYXRlc30gem9vbT17MTN9IHNjcm9sbFdoZWVsWm9vbT17dHJ1ZX0+XG4gICAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8TGVhZmxldGdlb1NlYXJjaC8+XG4gICAgICAgIDxNYXJrZXJDbHVzdGVyR3JvdXAgY2h1bmtlZExvYWRpbmc+XG4gICAgICAgICAge2FwYXJ0bWVudE1hcmtlcnMubWFwKChtYXJrZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TWFya2VyIGtleT17aW5kZXh9IHBvc2l0aW9uPXttYXJrZXJ9IGljb249e2N1c3RvbUljb259PlxuICAgICAgICAgICAgICAgIDxQb3B1cD5cbiAgICAgICAgICAgICAgICAgIE1hcmtlclxuICAgICAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICAgICAgIDwvTWFya2VyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L01hcmtlckNsdXN0ZXJHcm91cD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvY2F0ZS1tZSc+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTG9jYXRpb25Eb3R9IHNpemU9XCIzeFwiIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScgfX0gb25DbGljaz17Z29Ub1VzZXJMb2NhdGlvbn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J29wZW4tbWUnPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2lyY2xlQ2hldnJvbkRvd259IHNpemU9XCIzeFwiIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScgfX0gb25DbGljaz17d2lkZW5NYXB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01hcENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXAtYXBhcnRtZW50LWxpc3QnPlxuICAgICAgICAgIHthcGFydG1lbnREYXRhLm1hcCgoYXBhcnRtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxBcGFydG1lbnRDYXJkIGtleT17aW5kZXh9IGFwYXJ0bWVudD17YXBhcnRtZW50fSBoYW5kbGVDbGljaz17Z29Ub0FwYXJ0bWVudExvY2F0aW9ufS8+XG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgICAgIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJNYXBDb250YWluZXIiLCJUaWxlTGF5ZXIiLCJNYXJrZXIiLCJQb3B1cCIsInVzZU1hcCIsIk1hcmtlckNsdXN0ZXJHcm91cCIsIkljb24iLCJMZWFmbGV0Z2VvU2VhcmNoIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFMb2NhdGlvbkRvdCIsImZhQ2lyY2xlQ2hldnJvbkRvd24iLCJ1c2VVc2VyR2VvTG9jYXRpb24iLCJ1c2VSZWYiLCJhcGFydG1lbnREYXRhIiwiQXBhcnRtZW50Q2FyZCIsImN1c3RvbUljb24iLCJpY29uVXJsIiwiaWNvblNpemUiLCJhcGFydG1lbnRNYXJrZXJzIiwibWFwIiwiYXBhcnRtZW50IiwibG9jYXRpb24iLCJNYXAiLCJrcnV1bnVuaGFrYUNvb3JkaW5hdGVzIiwidXNlckxvY2F0aW9uIiwibWFwUmVmIiwiZ29Ub1VzZXJMb2NhdGlvbiIsImlzTG9hZGVkIiwiZXJyb3IiLCJjdXJyZW50IiwiZmx5VG8iLCJsYXQiLCJsb25nIiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwiZ29Ub0FwYXJ0bWVudExvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsImVhY2hMYXllciIsImxheWVyIiwiTCIsImdldExhdExuZyIsImVxdWFscyIsIm1hcmtlckVsZW1lbnQiLCJnZXRFbGVtZW50Iiwic2V0VGltZW91dCIsImNsaWNrIiwid2lkZW5NYXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWRlbkJ1dHRvbiIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImludmFsaWRhdGVTaXplIiwibWFwTGlzdCIsImFwYXJ0bWVudENhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhcGFydG1lbnRDYXJkIiwicmVmIiwiY2VudGVyIiwiem9vbSIsInNjcm9sbFdoZWVsWm9vbSIsImF0dHJpYnV0aW9uIiwidXJsIiwiY2h1bmtlZExvYWRpbmciLCJtYXJrZXIiLCJpbmRleCIsInBvc2l0aW9uIiwiaWNvbiIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiLCJzdHlsZSIsImNvbG9yIiwib25DbGljayIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Map/Map.js\n"));

/***/ })

});