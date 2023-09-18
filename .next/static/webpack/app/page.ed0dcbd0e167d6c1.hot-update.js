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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet-cluster */ \"(app-pages-browser)/./node_modules/react-leaflet-cluster/lib/index.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var node_modules_leaflet_geosearch_dist_geosearch_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/leaflet-geosearch/dist/geosearch.css */ \"(app-pages-browser)/./node_modules/leaflet-geosearch/dist/geosearch.css\");\n/* harmony import */ var _map_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.css */ \"(app-pages-browser)/./src/components/Map/map.css\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LeafletSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeafletSearch */ \"(app-pages-browser)/./src/components/Map/LeafletSearch.jsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useUserGeoLocation */ \"(app-pages-browser)/./src/components/Map/useUserGeoLocation.js\");\n/* harmony import */ var _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../apartmentData.json */ \"(app-pages-browser)/./apartmentData.json\");\n/* harmony import */ var _ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ApartmentCard/ApartmentCard */ \"(app-pages-browser)/./src/components/ApartmentCard/ApartmentCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst customIcon = new leaflet__WEBPACK_IMPORTED_MODULE_6__.Icon({\n    iconUrl: \"https://cdn-icons-png.flaticon.com/128/684/684908.png\",\n    iconSize: [\n        38,\n        38\n    ]\n});\nconst apartmentMarkers = _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment)=>{\n    return apartment.location;\n});\nfunction Map() {\n    _s();\n    const kruununhakaCoordinates = [\n        60.1729,\n        24.9591\n    ];\n    const userLocation = (0,_useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const goToUserLocation = ()=>{\n        if (userLocation.isLoaded && !userLocation.error) {\n            mapRef.current.flyTo([\n                userLocation.location.lat,\n                userLocation.location.long\n            ], 15, {\n                animate: true,\n                duration: 1\n            });\n        }\n    };\n    const goToApartmentLocation = (apartment)=>{\n        console.log(apartment.location);\n        if (mapRef.current) {\n            mapRef.current.flyTo(apartment.location, 16, {\n                animate: true,\n                duration: 1\n            });\n            mapRef.current.eachLayer(function(layer) {\n                // Check if the layer is a marker\n                if (layer instanceof L.Marker) {\n                    // Check if the marker's coordinates match the desired coordinates\n                    if (layer.getLatLng().equals(apartment.location)) {\n                        // Access the marker's HTML element\n                        console.log(\"marker found\");\n                        const markerElement = layer.getElement();\n                        markerElement.click();\n                        markerElement.click();\n                    }\n                }\n            });\n        }\n    };\n    const widenMap = ()=>{\n        const map = document.querySelector(\".leaflet-container\");\n        const widenButton = document.querySelector(\".open-me\");\n        const container = document.querySelector(\".footer-container\");\n        container.classList.toggle(\"show\");\n        widenButton.classList.toggle(\"active\");\n        map.classList.toggle(\"active\");\n        document.querySelector(\".flex-container\").classList.toggle(\"disabled\");\n        setTimeout(()=>{\n            mapRef.current.invalidateSize();\n        }, 500);\n        const mapList = document.querySelector(\".map-apartment-list\");\n        const apartmentCards = document.querySelectorAll(\".card-container\");\n        apartmentCards.forEach((apartmentCard)=>apartmentCard.classList.toggle(\"map\"));\n        mapList.classList.toggle(\"active\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_12__.MapContainer, {\n                ref: mapRef,\n                center: kruununhakaCoordinates,\n                zoom: 13,\n                scrollWheelZoom: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_13__.TileLayer, {\n                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LeafletSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        chunkedLoading: true,\n                        children: apartmentMarkers.map((marker, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_14__.Marker, {\n                                position: marker,\n                                icon: customIcon,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_15__.Popup, {\n                                    children: \"Marker\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"locate-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faLocationDot,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: goToUserLocation\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"open-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faCircleChevronDown,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: widenMap\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 100,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"map-apartment-list\",\n                children: _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        apartment: apartment,\n                        handleClick: goToApartmentLocation\n                    }, index, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 105,\n                        columnNumber: 20\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Map, \"cf7nFnvvGhzmLOHN8ahglPz7d0Q=\", false, function() {\n    return [\n        _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcC9NYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDb0Q7QUFDdkI7QUFDckI7QUFDeUI7QUFDekM7QUFDYTtBQUNlO0FBQ21CO0FBQ29CO0FBQ2hDO0FBQ3RCO0FBQ3dCO0FBQ0k7QUFHM0QsTUFBTWdCLGFBQWEsSUFBSVQseUNBQUlBLENBQUM7SUFDMUJVLFNBQVM7SUFDVEMsVUFBVTtRQUFDO1FBQUc7S0FBRztBQUNuQjtBQUVBLE1BQU1DLG1CQUFtQkwsaURBQWFBLENBQUNNLEdBQUcsQ0FBQ0MsQ0FBQUE7SUFDekMsT0FBT0EsVUFBVUMsUUFBUTtBQUMzQjtBQUVBLFNBQVNDOztJQUNQLE1BQU1DLHlCQUF5QjtRQUFDO1FBQVM7S0FBUTtJQUNqRCxNQUFNQyxlQUFlYiwrREFBa0JBO0lBQ3ZDLE1BQU1jLFNBQVNiLDZDQUFNQSxDQUFDO0lBRXRCLE1BQU1jLG1CQUFtQjtRQUN2QixJQUFHRixhQUFhRyxRQUFRLElBQUksQ0FBQ0gsYUFBYUksS0FBSyxFQUFDO1lBQzVDSCxPQUFPSSxPQUFPLENBQUNDLEtBQUssQ0FBQztnQkFBQ04sYUFBYUgsUUFBUSxDQUFDVSxHQUFHO2dCQUFFUCxhQUFhSCxRQUFRLENBQUNXLElBQUk7YUFBQyxFQUFFLElBQUk7Z0JBQUNDLFNBQVE7Z0JBQU1DLFVBQVU7WUFBQztRQUMvRztJQUNIO0lBRUEsTUFBTUMsd0JBQXdCLENBQUNmO1FBQzdCZ0IsUUFBUUMsR0FBRyxDQUFDakIsVUFBVUMsUUFBUTtRQUM5QixJQUFHSSxPQUFPSSxPQUFPLEVBQUM7WUFDaEJKLE9BQU9JLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDVixVQUFVQyxRQUFRLEVBQUUsSUFBSTtnQkFBQ1ksU0FBUTtnQkFBTUMsVUFBVTtZQUFDO1lBRXZFVCxPQUFPSSxPQUFPLENBQUNTLFNBQVMsQ0FBQyxTQUFVQyxLQUFLO2dCQUN0QyxpQ0FBaUM7Z0JBQ2pDLElBQUlBLGlCQUFpQkMsRUFBRXRDLE1BQU0sRUFBRTtvQkFDN0Isa0VBQWtFO29CQUNsRSxJQUFJcUMsTUFBTUUsU0FBUyxHQUFHQyxNQUFNLENBQUN0QixVQUFVQyxRQUFRLEdBQUc7d0JBQ2hELG1DQUFtQzt3QkFDbkNlLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWixNQUFNTSxnQkFBZ0JKLE1BQU1LLFVBQVU7d0JBQ3RDRCxjQUFjRSxLQUFLO3dCQUNuQkYsY0FBY0UsS0FBSztvQkFDckI7Z0JBQ0Y7WUFDRjtRQUVGO0lBR0Y7SUFFQSxNQUFNQyxXQUFXO1FBQ2YsTUFBTTNCLE1BQU00QixTQUFTQyxhQUFhLENBQUM7UUFDbkMsTUFBTUMsY0FBY0YsU0FBU0MsYUFBYSxDQUFDO1FBQzNDLE1BQU1FLFlBQVlILFNBQVNDLGFBQWEsQ0FBQztRQUN6Q0UsVUFBVUMsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDM0JILFlBQVlFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQzdCakMsSUFBSWdDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3JCTCxTQUFTQyxhQUFhLENBQUMsbUJBQW1CRyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUMzREMsV0FBVztZQUFPNUIsT0FBT0ksT0FBTyxDQUFDeUIsY0FBYztRQUFFLEdBQUc7UUFDcEQsTUFBTUMsVUFBVVIsU0FBU0MsYUFBYSxDQUFDO1FBQ3ZDLE1BQU1RLGlCQUFpQlQsU0FBU1UsZ0JBQWdCLENBQUM7UUFDakRELGVBQWVFLE9BQU8sQ0FBQ0MsQ0FBQUEsZ0JBQWlCQSxjQUFjUixTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUN2RUcsUUFBUUosU0FBUyxDQUFDQyxNQUFNLENBQUM7SUFDekI7SUFFRixxQkFDRTs7MEJBQ0UsOERBQUNwRCx3REFBWUE7Z0JBQUM0RCxLQUFLbkM7Z0JBQVFvQyxRQUFRdEM7Z0JBQXdCdUMsTUFBTTtnQkFBSUMsaUJBQWlCOztrQ0FDcEYsOERBQUM5RCxxREFBU0E7d0JBQ1IrRCxhQUFZO3dCQUNaQyxLQUFJOzs7Ozs7a0NBRU4sOERBQUMxRCxzREFBZ0JBOzs7OztrQ0FDakIsOERBQUNGLDhEQUFrQkE7d0JBQUM2RCxjQUFjO2tDQUMvQmhELGlCQUFpQkMsR0FBRyxDQUFDLENBQUNnRCxRQUFRQzs0QkFDN0IscUJBQ0UsOERBQUNsRSxrREFBTUE7Z0NBQWFtRSxVQUFVRjtnQ0FBUUcsTUFBTXZEOzBDQUMxQyw0RUFBQ1osaURBQUtBOzhDQUFDOzs7Ozs7K0JBRElpRTs7Ozs7d0JBTWpCOzs7Ozs7a0NBRUYsOERBQUNHO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDaEUsMkVBQWVBOzRCQUFDOEQsTUFBTTdELDZFQUFhQTs0QkFBRWdFLE1BQUs7NEJBQUtDLE9BQU87Z0NBQUVDLE9BQU87NEJBQU87NEJBQUdDLFNBQVNsRDs7Ozs7Ozs7Ozs7a0NBRXZGLDhEQUFDNkM7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNoRSwyRUFBZUE7NEJBQUM4RCxNQUFNNUQsbUZBQW1CQTs0QkFBRStELE1BQUs7NEJBQUtDLE9BQU87Z0NBQUVDLE9BQU87NEJBQU87NEJBQUdDLFNBQVM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzNGLDhEQUFDeUI7Z0JBQUlDLFdBQVU7MEJBQ1YzRCxpREFBYUEsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLFdBQVdnRDtvQkFDN0IscUJBQU8sOERBQUN0RCxxRUFBYUE7d0JBQWFNLFdBQVdBO3dCQUFXeUQsYUFBYTFDO3VCQUExQ2lDOzs7OztnQkFDN0I7Ozs7Ozs7O0FBS1Y7R0FwRlM5Qzs7UUFFY1gsMkRBQWtCQTs7O0tBRmhDVztBQXNGVCwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzP2IyODMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXBDb250YWluZXIsIFRpbGVMYXllciwgTWFya2VyLCBQb3B1cCwgdXNlTWFwIH0gZnJvbSAncmVhY3QtbGVhZmxldCdcbmltcG9ydCBNYXJrZXJDbHVzdGVyR3JvdXAgZnJvbSAncmVhY3QtbGVhZmxldC1jbHVzdGVyJztcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcbmltcG9ydCAnbm9kZV9tb2R1bGVzL2xlYWZsZXQtZ2Vvc2VhcmNoL2Rpc3QvZ2Vvc2VhcmNoLmNzcyc7XG5pbXBvcnQgJy4vbWFwLmNzcydcbmltcG9ydCB7IEljb24gfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCBMZWFmbGV0Z2VvU2VhcmNoIGZyb20gJy4vTGVhZmxldFNlYXJjaCdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUxvY2F0aW9uRG90LCBmYUNpcmNsZUNoZXZyb25Eb3dufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgdXNlVXNlckdlb0xvY2F0aW9uIGZyb20gJy4vdXNlVXNlckdlb0xvY2F0aW9uJ1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwYXJ0bWVudERhdGEgZnJvbSAnLi4vLi4vLi4vYXBhcnRtZW50RGF0YS5qc29uJ1xuaW1wb3J0IEFwYXJ0bWVudENhcmQgZnJvbSAnLi4vQXBhcnRtZW50Q2FyZC9BcGFydG1lbnRDYXJkJztcblxuXG5jb25zdCBjdXN0b21JY29uID0gbmV3IEljb24oe1xuICBpY29uVXJsOiBcImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzY4NC82ODQ5MDgucG5nXCIsXG4gIGljb25TaXplOiBbMzgsMzhdXG59KVxuXG5jb25zdCBhcGFydG1lbnRNYXJrZXJzID0gYXBhcnRtZW50RGF0YS5tYXAoYXBhcnRtZW50ID0+IHtcbiAgcmV0dXJuIGFwYXJ0bWVudC5sb2NhdGlvblxufSkgIFxuXG5mdW5jdGlvbiBNYXAoKSB7XG4gIGNvbnN0IGtydXVudW5oYWthQ29vcmRpbmF0ZXMgPSBbNjAuMTcyOSwgMjQuOTU5MV07XG4gIGNvbnN0IHVzZXJMb2NhdGlvbiA9IHVzZVVzZXJHZW9Mb2NhdGlvbigpXG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGNvbnN0IGdvVG9Vc2VyTG9jYXRpb24gPSAoKSA9PiB7XG4gICAgaWYodXNlckxvY2F0aW9uLmlzTG9hZGVkICYmICF1c2VyTG9jYXRpb24uZXJyb3Ipe1xuICAgICAgICBtYXBSZWYuY3VycmVudC5mbHlUbyhbdXNlckxvY2F0aW9uLmxvY2F0aW9uLmxhdCwgdXNlckxvY2F0aW9uLmxvY2F0aW9uLmxvbmddLCAxNSwge2FuaW1hdGU6dHJ1ZSwgZHVyYXRpb246IDF9KVxuICAgICB9XG4gIH1cblxuICBjb25zdCBnb1RvQXBhcnRtZW50TG9jYXRpb24gPSAoYXBhcnRtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coYXBhcnRtZW50LmxvY2F0aW9uKVxuICAgIGlmKG1hcFJlZi5jdXJyZW50KXtcbiAgICAgIG1hcFJlZi5jdXJyZW50LmZseVRvKGFwYXJ0bWVudC5sb2NhdGlvbiwgMTYsIHthbmltYXRlOnRydWUsIGR1cmF0aW9uOiAxfSlcblxuICAgICAgbWFwUmVmLmN1cnJlbnQuZWFjaExheWVyKGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgbGF5ZXIgaXMgYSBtYXJrZXJcbiAgICAgICAgaWYgKGxheWVyIGluc3RhbmNlb2YgTC5NYXJrZXIpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbWFya2VyJ3MgY29vcmRpbmF0ZXMgbWF0Y2ggdGhlIGRlc2lyZWQgY29vcmRpbmF0ZXNcbiAgICAgICAgICBpZiAobGF5ZXIuZ2V0TGF0TG5nKCkuZXF1YWxzKGFwYXJ0bWVudC5sb2NhdGlvbikpIHtcbiAgICAgICAgICAgIC8vIEFjY2VzcyB0aGUgbWFya2VyJ3MgSFRNTCBlbGVtZW50XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hcmtlciBmb3VuZFwiKVxuICAgICAgICAgICAgY29uc3QgbWFya2VyRWxlbWVudCA9IGxheWVyLmdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIG1hcmtlckVsZW1lbnQuY2xpY2soKVxuICAgICAgICAgICAgbWFya2VyRWxlbWVudC5jbGljaygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICAgICBcbiAgICB9XG5cblxuICB9XG5cbiAgY29uc3Qgd2lkZW5NYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlYWZsZXQtY29udGFpbmVyJylcbiAgICBjb25zdCB3aWRlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1lJylcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgd2lkZW5CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICBtYXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1jb250YWluZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZCcpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7bWFwUmVmLmN1cnJlbnQuaW52YWxpZGF0ZVNpemUoKX0sIDUwMClcbiAgICBjb25zdCBtYXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcC1hcGFydG1lbnQtbGlzdCcpXG4gICAgY29uc3QgYXBhcnRtZW50Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1jb250YWluZXInKVxuICAgIGFwYXJ0bWVudENhcmRzLmZvckVhY2goYXBhcnRtZW50Q2FyZCA9PiBhcGFydG1lbnRDYXJkLmNsYXNzTGlzdC50b2dnbGUoJ21hcCcpKVxuICAgIG1hcExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWFwQ29udGFpbmVyIHJlZj17bWFwUmVmfSBjZW50ZXI9e2tydXVudW5oYWthQ29vcmRpbmF0ZXN9IHpvb209ezEzfSBzY3JvbGxXaGVlbFpvb209e3RydWV9PlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPExlYWZsZXRnZW9TZWFyY2gvPlxuICAgICAgICA8TWFya2VyQ2x1c3Rlckdyb3VwIGNodW5rZWRMb2FkaW5nPlxuICAgICAgICAgIHthcGFydG1lbnRNYXJrZXJzLm1hcCgobWFya2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE1hcmtlciBrZXk9e2luZGV4fSBwb3NpdGlvbj17bWFya2VyfSBpY29uPXtjdXN0b21JY29ufT5cbiAgICAgICAgICAgICAgICA8UG9wdXA+XG4gICAgICAgICAgICAgICAgICBNYXJrZXJcbiAgICAgICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9NYXJrZXJDbHVzdGVyR3JvdXA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2NhdGUtbWUnPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvY2F0aW9uRG90fSBzaXplPVwiM3hcIiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19IG9uQ2xpY2s9e2dvVG9Vc2VyTG9jYXRpb259Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcGVuLW1lJz5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNpcmNsZUNoZXZyb25Eb3dufSBzaXplPVwiM3hcIiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19IG9uQ2xpY2s9e3dpZGVuTWFwfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwLWFwYXJ0bWVudC1saXN0Jz5cbiAgICAgICAgICB7YXBhcnRtZW50RGF0YS5tYXAoKGFwYXJ0bWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8QXBhcnRtZW50Q2FyZCBrZXk9e2luZGV4fSBhcGFydG1lbnQ9e2FwYXJ0bWVudH0gaGFuZGxlQ2xpY2s9e2dvVG9BcGFydG1lbnRMb2NhdGlvbn0vPlxuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICAgICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJ1c2VNYXAiLCJNYXJrZXJDbHVzdGVyR3JvdXAiLCJJY29uIiwiTGVhZmxldGdlb1NlYXJjaCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhTG9jYXRpb25Eb3QiLCJmYUNpcmNsZUNoZXZyb25Eb3duIiwidXNlVXNlckdlb0xvY2F0aW9uIiwidXNlUmVmIiwiYXBhcnRtZW50RGF0YSIsIkFwYXJ0bWVudENhcmQiLCJjdXN0b21JY29uIiwiaWNvblVybCIsImljb25TaXplIiwiYXBhcnRtZW50TWFya2VycyIsIm1hcCIsImFwYXJ0bWVudCIsImxvY2F0aW9uIiwiTWFwIiwia3J1dW51bmhha2FDb29yZGluYXRlcyIsInVzZXJMb2NhdGlvbiIsIm1hcFJlZiIsImdvVG9Vc2VyTG9jYXRpb24iLCJpc0xvYWRlZCIsImVycm9yIiwiY3VycmVudCIsImZseVRvIiwibGF0IiwibG9uZyIsImFuaW1hdGUiLCJkdXJhdGlvbiIsImdvVG9BcGFydG1lbnRMb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJlYWNoTGF5ZXIiLCJsYXllciIsIkwiLCJnZXRMYXRMbmciLCJlcXVhbHMiLCJtYXJrZXJFbGVtZW50IiwiZ2V0RWxlbWVudCIsImNsaWNrIiwid2lkZW5NYXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWRlbkJ1dHRvbiIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNldFRpbWVvdXQiLCJpbnZhbGlkYXRlU2l6ZSIsIm1hcExpc3QiLCJhcGFydG1lbnRDYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYXBhcnRtZW50Q2FyZCIsInJlZiIsImNlbnRlciIsInpvb20iLCJzY3JvbGxXaGVlbFpvb20iLCJhdHRyaWJ1dGlvbiIsInVybCIsImNodW5rZWRMb2FkaW5nIiwibWFya2VyIiwiaW5kZXgiLCJwb3NpdGlvbiIsImljb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzaXplIiwic3R5bGUiLCJjb2xvciIsIm9uQ2xpY2siLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Map/Map.js\n"));

/***/ })

});