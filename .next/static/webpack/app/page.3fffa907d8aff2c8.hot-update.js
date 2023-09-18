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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet-cluster */ \"(app-pages-browser)/./node_modules/react-leaflet-cluster/lib/index.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var node_modules_leaflet_geosearch_dist_geosearch_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/leaflet-geosearch/dist/geosearch.css */ \"(app-pages-browser)/./node_modules/leaflet-geosearch/dist/geosearch.css\");\n/* harmony import */ var _map_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.css */ \"(app-pages-browser)/./src/components/Map/map.css\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LeafletSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeafletSearch */ \"(app-pages-browser)/./src/components/Map/LeafletSearch.jsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useUserGeoLocation */ \"(app-pages-browser)/./src/components/Map/useUserGeoLocation.js\");\n/* harmony import */ var _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../apartmentData.json */ \"(app-pages-browser)/./apartmentData.json\");\n/* harmony import */ var _ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ApartmentCard/ApartmentCard */ \"(app-pages-browser)/./src/components/ApartmentCard/ApartmentCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst customIcon = new leaflet__WEBPACK_IMPORTED_MODULE_6__.Icon({\n    iconUrl: \"https://cdn-icons-png.flaticon.com/128/684/684908.png\",\n    iconSize: [\n        38,\n        38\n    ]\n});\nconst apartmentMarkers = _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment)=>{\n    return apartment.location;\n});\nfunction Map() {\n    _s();\n    const kruununhakaCoordinates = [\n        60.1729,\n        24.9591\n    ];\n    const userLocation = (0,_useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const goToUserLocation = ()=>{\n        if (userLocation.isLoaded && !userLocation.error) {\n            mapRef.current.flyTo([\n                userLocation.location.lat,\n                userLocation.location.long\n            ], 15, {\n                animate: true,\n                duration: 1\n            });\n        }\n    };\n    const goToApartmentLocation = (apartment)=>{\n        console.log(apartment.location);\n        if (mapRef.current) {\n            mapRef.current.flyTo(apartment.location, 16, {\n                animate: true,\n                duration: 1\n            });\n            mapRef.current.eachLayer(function(layer) {\n                // Check if the layer is a marker\n                if (layer instanceof L.Marker) {\n                    // Check if the marker's coordinates match the desired coordinates\n                    if (layer.getLatLng().equals(apartment.location)) {\n                        // Access the marker's HTML element\n                        console.log(\"marker found\");\n                        const markerElement = layer.getElement();\n                        const marker = markerElement.addTo(mapRef.current); // Replace with marker coordinates\n                        // Open the Popup and set the map view to include the marker\n                        marker.openPopup();\n                        mapRef.current.setView([\n                            latitude,\n                            longitude\n                        ], 13);\n                    }\n                }\n            });\n        }\n    };\n    const widenMap = ()=>{\n        const map = document.querySelector(\".leaflet-container\");\n        const widenButton = document.querySelector(\".open-me\");\n        const container = document.querySelector(\".footer-container\");\n        container.classList.toggle(\"show\");\n        widenButton.classList.toggle(\"active\");\n        map.classList.toggle(\"active\");\n        document.querySelector(\".flex-container\").classList.toggle(\"disabled\");\n        setTimeout(()=>{\n            mapRef.current.invalidateSize();\n        }, 500);\n        const mapList = document.querySelector(\".map-apartment-list\");\n        const apartmentCards = document.querySelectorAll(\".card-container\");\n        apartmentCards.forEach((apartmentCard)=>apartmentCard.classList.toggle(\"map\"));\n        mapList.classList.toggle(\"active\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_12__.MapContainer, {\n                ref: mapRef,\n                center: kruununhakaCoordinates,\n                zoom: 13,\n                scrollWheelZoom: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_13__.TileLayer, {\n                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LeafletSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        chunkedLoading: true,\n                        children: apartmentMarkers.map((marker, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_14__.Marker, {\n                                position: marker,\n                                icon: customIcon,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_15__.Popup, {\n                                    children: \"Marker\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"locate-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faLocationDot,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: goToUserLocation\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"open-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faCircleChevronDown,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: widenMap\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 104,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"map-apartment-list\",\n                children: _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        apartment: apartment,\n                        handleClick: goToApartmentLocation\n                    }, index, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 109,\n                        columnNumber: 20\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Map, \"cf7nFnvvGhzmLOHN8ahglPz7d0Q=\", false, function() {\n    return [\n        _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcC9NYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDb0Q7QUFDdkI7QUFDckI7QUFDeUI7QUFDekM7QUFDYTtBQUNlO0FBQ21CO0FBQ29CO0FBQ2hDO0FBQ3RCO0FBQ3dCO0FBQ0k7QUFHM0QsTUFBTWdCLGFBQWEsSUFBSVQseUNBQUlBLENBQUM7SUFDMUJVLFNBQVM7SUFDVEMsVUFBVTtRQUFDO1FBQUc7S0FBRztBQUNuQjtBQUVBLE1BQU1DLG1CQUFtQkwsaURBQWFBLENBQUNNLEdBQUcsQ0FBQ0MsQ0FBQUE7SUFDekMsT0FBT0EsVUFBVUMsUUFBUTtBQUMzQjtBQUVBLFNBQVNDOztJQUNQLE1BQU1DLHlCQUF5QjtRQUFDO1FBQVM7S0FBUTtJQUNqRCxNQUFNQyxlQUFlYiwrREFBa0JBO0lBQ3ZDLE1BQU1jLFNBQVNiLDZDQUFNQSxDQUFDO0lBRXRCLE1BQU1jLG1CQUFtQjtRQUN2QixJQUFHRixhQUFhRyxRQUFRLElBQUksQ0FBQ0gsYUFBYUksS0FBSyxFQUFDO1lBQzVDSCxPQUFPSSxPQUFPLENBQUNDLEtBQUssQ0FBQztnQkFBQ04sYUFBYUgsUUFBUSxDQUFDVSxHQUFHO2dCQUFFUCxhQUFhSCxRQUFRLENBQUNXLElBQUk7YUFBQyxFQUFFLElBQUk7Z0JBQUNDLFNBQVE7Z0JBQU1DLFVBQVU7WUFBQztRQUMvRztJQUNIO0lBRUEsTUFBTUMsd0JBQXdCLENBQUNmO1FBQzdCZ0IsUUFBUUMsR0FBRyxDQUFDakIsVUFBVUMsUUFBUTtRQUM5QixJQUFHSSxPQUFPSSxPQUFPLEVBQUM7WUFDaEJKLE9BQU9JLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDVixVQUFVQyxRQUFRLEVBQUUsSUFBSTtnQkFBQ1ksU0FBUTtnQkFBTUMsVUFBVTtZQUFDO1lBRXZFVCxPQUFPSSxPQUFPLENBQUNTLFNBQVMsQ0FBQyxTQUFVQyxLQUFLO2dCQUN0QyxpQ0FBaUM7Z0JBQ2pDLElBQUlBLGlCQUFpQkMsRUFBRXRDLE1BQU0sRUFBRTtvQkFDN0Isa0VBQWtFO29CQUNsRSxJQUFJcUMsTUFBTUUsU0FBUyxHQUFHQyxNQUFNLENBQUN0QixVQUFVQyxRQUFRLEdBQUc7d0JBQ2hELG1DQUFtQzt3QkFDbkNlLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWixNQUFNTSxnQkFBZ0JKLE1BQU1LLFVBQVU7d0JBQ3RDLE1BQU1DLFNBQVNGLGNBQWNHLEtBQUssQ0FBQ3JCLE9BQU9JLE9BQU8sR0FBRyxrQ0FBa0M7d0JBRXBGLDREQUE0RDt3QkFDNURnQixPQUFPRSxTQUFTO3dCQUNoQnRCLE9BQU9JLE9BQU8sQ0FBQ21CLE9BQU8sQ0FBQzs0QkFBQ0M7NEJBQVVDO3lCQUFVLEVBQUU7b0JBRWxEO2dCQUNGO1lBQ0Y7UUFFRjtJQUdGO0lBRUEsTUFBTUMsV0FBVztRQUNmLE1BQU1oQyxNQUFNaUMsU0FBU0MsYUFBYSxDQUFDO1FBQ25DLE1BQU1DLGNBQWNGLFNBQVNDLGFBQWEsQ0FBQztRQUMzQyxNQUFNRSxZQUFZSCxTQUFTQyxhQUFhLENBQUM7UUFDekNFLFVBQVVDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQzNCSCxZQUFZRSxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUM3QnRDLElBQUlxQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUNyQkwsU0FBU0MsYUFBYSxDQUFDLG1CQUFtQkcsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDM0RDLFdBQVc7WUFBT2pDLE9BQU9JLE9BQU8sQ0FBQzhCLGNBQWM7UUFBRSxHQUFHO1FBQ3BELE1BQU1DLFVBQVVSLFNBQVNDLGFBQWEsQ0FBQztRQUN2QyxNQUFNUSxpQkFBaUJULFNBQVNVLGdCQUFnQixDQUFDO1FBQ2pERCxlQUFlRSxPQUFPLENBQUNDLENBQUFBLGdCQUFpQkEsY0FBY1IsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDdkVHLFFBQVFKLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO0lBQ3pCO0lBRUYscUJBQ0U7OzBCQUNFLDhEQUFDekQsd0RBQVlBO2dCQUFDaUUsS0FBS3hDO2dCQUFReUMsUUFBUTNDO2dCQUF3QjRDLE1BQU07Z0JBQUlDLGlCQUFpQjs7a0NBQ3BGLDhEQUFDbkUscURBQVNBO3dCQUNSb0UsYUFBWTt3QkFDWkMsS0FBSTs7Ozs7O2tDQUVOLDhEQUFDL0Qsc0RBQWdCQTs7Ozs7a0NBQ2pCLDhEQUFDRiw4REFBa0JBO3dCQUFDa0UsY0FBYztrQ0FDL0JyRCxpQkFBaUJDLEdBQUcsQ0FBQyxDQUFDMEIsUUFBUTJCOzRCQUM3QixxQkFDRSw4REFBQ3RFLGtEQUFNQTtnQ0FBYXVFLFVBQVU1QjtnQ0FBUTZCLE1BQU0zRDswQ0FDMUMsNEVBQUNaLGlEQUFLQTs4Q0FBQzs7Ozs7OytCQURJcUU7Ozs7O3dCQU1qQjs7Ozs7O2tDQUVGLDhEQUFDRzt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ3BFLDJFQUFlQTs0QkFBQ2tFLE1BQU1qRSw2RUFBYUE7NEJBQUVvRSxNQUFLOzRCQUFLQyxPQUFPO2dDQUFFQyxPQUFPOzRCQUFPOzRCQUFHQyxTQUFTdEQ7Ozs7Ozs7Ozs7O2tDQUV2Riw4REFBQ2lEO3dCQUFJQyxXQUFVO2tDQUNmLDRFQUFDcEUsMkVBQWVBOzRCQUFDa0UsTUFBTWhFLG1GQUFtQkE7NEJBQUVtRSxNQUFLOzRCQUFLQyxPQUFPO2dDQUFFQyxPQUFPOzRCQUFPOzRCQUFHQyxTQUFTN0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUczRiw4REFBQ3dCO2dCQUFJQyxXQUFVOzBCQUNWL0QsaURBQWFBLENBQUNNLEdBQUcsQ0FBQyxDQUFDQyxXQUFXb0Q7b0JBQzdCLHFCQUFPLDhEQUFDMUQscUVBQWFBO3dCQUFhTSxXQUFXQTt3QkFBVzZELGFBQWE5Qzt1QkFBMUNxQzs7Ozs7Z0JBQzdCOzs7Ozs7OztBQUtWO0dBeEZTbEQ7O1FBRWNYLDJEQUFrQkE7OztLQUZoQ1c7QUEwRlQsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFwL01hcC5qcz9iMjgzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIE1hcmtlciwgUG9wdXAsIHVzZU1hcCB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnXG5pbXBvcnQgTWFya2VyQ2x1c3Rlckdyb3VwIGZyb20gJ3JlYWN0LWxlYWZsZXQtY2x1c3Rlcic7XG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XG5pbXBvcnQgJ25vZGVfbW9kdWxlcy9sZWFmbGV0LWdlb3NlYXJjaC9kaXN0L2dlb3NlYXJjaC5jc3MnO1xuaW1wb3J0ICcuL21hcC5jc3MnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgTGVhZmxldGdlb1NlYXJjaCBmcm9tICcuL0xlYWZsZXRTZWFyY2gnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFMb2NhdGlvbkRvdCwgZmFDaXJjbGVDaGV2cm9uRG93bn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuaW1wb3J0IHVzZVVzZXJHZW9Mb2NhdGlvbiBmcm9tICcuL3VzZVVzZXJHZW9Mb2NhdGlvbidcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcGFydG1lbnREYXRhIGZyb20gJy4uLy4uLy4uL2FwYXJ0bWVudERhdGEuanNvbidcbmltcG9ydCBBcGFydG1lbnRDYXJkIGZyb20gJy4uL0FwYXJ0bWVudENhcmQvQXBhcnRtZW50Q2FyZCc7XG5cblxuY29uc3QgY3VzdG9tSWNvbiA9IG5ldyBJY29uKHtcbiAgaWNvblVybDogXCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC82ODQvNjg0OTA4LnBuZ1wiLFxuICBpY29uU2l6ZTogWzM4LDM4XVxufSlcblxuY29uc3QgYXBhcnRtZW50TWFya2VycyA9IGFwYXJ0bWVudERhdGEubWFwKGFwYXJ0bWVudCA9PiB7XG4gIHJldHVybiBhcGFydG1lbnQubG9jYXRpb25cbn0pICBcblxuZnVuY3Rpb24gTWFwKCkge1xuICBjb25zdCBrcnV1bnVuaGFrYUNvb3JkaW5hdGVzID0gWzYwLjE3MjksIDI0Ljk1OTFdO1xuICBjb25zdCB1c2VyTG9jYXRpb24gPSB1c2VVc2VyR2VvTG9jYXRpb24oKVxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWYobnVsbClcblxuICBjb25zdCBnb1RvVXNlckxvY2F0aW9uID0gKCkgPT4ge1xuICAgIGlmKHVzZXJMb2NhdGlvbi5pc0xvYWRlZCAmJiAhdXNlckxvY2F0aW9uLmVycm9yKXtcbiAgICAgICAgbWFwUmVmLmN1cnJlbnQuZmx5VG8oW3VzZXJMb2NhdGlvbi5sb2NhdGlvbi5sYXQsIHVzZXJMb2NhdGlvbi5sb2NhdGlvbi5sb25nXSwgMTUsIHthbmltYXRlOnRydWUsIGR1cmF0aW9uOiAxfSlcbiAgICAgfVxuICB9XG5cbiAgY29uc3QgZ29Ub0FwYXJ0bWVudExvY2F0aW9uID0gKGFwYXJ0bWVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFwYXJ0bWVudC5sb2NhdGlvbilcbiAgICBpZihtYXBSZWYuY3VycmVudCl7XG4gICAgICBtYXBSZWYuY3VycmVudC5mbHlUbyhhcGFydG1lbnQubG9jYXRpb24sIDE2LCB7YW5pbWF0ZTp0cnVlLCBkdXJhdGlvbjogMX0pXG5cbiAgICAgIG1hcFJlZi5jdXJyZW50LmVhY2hMYXllcihmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxheWVyIGlzIGEgbWFya2VyXG4gICAgICAgIGlmIChsYXllciBpbnN0YW5jZW9mIEwuTWFya2VyKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG1hcmtlcidzIGNvb3JkaW5hdGVzIG1hdGNoIHRoZSBkZXNpcmVkIGNvb3JkaW5hdGVzXG4gICAgICAgICAgaWYgKGxheWVyLmdldExhdExuZygpLmVxdWFscyhhcGFydG1lbnQubG9jYXRpb24pKSB7XG4gICAgICAgICAgICAvLyBBY2Nlc3MgdGhlIG1hcmtlcidzIEhUTUwgZWxlbWVudFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtYXJrZXIgZm91bmRcIilcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlckVsZW1lbnQgPSBsYXllci5nZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBtYXJrZXJFbGVtZW50LmFkZFRvKG1hcFJlZi5jdXJyZW50KTsgLy8gUmVwbGFjZSB3aXRoIG1hcmtlciBjb29yZGluYXRlc1xuXG4gICAgICAgICAgICAgIC8vIE9wZW4gdGhlIFBvcHVwIGFuZCBzZXQgdGhlIG1hcCB2aWV3IHRvIGluY2x1ZGUgdGhlIG1hcmtlclxuICAgICAgICAgICAgICBtYXJrZXIub3BlblBvcHVwKCk7XG4gICAgICAgICAgICAgIG1hcFJlZi5jdXJyZW50LnNldFZpZXcoW2xhdGl0dWRlLCBsb25naXR1ZGVdLCAxMyk7XG4gIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgfVxuXG5cbiAgfVxuXG4gIGNvbnN0IHdpZGVuTWFwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWFmbGV0LWNvbnRhaW5lcicpXG4gICAgY29uc3Qgd2lkZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1tZScpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci1jb250YWluZXInKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIHdpZGVuQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgbWFwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZXgtY29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzYWJsZWQnKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge21hcFJlZi5jdXJyZW50LmludmFsaWRhdGVTaXplKCl9LCA1MDApXG4gICAgY29uc3QgbWFwTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAtYXBhcnRtZW50LWxpc3QnKVxuICAgIGNvbnN0IGFwYXJ0bWVudENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtY29udGFpbmVyJylcbiAgICBhcGFydG1lbnRDYXJkcy5mb3JFYWNoKGFwYXJ0bWVudENhcmQgPT4gYXBhcnRtZW50Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdtYXAnKSlcbiAgICBtYXBMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1hcENvbnRhaW5lciByZWY9e21hcFJlZn0gY2VudGVyPXtrcnV1bnVuaGFrYUNvb3JkaW5hdGVzfSB6b29tPXsxM30gc2Nyb2xsV2hlZWxab29tPXt0cnVlfT5cbiAgICAgICAgPFRpbGVMYXllclxuICAgICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgICB1cmw9XCJodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxMZWFmbGV0Z2VvU2VhcmNoLz5cbiAgICAgICAgPE1hcmtlckNsdXN0ZXJHcm91cCBjaHVua2VkTG9hZGluZz5cbiAgICAgICAgICB7YXBhcnRtZW50TWFya2Vycy5tYXAoKG1hcmtlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxNYXJrZXIga2V5PXtpbmRleH0gcG9zaXRpb249e21hcmtlcn0gaWNvbj17Y3VzdG9tSWNvbn0+XG4gICAgICAgICAgICAgICAgPFBvcHVwPlxuICAgICAgICAgICAgICAgICAgTWFya2VyXG4gICAgICAgICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvTWFya2VyQ2x1c3Rlckdyb3VwPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9jYXRlLW1lJz5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMb2NhdGlvbkRvdH0gc2l6ZT1cIjN4XCIgc3R5bGU9e3sgY29sb3I6ICdibHVlJyB9fSBvbkNsaWNrPXtnb1RvVXNlckxvY2F0aW9ufS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3Blbi1tZSc+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaXJjbGVDaGV2cm9uRG93bn0gc2l6ZT1cIjN4XCIgc3R5bGU9e3sgY29sb3I6ICdibHVlJyB9fSBvbkNsaWNrPXt3aWRlbk1hcH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWFwQ29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21hcC1hcGFydG1lbnQtbGlzdCc+XG4gICAgICAgICAge2FwYXJ0bWVudERhdGEubWFwKChhcGFydG1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEFwYXJ0bWVudENhcmQga2V5PXtpbmRleH0gYXBhcnRtZW50PXthcGFydG1lbnR9IGhhbmRsZUNsaWNrPXtnb1RvQXBhcnRtZW50TG9jYXRpb259Lz5cbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICAgICAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIk1hcmtlciIsIlBvcHVwIiwidXNlTWFwIiwiTWFya2VyQ2x1c3Rlckdyb3VwIiwiSWNvbiIsIkxlYWZsZXRnZW9TZWFyY2giLCJGb250QXdlc29tZUljb24iLCJmYUxvY2F0aW9uRG90IiwiZmFDaXJjbGVDaGV2cm9uRG93biIsInVzZVVzZXJHZW9Mb2NhdGlvbiIsInVzZVJlZiIsImFwYXJ0bWVudERhdGEiLCJBcGFydG1lbnRDYXJkIiwiY3VzdG9tSWNvbiIsImljb25VcmwiLCJpY29uU2l6ZSIsImFwYXJ0bWVudE1hcmtlcnMiLCJtYXAiLCJhcGFydG1lbnQiLCJsb2NhdGlvbiIsIk1hcCIsImtydXVudW5oYWthQ29vcmRpbmF0ZXMiLCJ1c2VyTG9jYXRpb24iLCJtYXBSZWYiLCJnb1RvVXNlckxvY2F0aW9uIiwiaXNMb2FkZWQiLCJlcnJvciIsImN1cnJlbnQiLCJmbHlUbyIsImxhdCIsImxvbmciLCJhbmltYXRlIiwiZHVyYXRpb24iLCJnb1RvQXBhcnRtZW50TG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwiZWFjaExheWVyIiwibGF5ZXIiLCJMIiwiZ2V0TGF0TG5nIiwiZXF1YWxzIiwibWFya2VyRWxlbWVudCIsImdldEVsZW1lbnQiLCJtYXJrZXIiLCJhZGRUbyIsIm9wZW5Qb3B1cCIsInNldFZpZXciLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIndpZGVuTWFwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2lkZW5CdXR0b24iLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzZXRUaW1lb3V0IiwiaW52YWxpZGF0ZVNpemUiLCJtYXBMaXN0IiwiYXBhcnRtZW50Q2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFwYXJ0bWVudENhcmQiLCJyZWYiLCJjZW50ZXIiLCJ6b29tIiwic2Nyb2xsV2hlZWxab29tIiwiYXR0cmlidXRpb24iLCJ1cmwiLCJjaHVua2VkTG9hZGluZyIsImluZGV4IiwicG9zaXRpb24iLCJpY29uIiwiZGl2IiwiY2xhc3NOYW1lIiwic2l6ZSIsInN0eWxlIiwiY29sb3IiLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Map/Map.js\n"));

/***/ })

});