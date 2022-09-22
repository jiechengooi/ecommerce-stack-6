"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/createCheckoutSession";
exports.ids = ["pages/api/createCheckoutSession"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./lib/sanityClient.ts":
/*!*****************************!*\
  !*** ./lib/sanityClient.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"60bswpa2\",\n    dataset: \"ecommerce-stack-6\",\n    apiVersion: \"2021-10-21\",\n    useCdn: true,\n    token: \"skMPRGGP09qVqQehWvvqP1L0ZNBgy0dr93qKPRtg1FYYiWafe4Q3do6SpPaufDH1GfCCJzkTmKDqXz0Xi0ee3Jy7yU2KCCYJgRbKM0UgVWpeBJovKRMf7YTVERy53sTxakKTMoISQvVOhYh8o64wSBnXuPqioTHiUctHSTOEiwf227SKlILm\"\n});\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);\nconst urlFor = (source)=>builder.image(source);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5Q2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUNNO0FBRWhELE1BQU1FLE1BQU0sR0FBR0YscURBQVksQ0FBQztJQUMxQkcsU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUJDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxNQUFNLEVBQUUsSUFBSTtJQUNaQyxLQUFLLEVBQUVDLHNMQUFvQztDQUM1QyxDQUFDO0FBRUYsTUFBTUcsT0FBTyxHQUFHVix3REFBZSxDQUFDQyxNQUFNLENBQUM7QUFFdkMsTUFBTVUsTUFBTSxHQUFHLENBQUNDLE1BQVcsR0FBS0YsT0FBTyxDQUFDRyxLQUFLLENBQUNELE1BQU0sQ0FBQztBQUUzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1zdGFjay02Ly4vbGliL3Nhbml0eUNsaWVudC50cz82NDJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xuXG5jb25zdCBjbGllbnQgPSBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6IFwiNjBic3dwYTJcIixcbiAgZGF0YXNldDogXCJlY29tbWVyY2Utc3RhY2stNlwiLFxuICBhcGlWZXJzaW9uOiBcIjIwMjEtMTAtMjFcIixcbiAgdXNlQ2RuOiB0cnVlLFxuICB0b2tlbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1RPS0VOXG59KTtcblxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xuXG5jb25zdCB1cmxGb3IgPSAoc291cmNlOiBhbnkpID0+IGJ1aWxkZXIuaW1hZ2Uoc291cmNlKTtcblxuZXhwb3J0IHsgY2xpZW50LCB1cmxGb3IgfTtcbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9UT0tFTiIsImJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/sanityClient.ts\n");

/***/ }),

/***/ "(api)/./pages/api/createCheckoutSession/index.ts":
/*!**************************************************!*\
  !*** ./pages/api/createCheckoutSession/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_sanityClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanityClient */ \"(api)/./lib/sanityClient.ts\");\n\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    const items = req.body.items;\n    const transformedItems = items.map((item)=>{\n        return {\n            price_data: {\n                currency: \"usd\",\n                product_data: {\n                    images: item.images.map((image)=>(0,_lib_sanityClient__WEBPACK_IMPORTED_MODULE_0__.urlFor)(image).url()),\n                    name: item.name\n                },\n                unit_amount: item.price * 100 // convert to integer\n            },\n            description: item.details,\n            quantity: item.quantity\n        };\n    });\n    try {\n        const session = await stripe.checkout.sessions.create({\n            payment_method_types: [\n                \"card\"\n            ],\n            line_items: transformedItems,\n            mode: \"payment\",\n            success_url: `${req.headers.origin}/success`,\n            cancel_url: `${req.headers.origin}/?canceled=true`\n        });\n        return res.json({\n            id: session.id\n        });\n    } catch (err) {\n        return res.status(400).json({\n            message: err.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ2hlY2tvdXRTZXNzaW9uL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ21EO0FBR25ELE1BQU1DLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FBQztBQUVoRCxlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNQyxLQUFLLEdBQW1CRixHQUFHLENBQUNHLElBQUksQ0FBQ0QsS0FBSztJQUU1QyxNQUFNRSxnQkFBZ0IsR0FBR0YsS0FBSyxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO1FBQzNDLE9BQU87WUFDTEMsVUFBVSxFQUFFO2dCQUNWQyxRQUFRLEVBQUUsS0FBSztnQkFDZkMsWUFBWSxFQUFFO29CQUNaQyxNQUFNLEVBQUVKLElBQUksQ0FBQ0ksTUFBTSxDQUFDTCxHQUFHLENBQUMsQ0FBQ00sS0FBb0IsR0FDM0NsQix5REFBTSxDQUFDa0IsS0FBSyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUNwQjtvQkFDREMsSUFBSSxFQUFFUCxJQUFJLENBQUNPLElBQUk7aUJBQ2hCO2dCQUNEQyxXQUFXLEVBQUVSLElBQUksQ0FBQ1MsS0FBSyxHQUFHLEdBQUcsQ0FBQyxxQkFBcUI7YUFDcEQ7WUFDREMsV0FBVyxFQUFFVixJQUFJLENBQUNXLE9BQU87WUFDekJDLFFBQVEsRUFBRVosSUFBSSxDQUFDWSxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxHQUFHLE1BQU16QixNQUFNLENBQUMwQixRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1lBQ3BEQyxvQkFBb0IsRUFBRTtnQkFBQyxNQUFNO2FBQUM7WUFDOUJDLFVBQVUsRUFBRXBCLGdCQUFnQjtZQUM1QnFCLElBQUksRUFBRSxTQUFTO1lBQ2ZDLFdBQVcsRUFBRSxDQUFDLEVBQUUxQixHQUFHLENBQUMyQixPQUFPLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDNUNDLFVBQVUsRUFBRSxDQUFDLEVBQUU3QixHQUFHLENBQUMyQixPQUFPLENBQUNDLE1BQU0sQ0FBQyxlQUFlLENBQUM7U0FDbkQsQ0FBQztRQUVGLE9BQU8zQixHQUFHLENBQUM2QixJQUFJLENBQUM7WUFBRUMsRUFBRSxFQUFFWixPQUFPLENBQUNZLEVBQUU7U0FBRSxDQUFDLENBQUM7SUFDdEMsRUFBRSxPQUFPQyxHQUFHLEVBQU87UUFDakIsT0FBTy9CLEdBQUcsQ0FBQ2dDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0gsSUFBSSxDQUFDO1lBQUVJLE9BQU8sRUFBRUYsR0FBRyxDQUFDRSxPQUFPO1NBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLXN0YWNrLTYvLi9wYWdlcy9hcGkvY3JlYXRlQ2hlY2tvdXRTZXNzaW9uL2luZGV4LnRzP2RiNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Nhbml0eUNsaWVudFwiO1xuaW1wb3J0IHsgSVByb2R1Y3REYXRhLCBJUHJvZHVjdEltYWdlIH0gZnJvbSBcIi4vLi4vLi4vLi4vdHlwZXMvcHJvZHVjdFwiO1xuXG5jb25zdCBzdHJpcGUgPSByZXF1aXJlKFwic3RyaXBlXCIpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCBpdGVtczogSVByb2R1Y3REYXRhW10gPSByZXEuYm9keS5pdGVtcztcblxuICBjb25zdCB0cmFuc2Zvcm1lZEl0ZW1zID0gaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByaWNlX2RhdGE6IHtcbiAgICAgICAgY3VycmVuY3k6IFwidXNkXCIsXG4gICAgICAgIHByb2R1Y3RfZGF0YToge1xuICAgICAgICAgIGltYWdlczogaXRlbS5pbWFnZXMubWFwKChpbWFnZTogSVByb2R1Y3RJbWFnZSkgPT5cbiAgICAgICAgICAgIHVybEZvcihpbWFnZSkudXJsKClcbiAgICAgICAgICApLFxuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZVxuICAgICAgICB9LFxuICAgICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMCAvLyBjb252ZXJ0IHRvIGludGVnZXJcbiAgICAgIH0sXG4gICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXRhaWxzLFxuICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHlcbiAgICB9O1xuICB9KTtcblxuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxuICAgICAgbGluZV9pdGVtczogdHJhbnNmb3JtZWRJdGVtcyxcbiAgICAgIG1vZGU6IFwicGF5bWVudFwiLFxuICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vc3VjY2Vzc2AsXG4gICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59Lz9jYW5jZWxlZD10cnVlYFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5qc29uKHsgaWQ6IHNlc3Npb24uaWQgfSk7XG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzdHJpcGUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIml0ZW1zIiwiYm9keSIsInRyYW5zZm9ybWVkSXRlbXMiLCJtYXAiLCJpdGVtIiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwiaW1hZ2VzIiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwidW5pdF9hbW91bnQiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiZGV0YWlscyIsInF1YW50aXR5Iiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImxpbmVfaXRlbXMiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJoZWFkZXJzIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsImpzb24iLCJpZCIsImVyciIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/createCheckoutSession/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createCheckoutSession/index.ts"));
module.exports = __webpack_exports__;

})();