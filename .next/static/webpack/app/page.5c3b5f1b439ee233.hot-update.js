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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/MapContainer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/TileLayer.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Marker.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-leaflet */ \"(app-pages-browser)/./node_modules/react-leaflet/lib/Popup.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet-cluster */ \"(app-pages-browser)/./node_modules/react-leaflet-cluster/lib/index.js\");\n/* harmony import */ var react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var node_modules_leaflet_geosearch_dist_geosearch_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/leaflet-geosearch/dist/geosearch.css */ \"(app-pages-browser)/./node_modules/leaflet-geosearch/dist/geosearch.css\");\n/* harmony import */ var _map_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.css */ \"(app-pages-browser)/./src/components/Map/map.css\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ \"(app-pages-browser)/./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LeafletSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeafletSearch */ \"(app-pages-browser)/./src/components/Map/LeafletSearch.jsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useUserGeoLocation */ \"(app-pages-browser)/./src/components/Map/useUserGeoLocation.js\");\n/* harmony import */ var _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../apartmentData.json */ \"(app-pages-browser)/./apartmentData.json\");\n/* harmony import */ var _ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ApartmentCard/ApartmentCard */ \"(app-pages-browser)/./src/components/ApartmentCard/ApartmentCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst customIcon = new leaflet__WEBPACK_IMPORTED_MODULE_6__.Icon({\n    iconUrl: \"https://cdn-icons-png.flaticon.com/128/684/684908.png\",\n    iconSize: [\n        38,\n        38\n    ]\n});\nconst apartmentMarkers = _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment)=>{\n    return apartment.location;\n});\nfunction Map() {\n    _s();\n    const [popupOpen, setPopupOpen] = useState(false);\n    const kruununhakaCoordinates = [\n        60.1729,\n        24.9591\n    ];\n    const userLocation = (0,_useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const goToUserLocation = ()=>{\n        if (userLocation.isLoaded && !userLocation.error) {\n            mapRef.current.flyTo([\n                userLocation.location.lat,\n                userLocation.location.long\n            ], 15, {\n                animate: true,\n                duration: 1\n            });\n        }\n    };\n    const goToApartmentLocation = (apartment)=>{\n        console.log(apartment.location);\n        if (mapRef.current) {\n            mapRef.current.flyTo(apartment.location, 16, {\n                animate: true,\n                duration: 1\n            });\n            mapRef.current.eachLayer(function(layer) {\n                // Check if the layer is a marker\n                if (layer instanceof L.Marker) {\n                    // Check if the marker's coordinates match the desired coordinates\n                    if (layer.getLatLng().equals(apartment.location)) {\n                        // Access the marker's HTML element\n                        console.log(\"marker found\");\n                        const markerElement = layer.getElement();\n                        markerElement.click();\n                    }\n                }\n            });\n        }\n    };\n    const widenMap = ()=>{\n        const map = document.querySelector(\".leaflet-container\");\n        const widenButton = document.querySelector(\".open-me\");\n        const container = document.querySelector(\".footer-container\");\n        container.classList.toggle(\"show\");\n        widenButton.classList.toggle(\"active\");\n        map.classList.toggle(\"active\");\n        document.querySelector(\".flex-container\").classList.toggle(\"disabled\");\n        setTimeout(()=>{\n            mapRef.current.invalidateSize();\n        }, 500);\n        const mapList = document.querySelector(\".map-apartment-list\");\n        const apartmentCards = document.querySelectorAll(\".card-container\");\n        apartmentCards.forEach((apartmentCard)=>apartmentCard.classList.toggle(\"map\"));\n        mapList.classList.toggle(\"active\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_12__.MapContainer, {\n                ref: mapRef,\n                center: kruununhakaCoordinates,\n                zoom: 13,\n                scrollWheelZoom: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_13__.TileLayer, {\n                        attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                        url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LeafletSearch__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_leaflet_cluster__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        chunkedLoading: true,\n                        children: apartmentMarkers.map((marker, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_14__.Marker, {\n                                position: marker,\n                                icon: customIcon,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_15__.Popup, {\n                                    children: \"Marker\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"locate-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faLocationDot,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: goToUserLocation\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"open-me\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faCircleChevronDown,\n                            size: \"3x\",\n                            style: {\n                                color: \"blue\"\n                            },\n                            onClick: widenMap\n                        }, void 0, false, {\n                            fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                            lineNumber: 100,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"map-apartment-list\",\n                children: _apartmentData_json__WEBPACK_IMPORTED_MODULE_10__.map((apartment, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ApartmentCard_ApartmentCard__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        apartment: apartment,\n                        handleClick: goToApartmentLocation\n                    }, index, false, {\n                        fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                        lineNumber: 105,\n                        columnNumber: 20\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/juan/Documents/Design of WWW Services/rent-app/src/components/Map/Map.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Map, \"gZPt0ry/Lw0E7qVfkmsVYRJoHdE=\", false, function() {\n    return [\n        _useUserGeoLocation__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01hcC9NYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDb0Q7QUFDdkI7QUFDckI7QUFDeUI7QUFDekM7QUFDYTtBQUNlO0FBQ21CO0FBQ29CO0FBQ2hDO0FBQ3RCO0FBQ3dCO0FBQ0k7QUFHM0QsTUFBTWdCLGFBQWEsSUFBSVQseUNBQUlBLENBQUM7SUFDMUJVLFNBQVM7SUFDVEMsVUFBVTtRQUFDO1FBQUc7S0FBRztBQUNuQjtBQUVBLE1BQU1DLG1CQUFtQkwsaURBQWFBLENBQUNNLEdBQUcsQ0FBQ0MsQ0FBQUE7SUFDekMsT0FBT0EsVUFBVUMsUUFBUTtBQUMzQjtBQUVBLFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHQyxTQUFTO0lBQzNDLE1BQU1DLHlCQUF5QjtRQUFDO1FBQVM7S0FBUTtJQUNqRCxNQUFNQyxlQUFlaEIsK0RBQWtCQTtJQUN2QyxNQUFNaUIsU0FBU2hCLDZDQUFNQSxDQUFDO0lBRXRCLE1BQU1pQixtQkFBbUI7UUFDdkIsSUFBR0YsYUFBYUcsUUFBUSxJQUFJLENBQUNILGFBQWFJLEtBQUssRUFBQztZQUM1Q0gsT0FBT0ksT0FBTyxDQUFDQyxLQUFLLENBQUM7Z0JBQUNOLGFBQWFOLFFBQVEsQ0FBQ2EsR0FBRztnQkFBRVAsYUFBYU4sUUFBUSxDQUFDYyxJQUFJO2FBQUMsRUFBRSxJQUFJO2dCQUFDQyxTQUFRO2dCQUFNQyxVQUFVO1lBQUM7UUFDL0c7SUFDSDtJQUVBLE1BQU1DLHdCQUF3QixDQUFDbEI7UUFDN0JtQixRQUFRQyxHQUFHLENBQUNwQixVQUFVQyxRQUFRO1FBQzlCLElBQUdPLE9BQU9JLE9BQU8sRUFBQztZQUNoQkosT0FBT0ksT0FBTyxDQUFDQyxLQUFLLENBQUNiLFVBQVVDLFFBQVEsRUFBRSxJQUFJO2dCQUFDZSxTQUFRO2dCQUFNQyxVQUFVO1lBQUM7WUFFdkVULE9BQU9JLE9BQU8sQ0FBQ1MsU0FBUyxDQUFDLFNBQVVDLEtBQUs7Z0JBQ3RDLGlDQUFpQztnQkFDakMsSUFBSUEsaUJBQWlCQyxFQUFFekMsTUFBTSxFQUFFO29CQUM3QixrRUFBa0U7b0JBQ2xFLElBQUl3QyxNQUFNRSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ3pCLFVBQVVDLFFBQVEsR0FBRzt3QkFDaEQsbUNBQW1DO3dCQUNuQ2tCLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWixNQUFNTSxnQkFBZ0JKLE1BQU1LLFVBQVU7d0JBQ3RDRCxjQUFjRSxLQUFLO29CQUNyQjtnQkFDRjtZQUNGO1FBRUY7SUFHRjtJQUVBLE1BQU1DLFdBQVc7UUFDZixNQUFNOUIsTUFBTStCLFNBQVNDLGFBQWEsQ0FBQztRQUNuQyxNQUFNQyxjQUFjRixTQUFTQyxhQUFhLENBQUM7UUFDM0MsTUFBTUUsWUFBWUgsU0FBU0MsYUFBYSxDQUFDO1FBQ3pDRSxVQUFVQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUMzQkgsWUFBWUUsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDN0JwQyxJQUFJbUMsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDckJMLFNBQVNDLGFBQWEsQ0FBQyxtQkFBbUJHLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQzNEQyxXQUFXO1lBQU81QixPQUFPSSxPQUFPLENBQUN5QixjQUFjO1FBQUUsR0FBRztRQUNwRCxNQUFNQyxVQUFVUixTQUFTQyxhQUFhLENBQUM7UUFDdkMsTUFBTVEsaUJBQWlCVCxTQUFTVSxnQkFBZ0IsQ0FBQztRQUNqREQsZUFBZUUsT0FBTyxDQUFDQyxDQUFBQSxnQkFBaUJBLGNBQWNSLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3ZFRyxRQUFRSixTQUFTLENBQUNDLE1BQU0sQ0FBQztJQUN6QjtJQUVGLHFCQUNFOzswQkFDRSw4REFBQ3ZELHdEQUFZQTtnQkFBQytELEtBQUtuQztnQkFBUW9DLFFBQVF0QztnQkFBd0J1QyxNQUFNO2dCQUFJQyxpQkFBaUI7O2tDQUNwRiw4REFBQ2pFLHFEQUFTQTt3QkFDUmtFLGFBQVk7d0JBQ1pDLEtBQUk7Ozs7OztrQ0FFTiw4REFBQzdELHNEQUFnQkE7Ozs7O2tDQUNqQiw4REFBQ0YsOERBQWtCQTt3QkFBQ2dFLGNBQWM7a0NBQy9CbkQsaUJBQWlCQyxHQUFHLENBQUMsQ0FBQ21ELFFBQVFDOzRCQUM3QixxQkFDRSw4REFBQ3JFLGtEQUFNQTtnQ0FBYXNFLFVBQVVGO2dDQUFRRyxNQUFNMUQ7MENBQzFDLDRFQUFDWixpREFBS0E7OENBQUM7Ozs7OzsrQkFESW9FOzs7Ozt3QkFNakI7Ozs7OztrQ0FFRiw4REFBQ0c7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNuRSwyRUFBZUE7NEJBQUNpRSxNQUFNaEUsNkVBQWFBOzRCQUFFbUUsTUFBSzs0QkFBS0MsT0FBTztnQ0FBRUMsT0FBTzs0QkFBTzs0QkFBR0MsU0FBU2xEOzs7Ozs7Ozs7OztrQ0FFdkYsOERBQUM2Qzt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ25FLDJFQUFlQTs0QkFBQ2lFLE1BQU0vRCxtRkFBbUJBOzRCQUFFa0UsTUFBSzs0QkFBS0MsT0FBTztnQ0FBRUMsT0FBTzs0QkFBTzs0QkFBR0MsU0FBUzlCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHM0YsOERBQUN5QjtnQkFBSUMsV0FBVTswQkFDVjlELGlEQUFhQSxDQUFDTSxHQUFHLENBQUMsQ0FBQ0MsV0FBV21EO29CQUM3QixxQkFBTyw4REFBQ3pELHFFQUFhQTt3QkFBYU0sV0FBV0E7d0JBQVc0RCxhQUFhMUM7dUJBQTFDaUM7Ozs7O2dCQUM3Qjs7Ozs7Ozs7QUFLVjtHQXBGU2pEOztRQUdjWCwyREFBa0JBOzs7S0FIaENXO0FBc0ZULCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01hcC9NYXAuanM/YjI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcENvbnRhaW5lciwgVGlsZUxheWVyLCBNYXJrZXIsIFBvcHVwLCB1c2VNYXAgfSBmcm9tICdyZWFjdC1sZWFmbGV0J1xuaW1wb3J0IE1hcmtlckNsdXN0ZXJHcm91cCBmcm9tICdyZWFjdC1sZWFmbGV0LWNsdXN0ZXInO1xuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xuaW1wb3J0ICdub2RlX21vZHVsZXMvbGVhZmxldC1nZW9zZWFyY2gvZGlzdC9nZW9zZWFyY2guY3NzJztcbmltcG9ydCAnLi9tYXAuY3NzJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IExlYWZsZXRnZW9TZWFyY2ggZnJvbSAnLi9MZWFmbGV0U2VhcmNoJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhTG9jYXRpb25Eb3QsIGZhQ2lyY2xlQ2hldnJvbkRvd259IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB1c2VVc2VyR2VvTG9jYXRpb24gZnJvbSAnLi91c2VVc2VyR2VvTG9jYXRpb24nXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXBhcnRtZW50RGF0YSBmcm9tICcuLi8uLi8uLi9hcGFydG1lbnREYXRhLmpzb24nXG5pbXBvcnQgQXBhcnRtZW50Q2FyZCBmcm9tICcuLi9BcGFydG1lbnRDYXJkL0FwYXJ0bWVudENhcmQnO1xuXG5cbmNvbnN0IGN1c3RvbUljb24gPSBuZXcgSWNvbih7XG4gIGljb25Vcmw6IFwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNjg0LzY4NDkwOC5wbmdcIixcbiAgaWNvblNpemU6IFszOCwzOF1cbn0pXG5cbmNvbnN0IGFwYXJ0bWVudE1hcmtlcnMgPSBhcGFydG1lbnREYXRhLm1hcChhcGFydG1lbnQgPT4ge1xuICByZXR1cm4gYXBhcnRtZW50LmxvY2F0aW9uXG59KSAgXG5cbmZ1bmN0aW9uIE1hcCgpIHtcbiAgY29uc3QgW3BvcHVwT3Blbiwgc2V0UG9wdXBPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qga3J1dW51bmhha2FDb29yZGluYXRlcyA9IFs2MC4xNzI5LCAyNC45NTkxXTtcbiAgY29uc3QgdXNlckxvY2F0aW9uID0gdXNlVXNlckdlb0xvY2F0aW9uKClcbiAgY29uc3QgbWFwUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgZ29Ub1VzZXJMb2NhdGlvbiA9ICgpID0+IHtcbiAgICBpZih1c2VyTG9jYXRpb24uaXNMb2FkZWQgJiYgIXVzZXJMb2NhdGlvbi5lcnJvcil7XG4gICAgICAgIG1hcFJlZi5jdXJyZW50LmZseVRvKFt1c2VyTG9jYXRpb24ubG9jYXRpb24ubGF0LCB1c2VyTG9jYXRpb24ubG9jYXRpb24ubG9uZ10sIDE1LCB7YW5pbWF0ZTp0cnVlLCBkdXJhdGlvbjogMX0pXG4gICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdvVG9BcGFydG1lbnRMb2NhdGlvbiA9IChhcGFydG1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhcGFydG1lbnQubG9jYXRpb24pXG4gICAgaWYobWFwUmVmLmN1cnJlbnQpe1xuICAgICAgbWFwUmVmLmN1cnJlbnQuZmx5VG8oYXBhcnRtZW50LmxvY2F0aW9uLCAxNiwge2FuaW1hdGU6dHJ1ZSwgZHVyYXRpb246IDF9KVxuXG4gICAgICBtYXBSZWYuY3VycmVudC5lYWNoTGF5ZXIoZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBsYXllciBpcyBhIG1hcmtlclxuICAgICAgICBpZiAobGF5ZXIgaW5zdGFuY2VvZiBMLk1hcmtlcikge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBtYXJrZXIncyBjb29yZGluYXRlcyBtYXRjaCB0aGUgZGVzaXJlZCBjb29yZGluYXRlc1xuICAgICAgICAgIGlmIChsYXllci5nZXRMYXRMbmcoKS5lcXVhbHMoYXBhcnRtZW50LmxvY2F0aW9uKSkge1xuICAgICAgICAgICAgLy8gQWNjZXNzIHRoZSBtYXJrZXIncyBIVE1MIGVsZW1lbnRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWFya2VyIGZvdW5kXCIpXG4gICAgICAgICAgICBjb25zdCBtYXJrZXJFbGVtZW50ID0gbGF5ZXIuZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgbWFya2VyRWxlbWVudC5jbGljaygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgICAgICBcbiAgICB9XG5cblxuICB9XG5cbiAgY29uc3Qgd2lkZW5NYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlYWZsZXQtY29udGFpbmVyJylcbiAgICBjb25zdCB3aWRlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1lJylcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgd2lkZW5CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICBtYXAuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1jb250YWluZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlZCcpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7bWFwUmVmLmN1cnJlbnQuaW52YWxpZGF0ZVNpemUoKX0sIDUwMClcbiAgICBjb25zdCBtYXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcC1hcGFydG1lbnQtbGlzdCcpXG4gICAgY29uc3QgYXBhcnRtZW50Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1jb250YWluZXInKVxuICAgIGFwYXJ0bWVudENhcmRzLmZvckVhY2goYXBhcnRtZW50Q2FyZCA9PiBhcGFydG1lbnRDYXJkLmNsYXNzTGlzdC50b2dnbGUoJ21hcCcpKVxuICAgIG1hcExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWFwQ29udGFpbmVyIHJlZj17bWFwUmVmfSBjZW50ZXI9e2tydXVudW5oYWthQ29vcmRpbmF0ZXN9IHpvb209ezEzfSBzY3JvbGxXaGVlbFpvb209e3RydWV9PlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgYXR0cmlidXRpb249JyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPExlYWZsZXRnZW9TZWFyY2gvPlxuICAgICAgICA8TWFya2VyQ2x1c3Rlckdyb3VwIGNodW5rZWRMb2FkaW5nPlxuICAgICAgICAgIHthcGFydG1lbnRNYXJrZXJzLm1hcCgobWFya2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE1hcmtlciBrZXk9e2luZGV4fSBwb3NpdGlvbj17bWFya2VyfSBpY29uPXtjdXN0b21JY29ufT5cbiAgICAgICAgICAgICAgICA8UG9wdXA+XG4gICAgICAgICAgICAgICAgICBNYXJrZXJcbiAgICAgICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9NYXJrZXJDbHVzdGVyR3JvdXA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2NhdGUtbWUnPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxvY2F0aW9uRG90fSBzaXplPVwiM3hcIiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19IG9uQ2xpY2s9e2dvVG9Vc2VyTG9jYXRpb259Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcGVuLW1lJz5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNpcmNsZUNoZXZyb25Eb3dufSBzaXplPVwiM3hcIiBzdHlsZT17eyBjb2xvcjogJ2JsdWUnIH19IG9uQ2xpY2s9e3dpZGVuTWFwfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwLWFwYXJ0bWVudC1saXN0Jz5cbiAgICAgICAgICB7YXBhcnRtZW50RGF0YS5tYXAoKGFwYXJ0bWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8QXBhcnRtZW50Q2FyZCBrZXk9e2luZGV4fSBhcGFydG1lbnQ9e2FwYXJ0bWVudH0gaGFuZGxlQ2xpY2s9e2dvVG9BcGFydG1lbnRMb2NhdGlvbn0vPlxuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICAgICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJ1c2VNYXAiLCJNYXJrZXJDbHVzdGVyR3JvdXAiLCJJY29uIiwiTGVhZmxldGdlb1NlYXJjaCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhTG9jYXRpb25Eb3QiLCJmYUNpcmNsZUNoZXZyb25Eb3duIiwidXNlVXNlckdlb0xvY2F0aW9uIiwidXNlUmVmIiwiYXBhcnRtZW50RGF0YSIsIkFwYXJ0bWVudENhcmQiLCJjdXN0b21JY29uIiwiaWNvblVybCIsImljb25TaXplIiwiYXBhcnRtZW50TWFya2VycyIsIm1hcCIsImFwYXJ0bWVudCIsImxvY2F0aW9uIiwiTWFwIiwicG9wdXBPcGVuIiwic2V0UG9wdXBPcGVuIiwidXNlU3RhdGUiLCJrcnV1bnVuaGFrYUNvb3JkaW5hdGVzIiwidXNlckxvY2F0aW9uIiwibWFwUmVmIiwiZ29Ub1VzZXJMb2NhdGlvbiIsImlzTG9hZGVkIiwiZXJyb3IiLCJjdXJyZW50IiwiZmx5VG8iLCJsYXQiLCJsb25nIiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwiZ29Ub0FwYXJ0bWVudExvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsImVhY2hMYXllciIsImxheWVyIiwiTCIsImdldExhdExuZyIsImVxdWFscyIsIm1hcmtlckVsZW1lbnQiLCJnZXRFbGVtZW50IiwiY2xpY2siLCJ3aWRlbk1hcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpZGVuQnV0dG9uIiwiY29udGFpbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2V0VGltZW91dCIsImludmFsaWRhdGVTaXplIiwibWFwTGlzdCIsImFwYXJ0bWVudENhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJhcGFydG1lbnRDYXJkIiwicmVmIiwiY2VudGVyIiwiem9vbSIsInNjcm9sbFdoZWVsWm9vbSIsImF0dHJpYnV0aW9uIiwidXJsIiwiY2h1bmtlZExvYWRpbmciLCJtYXJrZXIiLCJpbmRleCIsInBvc2l0aW9uIiwiaWNvbiIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiLCJzdHlsZSIsImNvbG9yIiwib25DbGljayIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Map/Map.js\n"));

/***/ })

});