"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: external "react-bootstrap/Carousel"
const Carousel_namespaceObject = require("react-bootstrap/Carousel");
var Carousel_default = /*#__PURE__*/__webpack_require__.n(Carousel_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Testimonials/Testimonials.js


var $ = __webpack_require__(2947);
if (false) {}




function Testimonials(props) {
    const OwlCarousel = dynamic_default()(null, {
        loadableGenerated: {
            modules: [
                "../components/Testimonials/Testimonials.js -> " + "react-owl-carousel"
            ]
        },
        ssr: false
    });
    const state = {
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "testimonials-section pt-5",
            id: "testimonials",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "center-head mr-3 mb-4",
                                children: "What Students say about us"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OwlCarousel, {
                                className: "owl-theme testimonials",
                                responsive: state.responsive,
                                loop: true,
                                nav: true,
                                dots: false,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hear-from-slider border rounded shadow-sm item bg-white p-4 mx-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "testi-para",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                                    className: "here-from-p-text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fa fa-quote-left fa-2x text-primary me-3",
                                                            "aria-hidden": "true"
                                                        }),
                                                        "I never thought my performance would be this great in six month of Full stack Developement. All thanks to the great faculties of Heuristic Academy . I wouldn\u2019t have been able to make it without them. Their way of teaching, Explaining and superb guidance has really shaped my career goals."
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-4 text-end",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "text-primary",
                                                            children: "Jawad Shaikh"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            children: "Student"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "testi-para",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                                    className: "here-from-p-text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fa fa-quote-left fa-2x text-primary me-3",
                                                            "aria-hidden": "true"
                                                        }),
                                                        "Heuristic Academy is the place for tinkerers! The place to level up your knowledge of theory to application.With the best experienced faculty and fun to learn behaviour, we experience learning in a fun way."
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-4 text-end",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "text-primary",
                                                            children: "Rashid Sarang"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            children: "Student"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "testi-para",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                                    className: "here-from-p-text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fa fa-quote-left fa-2x text-primary me-3",
                                                            "aria-hidden": "true"
                                                        }),
                                                        "I have been this institute for 2 months and let's be honest, I learnt skills in a deeper manner infact the faculties are so supportive and help us to grow in various skills like soft skills and technical skills."
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-4 text-end",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "text-primary",
                                                            children: "Kshitij Dandge"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            children: "Student"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "testi-para",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                                    className: "here-from-p-text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fa fa-quote-left fa-2x text-primary me-3",
                                                            "aria-hidden": "true"
                                                        }),
                                                        "Very helpful for career point of view and Thanks to teachers of Heuristic Academy to teach us other than syllabus to build our career."
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-4 text-end",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "text-primary",
                                                            children: "Sahu Sameer"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            children: "Student"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "testi-para",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                                    className: "here-from-p-text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fa fa-quote-left fa-2x text-primary me-3",
                                                            "aria-hidden": "true"
                                                        }),
                                                        "The class is awesome! The instructor spoke very clear and was very knowledgeable and patient. This was my first time taking a course in this format and it far exceeded my expectations."
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-4 text-end",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "text-primary",
                                                            children: "Huda Shaikh"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            children: "Student"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "testi-para",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                                    className: "here-from-p-text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "fa fa-quote-left fa-2x text-primary me-3",
                                                            "aria-hidden": "true"
                                                        }),
                                                        "Before joining this course I wasn't able to adopt coding Languages but after joining this course I found it was interesting and familiar. The teaching skills of Fauzan Falke sir is worthy of appreciating.The flexibility and clearing doubts is also a good part."
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mt-4 text-end",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "ml-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "text-primary",
                                                            children: "Haris Patel"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            children: "Student"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const Testimonials_Testimonials = (Testimonials);

;// CONCATENATED MODULE: ./public/assets/banner1.jpg
/* harmony default export */ const banner1 = ({"src":"/_next/static/media/banner1.58fd61bd.jpg","height":683,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAkwP/xAAcEAACAgIDAAAAAAAAAAAAAAABEQIDAAQFEvH/2gAIAQEAAT8Ahyl3SwzBK1o2lSTXmf/EABcRAQADAAAAAAAAAAAAAAAAAAEAEUH/2gAIAQIBAT8Aocn/xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8ArP/Z"});
;// CONCATENATED MODULE: ./public/assets/banner2.jpg
/* harmony default export */ const banner2 = ({"src":"/_next/static/media/banner2.e2c601e3.jpg","height":764,"width":1100,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAALFP/8QAHRAAAQQCAwAAAAAAAAAAAAAAAgEDBAUAERIUQ//aAAgBAQABPwCiuiuocRqSrgdTSEoenDP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z"});
;// CONCATENATED MODULE: ./public/assets/banner3.jpg
/* harmony default export */ const banner3 = ({"src":"/_next/static/media/banner3.cc1632e1.jpg","height":1280,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAmAAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAACf//EABsQAAIDAAMAAAAAAAAAAAAAAAECAwQRAAUS/9oACAEBAAE/ABbkh62a4qR6rpoI0sMzPXP/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAIS/9oACAECAQE/AFdWn//EABgRAAIDAAAAAAAAAAAAAAAAAAECABIh/9oACAEDAQE/AEAouT//2Q=="});
;// CONCATENATED MODULE: ./public/assets/banner4.jpg
/* harmony default export */ const banner4 = ({"src":"/_next/static/media/banner4.90b89222.jpg","height":440,"width":860,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAApB0//8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIDBBEABf/aAAgBAQABPwDya1cWdWGNWMZ1gg3v/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJCcv/aAAgBAgEBPwCUyf/EABcRAAMBAAAAAAAAAAAAAAAAAAACQXL/2gAIAQMBAT8Ar6P/2Q=="});
;// CONCATENATED MODULE: external "react-bootstrap/Modal"
const Modal_namespaceObject = require("react-bootstrap/Modal");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_namespaceObject);
;// CONCATENATED MODULE: ./public/assets/full-stack-hero.jpg
/* harmony default export */ const full_stack_hero = ({"src":"/_next/static/media/full-stack-hero.41c2707f.jpg","height":934,"width":1400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAJAUP//EAB4QAAICAAcAAAAAAAAAAAAAAAECAwQABRITMVNh/9oACAEBAAE/ALmZ2abxuztPPs6zLIewEceDH//EABkRAQACAwAAAAAAAAAAAAAAAAEAEQIyYf/aAAgBAgEBPwDHUaLeT//EABkRAQADAQEAAAAAAAAAAAAAAAECESEAMf/aAAgBAwEBPwBiMk3K8a7/2Q=="});
;// CONCATENATED MODULE: ./public/assets/back-end-hero.jpg
/* harmony default export */ const back_end_hero = ({"src":"/_next/static/media/back-end-hero.5b5ed90a.jpg","height":400,"width":600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKhQ/8QAHhAAAgIABwAAAAAAAAAAAAAAAQMCBAAREhMhIjH/2gAIAQEAAT8AVQqWRBjUhmrcZEM7iOQ85x//xAAWEQEBAQAAAAAAAAAAAAAAAAABAgD/2gAIAQIBAT8AkKmV3//EABcRAAMBAAAAAAAAAAAAAAAAAAABAhL/2gAIAQMBAT8Ap5qkj//Z"});
;// CONCATENATED MODULE: ./public/assets/front-end-hero.jpg
/* harmony default export */ const front_end_hero = ({"src":"/_next/static/media/front-end-hero.5be5f0be.jpg","height":800,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAApgV//8QAGxABAQEAAgMAAAAAAAAAAAAAAgEDAAQGEoH/2gAIAQEAAT8Aut6Hj0eRKBCug0MUd9ZfnP/EABYRAQEBAAAAAAAAAAAAAAAAAAECAP/aAAgBAgEBPwC1Cd//xAAXEQADAQAAAAAAAAAAAAAAAAABAhEA/9oACAEDAQE/AFUG3f/Z"});
;// CONCATENATED MODULE: ./public/assets/software-testing-hero.jpg
/* harmony default export */ const software_testing_hero = ({"src":"/_next/static/media/software-testing-hero.e0e054ea.jpg","height":730,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAABf/EABwQAAEFAAMAAAAAAAAAAAAAAAIBAwQFEgAU0f/aAAgBAQABPwCZfDV1qtADkjubEkeVM685/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAESEi/9oACAECAQE/AF6Ftpn/xAAYEQEBAAMAAAAAAAAAAAAAAAABAgARYf/aAAgBAwEBPwCqqHUqHM//2Q=="});
;// CONCATENATED MODULE: ./public/assets/embeded-hero.jpg
/* harmony default export */ const embeded_hero = ({"src":"/_next/static/media/embeded-hero.220599a9.jpg","height":408,"width":612,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJCwf//EABwQAAIBBQEAAAAAAAAAAAAAAAECAwAEERITgf/aAAgBAQABPwCz6RoXMztx3JUhcOV8r//EABgRAAMBAQAAAAAAAAAAAAAAAAECAwAh/9oACAECAQE/AIItDQsoPd//xAAWEQEBAQAAAAAAAAAAAAAAAAABAgD/2gAIAQMBAT8AtZmCVN//2Q=="});
;// CONCATENATED MODULE: ./public/assets/data-science-hero.jpg
/* harmony default export */ const data_science_hero = ({"src":"/_next/static/media/data-science-hero.3d503035.jpg","height":815,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAjAof/8QAHxAAAAYBBQAAAAAAAAAAAAAAAQIDBBESAAUiJDFB/9oACAEBAAE/ANRcIGYJ8aFDDS1toR7Ed5//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8AVV2//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAwEBPwCEplYf/9k="});
;// CONCATENATED MODULE: ./public/assets/electrical-hero.jpg
/* harmony default export */ const electrical_hero = ({"src":"/_next/static/media/electrical-hero.c4b1c2d0.jpg","height":350,"width":625,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAmAAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAABT//EABwQAAICAgMAAAAAAAAAAAAAAAECAwQABREiMv/aAAgBAQABPwC/YZdhMxSNmJHZlBPrjP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAgEBPwDajf/EABURAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDAQE/AJf/2Q=="});
;// CONCATENATED MODULE: ./components/Courses/Courses.js


var Courses_$ = __webpack_require__(2947);
if (false) {}












function Courses() {
    const OwlCarousel = dynamic_default()(null, {
        loadableGenerated: {
            modules: [
                "../components/Courses/Courses.js -> " + "react-owl-carousel"
            ]
        },
        ssr: false
    });
    const state = {
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 4
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };
    const { 0: showFS , 1: setShowFS  } = (0,external_react_.useState)(false);
    const { 0: showFE , 1: setShowFE  } = (0,external_react_.useState)(false);
    const { 0: showBE , 1: setShowBE  } = (0,external_react_.useState)(false);
    const { 0: showEM , 1: setShowEM  } = (0,external_react_.useState)(false);
    const { 0: showST , 1: setShowST  } = (0,external_react_.useState)(false);
    const { 0: showDS , 1: setShowDS  } = (0,external_react_.useState)(false);
    const { 0: showEL , 1: setShowEL  } = (0,external_react_.useState)(false);
    function openNav() {
        console.log("aaaaaaa");
        document.getElementById("mySidenav").style.width = "360px";
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "courses-section pt-5",
            id: "courses",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "center-head mr-3 mb-4",
                                children: "Our Programmes"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Choose from Bunch of courses Available with the Flexibility of Learning with Proven Method Called as ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "\u201CHeuristic\u201D"
                                    }),
                                    " Means Learning by Doing, Not just Board and Book"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OwlCarousel, {
                                className: "owl-theme mb-4",
                                responsive: state.responsive,
                                loop: true,
                                nav: true,
                                dots: false,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card item shadow-sm mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                height: "160",
                                                width: "250",
                                                objectFit: "cover",
                                                src: "/assets/mern-stack.jpg",
                                                alt: "fullstack-course",
                                                layout: "responsive"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "card-top-data",
                                                        children: "VIDEO LECTURE + LIVE SESSIONS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        class: "card-title text-primary ms-3 mt-2",
                                                        children: "MERN Stack Development"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                        className: "my-4"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "6 Months Intense Training"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Flexible Timings Per Course"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Certificate of Completion"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Resume & Interview Training"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn btn-sm btn-outline-primary ms-3 mt-3",
                                                        onClick: ()=>setShowFS(true),
                                                        children: "Learn More"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                                                show: showFS,
                                                onHide: ()=>setShowFS(false),
                                                dialogClassName: "modal-90w",
                                                "aria-labelledby": "contained-modal-title-vcenter",
                                                size: "lg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                                                        closeButton: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                                                            id: "contained-modal-title-vcenter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "text-primary",
                                                                children: "MERN Stack Developer Course Details"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                height: "450",
                                                                width: "800",
                                                                objectFit: "cover",
                                                                src: "/assets/mern-stack.jpg",
                                                                alt: "fullstack-course",
                                                                layout: "responsive"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "my-4 ",
                                                                children: "Get started with the MERN Stack Developer Program and explore everything about the program."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "MERN Stack Development is a software profession where a developer deals with both the Frontend (client-side) and Backend (server-side) of a tech product. A Full Stack Developer is proficient in several technologies that help in developing a robust tech product, and thus play a major role in making decisions for the company. It is among the high-demand jobs in the software industry. The 6-month Programme in Full stack Developer  enables learners to build deep tech capabilities and apply their learnings to make a static and Dynamic Website which can be used in E-Commerce or business Driven or can be a Data Accumulation Web Application,with Technologies such as React.js , Node.js , Express.js, Mongo DB , JS , GIT , HTML5,CSS3 ,Bootstrap among the many more Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-flex justify-content-between",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "btn btn-sm btn-primary",
                                                                    onClick: openNav,
                                                                    children: "Enroll Now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card item shadow-sm mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                height: "160",
                                                width: "250",
                                                objectFit: "cover",
                                                src: "/assets/full-stack-hero.jpg",
                                                alt: "fullstack-course",
                                                layout: "responsive"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "card-top-data",
                                                        children: "VIDEO LECTURE + LIVE SESSIONS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        class: "card-title text-primary ms-3 mt-2",
                                                        children: "Full Stack Development"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                        className: "my-4"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "6 Months Intense Training"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Flexible Timings Per Course"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Certificate of Completion"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Resume & Interview Training"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn btn-sm btn-outline-primary ms-3 mt-3",
                                                        onClick: ()=>setShowFS(true),
                                                        children: "Learn More"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                                                show: showFS,
                                                onHide: ()=>setShowFS(false),
                                                dialogClassName: "modal-90w",
                                                "aria-labelledby": "contained-modal-title-vcenter",
                                                size: "lg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                                                        closeButton: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                                                            id: "contained-modal-title-vcenter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "text-primary",
                                                                children: "Full Stack Developer Course Details"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                height: "450",
                                                                width: "800",
                                                                objectFit: "cover",
                                                                src: "/assets/full-stack-hero.jpg",
                                                                alt: "fullstack-course",
                                                                layout: "responsive"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "my-4 ",
                                                                children: "Get started with the Full Stack Developer Program and explore everything about the program."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Full Stack Development is a software profession where a developer deals with both the Frontend (client-side) and Backend (server-side) of a tech product. A Full Stack Developer is proficient in several technologies that help in developing a robust tech product, and thus play a major role in making decisions for the company. It is among the high-demand jobs in the software industry. The 6-month Programme in Full stack Developer  enables learners to build deep tech capabilities and apply their learnings to make a static and Dynamic Website which can be used in E-Commerce or business Driven or can be a Data Accumulation Web Application,with Technologies such as Python , Node.js , PHP, My SQL , JS , GIT , HTML5,CSS3 ,Bootstrap among the many more Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-flex justify-content-between",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "btn btn-sm btn-primary",
                                                                    onClick: openNav,
                                                                    children: "Enroll Now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card item shadow-sm mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                height: "160",
                                                width: "250",
                                                objectFit: "cover",
                                                src: "/assets/front-end-hero.jpg",
                                                alt: "frontend-course",
                                                layout: "responsive"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "card-top-data",
                                                        children: "VIDEO LECTURE + LIVE SESSIONS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        class: "card-title text-primary ms-3 mt-2",
                                                        children: "Front-End Development"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                        className: "my-4"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "6 Months Intense Training"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Flexible Timings Per Course"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Certificate of Completion"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Resume & Interview Training"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn btn-sm btn-outline-primary ms-3 mt-3",
                                                        onClick: ()=>setShowFE(true),
                                                        children: "Learn More"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                                                show: showFE,
                                                onHide: ()=>setShowFE(false),
                                                dialogClassName: "modal-90w",
                                                "aria-labelledby": "contained-modal-title-vcenter",
                                                size: "lg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                                                        closeButton: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                                                            id: "contained-modal-title-vcenter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "text-primary",
                                                                children: "Front-End Developer Course Details"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                height: "450",
                                                                width: "800",
                                                                objectFit: "cover",
                                                                src: "/assets/front-end-hero.jpg",
                                                                alt: "frontend-course",
                                                                layout: "responsive"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "my-4 ",
                                                                children: "Get started with the Front-End Developer Program and explore everything about the program."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Front End Development is a software profession where a developer deals with only the Frontend (client-side) of a tech product. A Front End Developer is proficient in several technologies that help in developing a robust tech product, and thus play a major role in making decisions for the company. It is among the high-demand jobs in the software industry. The 6-month Programme in Full stack Developer  enables learners to build deep tech capabilities and apply their learnings to make a static and Dynamic Website which can be used in E-Commerce or business Driven or can be a Data Accumulation Web Application,with Technologies such as React , ES-6 , JS , GIT , HTML5, CSS3, bootstrap  among the many more Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-flex justify-content-between",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "btn btn-sm btn-primary",
                                                                    onClick: openNav,
                                                                    children: "Enroll Now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card item shadow-sm mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                height: "160",
                                                width: "250",
                                                objectFit: "cover",
                                                src: "/assets/back-end-hero.jpg",
                                                alt: "backend-course",
                                                layout: "responsive"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "card-top-data",
                                                        children: "VIDEO LECTURE + LIVE SESSIONS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        class: "card-title text-primary ms-3 mt-2",
                                                        children: "Back-End Development"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                        className: "my-4"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "6 Months Intense Training"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Flexible Timings Per Course"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Certificate of Completion"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Resume & Interview Training"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn btn-sm btn-outline-primary ms-3 mt-3",
                                                        onClick: ()=>setShowBE(true),
                                                        children: "Learn More"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                                                show: showBE,
                                                onHide: ()=>setShowBE(false),
                                                dialogClassName: "modal-90w",
                                                "aria-labelledby": "contained-modal-title-vcenter",
                                                size: "lg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                                                        closeButton: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                                                            id: "contained-modal-title-vcenter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "text-primary",
                                                                children: "Back-End Developer Course Details"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                height: "450",
                                                                width: "800",
                                                                objectFit: "cover",
                                                                src: "/assets/back-end-hero.jpg",
                                                                alt: "backend-course",
                                                                layout: "responsive"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "my-4 ",
                                                                children: "Get started with the Back-End Developer Program and explore everything about the program."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Back-End Development is a software profession where a developer deals with only Backend (server-side) of a tech product. A Full Stack Developer is proficient in several technologies that help in developing a robust tech product, and thus play a major role in making decisions for the company. It is among the high-demand jobs in the software industry. The 6-month Programme in Full stack Developer  enables learners to build deep tech capabilities and apply their learnings to make a static and Dynamic Website which can be used in E-Commerce or business Driven or can be a Data Accumulation Web Application,with Technologies such as python, php, linux, My Sql, JS , GIT  among the many more Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-flex justify-content-between",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "btn btn-sm btn-primary",
                                                                    onClick: openNav,
                                                                    children: "Enroll Now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card item shadow-sm mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                height: "160",
                                                width: "250",
                                                objectFit: "cover",
                                                src: "/assets/embeded-hero.jpg",
                                                alt: "embedded-course",
                                                layout: "responsive"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "card-top-data",
                                                        children: "VIDEO LECTURE + LIVE SESSIONS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        class: "card-title text-primary ms-3 mt-2",
                                                        children: "Embedded Development"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                        className: "my-4"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "6 Months Intense Training"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Flexible Timings Per Course"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Certificate of Completion"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Resume & Interview Training"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn btn-sm btn-outline-primary ms-3 mt-3",
                                                        onClick: ()=>setShowEM(true),
                                                        children: "Learn More"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                                                show: showEM,
                                                onHide: ()=>setShowEM(false),
                                                dialogClassName: "modal-90w",
                                                "aria-labelledby": "contained-modal-title-vcenter",
                                                size: "lg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                                                        closeButton: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                                                            id: "contained-modal-title-vcenter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "text-primary",
                                                                children: "Embedded Developer Course Details"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                height: "450",
                                                                width: "800",
                                                                objectFit: "cover",
                                                                src: "/assets/embeded-hero.jpg",
                                                                alt: "embeded-course",
                                                                layout: "responsive"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "my-4 ",
                                                                children: "Get started with the Embedded Developer Program and explore everything about the program."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "As per recent research, it is predicted that the Embedded market will be worth US$ 116.2 billion by 2025. This increase in global demand is due to an increase in demand for Consumer Electronics, Industrial Automation and hence there are immense opportunities in hardware and embedded design. The 5-month Programme in Embedded Development  enables learners to build Firmware with a customised Hardware for a Dedicated Problem to Solve, Helps in understanding industry standard design techniques, flows and tools involved in design and maintenance of Embedded Hardware designs, systems and products. Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-flex justify-content-between",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "btn btn-sm btn-primary",
                                                                    onClick: openNav,
                                                                    children: "Enroll Now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card item shadow-sm mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                height: "160",
                                                width: "250",
                                                objectFit: "cover",
                                                src: "/assets/software-testing-hero.jpg",
                                                alt: "software-testing-course",
                                                layout: "responsive"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "card-top-data",
                                                        children: "VIDEO LECTURE + LIVE SESSIONS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        class: "card-title text-primary ms-3 mt-2",
                                                        children: "Software Testing"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                        className: "my-4"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "3 Months Intense Training"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Flexible Timings Per Course"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Certificate of Completion"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Resume & Interview Training"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn btn-sm btn-outline-primary ms-3 mt-3",
                                                        onClick: ()=>setShowST(true),
                                                        children: "Learn More"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                                                show: showST,
                                                onHide: ()=>setShowST(false),
                                                dialogClassName: "modal-90w",
                                                "aria-labelledby": "contained-modal-title-vcenter",
                                                size: "lg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                                                        closeButton: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                                                            id: "contained-modal-title-vcenter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "text-primary",
                                                                children: "software Testing Course Details"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                height: "450",
                                                                width: "800",
                                                                objectFit: "cover",
                                                                src: "/assets/software-testing-hero.jpg",
                                                                alt: "software-testing-course",
                                                                layout: "responsive"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "my-4 ",
                                                                children: "Get started with the software Testing Program and explore everything about the program."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Manual Testing is a form of software testing in which test cases are run by hand rather than using an automated tool. Both test cases are manually performed by the tester from the viewpoint of the end user. It determines whether or not the application meets the requirements specified in the requirement document. To complete nearly 100% of the software application, test cases are designed and implemented. Manual testing is one of the most basic testing methods because it can identify both obvious and unknown software faults. A defect is the difference between the predicted performance and the output produced by the programme. We at Heuristic Academy make sure to give you practical exposure on  Manual  Testing Training with 100 % placement assistance. Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-flex justify-content-between",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "btn btn-sm btn-primary",
                                                                    onClick: openNav,
                                                                    children: "Enroll Now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card item shadow-sm mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                height: "160",
                                                width: "250",
                                                objectFit: "cover",
                                                src: "/assets/data-science-hero.jpg",
                                                alt: "data-science-course",
                                                layout: "responsive"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "card-top-data",
                                                        children: "VIDEO LECTURE + LIVE SESSIONS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        class: "card-title text-primary ms-3 mt-2",
                                                        children: "Data Science"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                        className: "my-4"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "6 Months Intense Training"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Flexible Timings Per Course"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Certificate of Completion"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Resume & Interview Training"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn btn-sm btn-outline-primary ms-3 mt-3",
                                                        onClick: ()=>setShowDS(true),
                                                        children: "Learn More"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                                                show: showDS,
                                                onHide: ()=>setShowDS(false),
                                                dialogClassName: "modal-90w",
                                                "aria-labelledby": "contained-modal-title-vcenter",
                                                size: "lg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                                                        closeButton: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                                                            id: "contained-modal-title-vcenter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "text-primary",
                                                                children: "Data Science Course Details"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                height: "450",
                                                                width: "800",
                                                                objectFit: "cover",
                                                                src: "/assets/data-science-hero.jpg",
                                                                alt: "data-science-course",
                                                                layout: "responsive"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "my-4 ",
                                                                children: "Get started with the Data Science Program and explore everything about the program."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Applied Data Science assumes a significant role in the backdrop of massive data generated from millions of devices. Currently, the daily data output is over 2.5 quintillion bytes, likely to touch 1.7 Mb of data per second per person on the planet in the future. The 3-month Programme in Data Science  enables learners to build deep tech capabilities and apply their learnings to make data-driven business decisions for their organisations. Participants will experience a unique learning process that includes offline and online[Hybrid Based] masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-flex justify-content-between",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "btn btn-sm btn-primary",
                                                                    onClick: openNav,
                                                                    children: "Enroll Now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        class: "card item shadow-sm mx-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                height: "160",
                                                width: "250",
                                                objectFit: "cover",
                                                src: "/assets/electrical-hero.jpg",
                                                alt: "electrical-course",
                                                layout: "responsive"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                class: "card-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "card-top-data",
                                                        children: "VIDEO LECTURE + LIVE SESSIONS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        class: "card-title text-primary ms-3 mt-2",
                                                        children: "Electrical Design"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                        className: "my-4"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "6 Months Intense Training"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Flexible Timings Per Course"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Certificate of Completion"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "mb-2",
                                                                children: "Resume & Interview Training"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "btn btn-sm btn-outline-primary ms-3 mt-3",
                                                        onClick: ()=>setShowEL(true),
                                                        children: "Learn More"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                                                show: showEL,
                                                onHide: ()=>setShowEL(false),
                                                dialogClassName: "modal-90w",
                                                "aria-labelledby": "contained-modal-title-vcenter",
                                                size: "lg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                                                        closeButton: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                                                            id: "contained-modal-title-vcenter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "text-primary",
                                                                children: "Electrical Design Course Details"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Body, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                height: "450",
                                                                width: "800",
                                                                objectFit: "cover",
                                                                src: "/assets/electrical-hero.jpg",
                                                                alt: "electrical-course",
                                                                layout: "responsive"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "my-4 ",
                                                                children: "Get started with the Electrical Design Program and explore everything about the program."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "DIALux is a professional lighting design software with many functions which can also be integrated depending on the workflow. It helps to design, calculate and visualise light professionally \u2013 single rooms, whole floors, buildings and outdoor scenes. The 5-month Programme in Electrical Engg Design  enables learners to build, Helps in understanding industry standard design techniques, flows and tools involved in design and maintenance of Electrical Systems,Lightning the Spaces."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "d-flex justify-content-between",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "btn btn-sm btn-primary",
                                                                    onClick: openNav,
                                                                    children: "Enroll Now"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const Courses_Courses = (Courses);

;// CONCATENATED MODULE: external "react-bootstrap/Form"
const Form_namespaceObject = require("react-bootstrap/Form");
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./components/EnrollmentForm/EnrollmentForm.js






const EnrollmentForm = ()=>{
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */ function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    const { 0: fname , 1: setFName  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)("");
    const { 0: pname , 1: setPname  } = (0,external_react_.useState)("");
    const { 0: pphone , 1: setPphone  } = (0,external_react_.useState)("");
    const { 0: selectedCourse , 1: setSelectedCourse  } = (0,external_react_.useState)("");
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: studentName , 1: setStudentName  } = (0,external_react_.useState)("");
    const { 0: studentEmail , 1: setStudentEmail  } = (0,external_react_.useState)("");
    const { 0: studentPhone , 1: setStudentPhone  } = (0,external_react_.useState)("");
    const { 0: studentParentName , 1: setStudentParentName  } = (0,external_react_.useState)("");
    const { 0: studentParentPhone , 1: setStudentParentPhone  } = (0,external_react_.useState)("");
    const { 0: studentCourseIn , 1: setStudentCourseIn  } = (0,external_react_.useState)("");
    const { 0: studentMessage , 1: setStudentMessage  } = (0,external_react_.useState)("");
    const { 0: fnameErr , 1: setFNameErr  } = (0,external_react_.useState)({});
    const { 0: emailErr , 1: setEmailErr  } = (0,external_react_.useState)({});
    const { 0: phoneErr , 1: setPhoneErr  } = (0,external_react_.useState)({});
    const { 0: pnameErr , 1: setPnameErr  } = (0,external_react_.useState)({});
    const { 0: pphoneErr , 1: setPphoneErr  } = (0,external_react_.useState)({});
    const { 0: selectedCourseErr , 1: setSelectedCourseErr  } = (0,external_react_.useState)({});
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: isEnrollmentLeadAdded , 1: setIsEnrollmentLeadAdded  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setIsEnrollmentLeadAdded(false);
    }, [
        isEnrollmentLeadAdded
    ]);
    const handleEnrollmentSubmit = (event)=>{
        event.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            external_axios_default().post(`https://educaretech-dashboard-default-rtdb.firebaseio.com/enrollmentLead.json`, {
                studentName: fname,
                studentEmail: email,
                studentPhone: phone,
                studentParentName: pname,
                studentParentPhone: pphone,
                studentCourseIn: selectedCourse,
                studentMessage: message,
                studentTimestamp: new Date().toUTCString()
            }).then((response)=>{
                router.push("/thankyou");
                setIsEnrollmentLeadAdded(true);
            }).catch((error)=>console.log("Error" + error));
            // event.target.reset();
            setStudentName("");
            setStudentEmail("");
            setStudentPhone("");
            setStudentParentName("");
            setStudentParentPhone("");
            setStudentCourseIn("");
            setStudentMessage("");
        }
    };
    const formValidation = ()=>{
        const fnameErr = {};
        const emailErr = {};
        const phoneErr = {};
        const pnameErr = {};
        const pphoneErr = {};
        const selectedCourseErr = {};
        let isValid = true;
        if (fname.length == "") {
            fnameErr.fnameRequired = "Please enter first name";
            isValid = false;
        } else if (fname.trim().length <= 3 || fname.trim().length >= 30) {
            fnameErr.fnameShort = "Name lenght must be between 3 and 30";
            isValid = false;
        } else if (!isNaN(fname)) {
            fnameErr.fnameChar = "only character is allowed";
            isValid = false;
        }
        if (email.length == "") {
            emailErr.emailRequired = "Please enter Email Address";
            isValid = false;
        } else if (email.indexOf("@") <= 0) {
            emailErr.emailValid = "@ is at indvalid position";
            isValid = false;
        } else if (email.charAt(email.length - 4) != "." && email.charAt(email.length - 3) != ".") {
            emailErr.emailbadFormat = "Email Address is badly formated";
            isValid = false;
        }
        if (phone.length == "") {
            phoneErr.phoneRequired = "Please enter Phone Number";
            isValid = false;
        } else if (isNaN(phone)) {
            phoneErr.phoneNum = "Phone number should be in digits";
            isValid = false;
        } else if (phone.length != 10) {
            phoneErr.phoneDigit = "Phone number should be in 10 digits not more or less than 10";
            isValid = false;
        }
        if (pname.length == "") {
            pnameErr.pnameRequired = "Please enter Parent name";
            isValid = false;
        } else if (pname.trim().length <= 3 || pname.trim().length >= 30) {
            pnameErr.pnameShort = "Parent Name lenght must be between 3 and 30";
            isValid = false;
        } else if (!isNaN(pname)) {
            pnameErr.pnameChar = "only character is allowed";
            isValid = false;
        }
        if (pphone.length == "") {
            pphoneErr.pphoneRequired = "Please enter Parent Phone Number";
            isValid = false;
        } else if (isNaN(pphone)) {
            pphoneErr.pphoneNum = "phone number should be in digits";
            isValid = false;
        } else if (pphone.length != 10) {
            pphoneErr.pphoneDigit = "phone number should be in 10 digits not more or less than 10";
            isValid = false;
        }
        if (selectedCourse == "") {
            selectedCourseErr.selectedCourseRequired = "Please Select the Course";
            isValid = false;
        }
        setFNameErr(fnameErr);
        setEmailErr(emailErr);
        setPhoneErr(phoneErr);
        setPnameErr(pnameErr);
        setPphoneErr(pphoneErr);
        setSelectedCourseErr(selectedCourseErr);
        return isValid;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                className: "justify-content-md-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                    lg: "12",
                    md: 6,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-primary",
                                    children: "Enrollment Form"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "javascript:void(0)",
                                    class: "closebtn",
                                    onClick: closeNav,
                                    children: "\xd7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Please enter the following details to initiate your application in Development program with Heuristic Academy"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            onSubmit: handleEnrollmentSubmit,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Your Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            type: "text",
                                            name: "name",
                                            id: "name",
                                            value: fname,
                                            onChange: (event)=>setFName(event.target.value),
                                            placeholder: "Enter Your Name"
                                        }),
                                        Object.keys(fnameErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: fnameErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Your Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            type: "text",
                                            name: "email",
                                            id: "email",
                                            value: email,
                                            onChange: (event)=>setEmail(event.target.value),
                                            placeholder: "Enter Your Email"
                                        }),
                                        Object.keys(emailErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: emailErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Your Mobile Number"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            type: "number",
                                            name: "phone_no",
                                            id: "phone_no",
                                            value: phone,
                                            onChange: (event)=>setPhone(event.target.value),
                                            placeholder: "Enter Your Phone No"
                                        }),
                                        Object.keys(phoneErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: phoneErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Enter your Parent / guardian  Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            type: "text",
                                            name: "parent_name",
                                            id: "parent_name",
                                            value: pname,
                                            onChange: (event)=>setPname(event.target.value),
                                            placeholder: "Enter Your parent Name"
                                        }),
                                        Object.keys(pnameErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: pnameErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Enter your Parents / guardian contact number"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            type: "number",
                                            name: "parent_contact",
                                            id: "parent_contact",
                                            value: pphone,
                                            onChange: (event)=>setPphone(event.target.value),
                                            placeholder: "Enter Your Parent Phone No"
                                        }),
                                        Object.keys(pphoneErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: pphoneErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Select Course your are looking for"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Select, {
                                            value: selectedCourse,
                                            onChange: (event)=>setSelectedCourse(event.target.value),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "",
                                                    children: "Select Course"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Full stack Development",
                                                    children: "Full stack Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Front end Development",
                                                    children: "Front end Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Back end Development",
                                                    children: "Back end Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Android Development",
                                                    children: "Android Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Unity Development",
                                                    children: "Unity Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "UI/UX / Graphic Designing",
                                                    children: "UI/UX / Graphic Designing"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Software Testing",
                                                    children: "Software Testing"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Embedded Development",
                                                    children: "Embedded Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Data Science",
                                                    children: "Data Science"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Digital Marketing",
                                                    children: "Digital Marketing"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Electrical Design",
                                                    children: "Electrical Design"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Auto CAD",
                                                    children: "Auto CAD"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "Mechanical Solidworks",
                                                    children: "Mechanical Solidworks"
                                                })
                                            ]
                                        }),
                                        Object.keys(selectedCourseErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: selectedCourseErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Any Queries ?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            as: "textarea",
                                            rows: 3,
                                            name: "message",
                                            id: "message",
                                            value: message,
                                            onChange: (event)=>setMessage(event.target.value),
                                            placeholder: "Message"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "btn btn-sm btn-primary",
                                    children: "Submit"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const EnrollmentForm_EnrollmentForm = (EnrollmentForm);

;// CONCATENATED MODULE: ./components/SchoolEnrollmentForm/SchoolEnrollmentForm.js






const SchoolEnrollmentForm = ()=>{
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */ function closeNav() {
        document.getElementById("mySchSidenav").style.width = "0";
    }
    const { 0: fname , 1: setFName  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: age , 1: setAge  } = (0,external_react_.useState)("");
    const { 0: pname , 1: setPname  } = (0,external_react_.useState)("");
    const { 0: pphone , 1: setPphone  } = (0,external_react_.useState)("");
    const { 0: selectedCourse , 1: setSelectedCourse  } = (0,external_react_.useState)("");
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: studentName , 1: setStudentName  } = (0,external_react_.useState)("");
    const { 0: studentEmail , 1: setStudentEmail  } = (0,external_react_.useState)("");
    const { 0: studentAge , 1: setStudentAge  } = (0,external_react_.useState)("");
    const { 0: studentParentName , 1: setStudentParentName  } = (0,external_react_.useState)("");
    const { 0: studentParentPhone , 1: setStudentParentPhone  } = (0,external_react_.useState)("");
    const { 0: studentCourseIn , 1: setStudentCourseIn  } = (0,external_react_.useState)("");
    const { 0: studentMessage , 1: setStudentMessage  } = (0,external_react_.useState)("");
    const { 0: fnameErr , 1: setFNameErr  } = (0,external_react_.useState)({});
    const { 0: emailErr , 1: setEmailErr  } = (0,external_react_.useState)({});
    const { 0: ageErr , 1: setAgeErr  } = (0,external_react_.useState)({});
    const { 0: pnameErr , 1: setPnameErr  } = (0,external_react_.useState)({});
    const { 0: pphoneErr , 1: setPphoneErr  } = (0,external_react_.useState)({});
    const { 0: selectedCourseErr , 1: setSelectedCourseErr  } = (0,external_react_.useState)({});
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: isEnrollmentLeadAdded , 1: setIsEnrollmentLeadAdded  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setIsEnrollmentLeadAdded(false);
    }, [
        isEnrollmentLeadAdded
    ]);
    const handleEnrollmentSubmit = (event)=>{
        event.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            external_axios_default().post(`https://educaretech-dashboard-default-rtdb.firebaseio.com/schoolenrollmentLead.json`, {
                studentName: fname,
                studentEmail: email,
                studentAge: age,
                studentParentName: pname,
                studentParentPhone: pphone,
                studentCourseIn: selectedCourse,
                studentMessage: message,
                studentTimestamp: new Date().toUTCString()
            }).then((response)=>{
                router.push("/thankyou");
                setIsEnrollmentLeadAdded(true);
            }).catch((error)=>console.log("Error" + error));
            // event.target.reset();
            setStudentName("");
            setStudentEmail("");
            setStudentAge("");
            setStudentParentName("");
            setStudentParentPhone("");
            setStudentCourseIn("");
            setStudentMessage("");
        }
    };
    const formValidation = ()=>{
        const fnameErr = {};
        const emailErr = {};
        const ageErr = {};
        const pnameErr = {};
        const pphoneErr = {};
        const selectedCourseErr = {};
        let isValid = true;
        if (fname.length == "") {
            fnameErr.fnameRequired = "Please enter first name";
            isValid = false;
        } else if (fname.trim().length <= 3 || fname.trim().length >= 30) {
            fnameErr.fnameShort = "Name lenght must be between 3 and 30";
            isValid = false;
        } else if (!isNaN(fname)) {
            fnameErr.fnameChar = "only character is allowed";
            isValid = false;
        }
        if (email.length == "") {
            emailErr.emailRequired = "Please enter Email Address";
            isValid = false;
        } else if (email.indexOf("@") <= 0) {
            emailErr.emailValid = "@ is at indvalid position";
            isValid = false;
        } else if (email.charAt(email.length - 4) != "." && email.charAt(email.length - 3) != ".") {
            emailErr.emailbadFormat = "Email Address is badly formated";
            isValid = false;
        }
        if (age.length == "") {
            ageErr.ageRequired = "Please enter age";
            isValid = false;
        } else if (isNaN(age)) {
            ageErr.ageNum = "age number should be in digits";
            isValid = false;
        } else if (age.trim().length < 1 || age.trim().length > 2) {
            ageErr.ageDigit = "age must be between 5 and 18";
            isValid = false;
        }
        if (pname.length == "") {
            pnameErr.pnameRequired = "Please enter Parent name";
            isValid = false;
        } else if (pname.trim().length <= 3 || pname.trim().length >= 30) {
            pnameErr.pnameShort = "Parent Name lenght must be between 3 and 30";
            isValid = false;
        } else if (!isNaN(pname)) {
            pnameErr.pnameChar = "only character is allowed";
            isValid = false;
        }
        if (pphone.length == "") {
            pphoneErr.pphoneRequired = "Please enter Parent Phone Number";
            isValid = false;
        } else if (isNaN(pphone)) {
            pphoneErr.pphoneNum = "Phone number should be in digits";
            isValid = false;
        } else if (pphone.length != 10) {
            pphoneErr.pphoneDigit = "Phone number should be in 10 digits not more or less than 10";
            isValid = false;
        }
        if (selectedCourse == "") {
            selectedCourseErr.selectedCourseRequired = "Please Select the Class";
            isValid = false;
        }
        setFNameErr(fnameErr);
        setEmailErr(emailErr);
        setAgeErr(ageErr);
        setPnameErr(pnameErr);
        setPphoneErr(pphoneErr);
        setSelectedCourseErr(selectedCourseErr);
        return isValid;
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                className: "justify-content-md-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                    lg: "12",
                    md: 6,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-primary",
                                    children: "Enrollment Form"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "javascript:void(0)",
                                    class: "closebtn",
                                    onClick: closeNav,
                                    children: "\xd7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Please enter the following details to initiate your application in ICSE coaching program with Heuristic Academy"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            onSubmit: handleEnrollmentSubmit,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Student Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            type: "text",
                                            name: "name",
                                            id: "name",
                                            value: fname,
                                            onChange: (event)=>setFName(event.target.value),
                                            placeholder: "Enter Your Name"
                                        }),
                                        Object.keys(fnameErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: fnameErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Student Age"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            type: "number",
                                            name: "phone_no",
                                            id: "phone_no",
                                            value: age,
                                            onChange: (event)=>setAge(event.target.value),
                                            placeholder: "Enter Your Age"
                                        }),
                                        Object.keys(ageErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: ageErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Parent / guardian  Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            type: "text",
                                            name: "parent_name",
                                            id: "parent_name",
                                            value: pname,
                                            onChange: (event)=>setPname(event.target.value),
                                            placeholder: "Enter Your parent Name"
                                        }),
                                        Object.keys(pnameErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: pnameErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Parent Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            type: "text",
                                            name: "email",
                                            id: "email",
                                            value: email,
                                            onChange: (event)=>setEmail(event.target.value),
                                            placeholder: "Enter Your Email"
                                        }),
                                        Object.keys(emailErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: emailErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Parents / guardian contact number"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            type: "number",
                                            name: "parent_contact",
                                            id: "parent_contact",
                                            value: pphone,
                                            onChange: (event)=>setPphone(event.target.value),
                                            placeholder: "Enter Your Parent Phone No"
                                        }),
                                        Object.keys(pphoneErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: pphoneErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Select Class your are looking for"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Select, {
                                            value: selectedCourse,
                                            onChange: (event)=>setSelectedCourse(event.target.value),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "",
                                                    children: "Select Class"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "5th Std",
                                                    children: "5th Std"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "6th Std",
                                                    children: "6th Std"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "7th Std",
                                                    children: "7th Std"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "8th Std",
                                                    children: "8th Std"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "9th Std",
                                                    children: "9th Std"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "9th Std",
                                                    children: "10th Std"
                                                })
                                            ]
                                        }),
                                        Object.keys(selectedCourseErr).map((key)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                style: {
                                                    color: "red"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: selectedCourseErr[key]
                                                })
                                            });
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Form_default()).Group, {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Label, {
                                            children: "Any Queries ?"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Form_default()).Control, {
                                            as: "textarea",
                                            rows: 3,
                                            name: "message",
                                            id: "message",
                                            value: message,
                                            onChange: (event)=>setMessage(event.target.value),
                                            placeholder: "Message"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "btn btn-sm btn-primary",
                                    children: "Submit"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const SchoolEnrollmentForm_SchoolEnrollmentForm = (SchoolEnrollmentForm);

;// CONCATENATED MODULE: ./pages/index.js















// const index = () => {
function index() {
    /* Set the width of the side navigation to 300px and the left margin of the page content to 250px */ function openNav() {
        console.log("aaaaaaa");
        document.getElementById("mySidenav").style.width = "380px";
    }
    function openSchNav() {
        console.log("aaaaaaa");
        document.getElementById("mySchSidenav").style.width = "380px";
    }
    const { 0: fname , 1: setFName  } = (0,external_react_.useState)("");
    const { 0: lname , 1: setLName  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)("");
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: contactFirstName , 1: setContactFirstName  } = (0,external_react_.useState)("");
    const { 0: contactLastName , 1: setContactLastName  } = (0,external_react_.useState)("");
    const { 0: contactEmail , 1: setContactEmail  } = (0,external_react_.useState)("");
    const { 0: contactPhone , 1: setContactPhone  } = (0,external_react_.useState)("");
    const { 0: contactMessage , 1: setContactMessage  } = (0,external_react_.useState)("");
    const { 0: fnameErr , 1: setFNameErr  } = (0,external_react_.useState)({});
    const { 0: lnameErr , 1: setLNameErr  } = (0,external_react_.useState)({});
    const { 0: emailErr , 1: setEmailErr  } = (0,external_react_.useState)({});
    const { 0: phoneErr , 1: setPhoneErr  } = (0,external_react_.useState)({});
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: isContactLeadAdded , 1: setIsContactLeadAdded  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setIsContactLeadAdded(false);
    }, [
        isContactLeadAdded
    ]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            external_axios_default().post(`https://educaretech-dashboard-default-rtdb.firebaseio.com/contactLead.json`, {
                contactFirstName: fname,
                contactLastName: lname,
                contactEmail: email,
                contactPhone: phone,
                contactMessage: message,
                contactTimestamp: new Date().toUTCString()
            }).then((response)=>{
                router.push("/thankyou");
                setIsContactLeadAdded(true);
            }).catch((error)=>console.log("Error" + error));
            // event.target.reset();
            setContactFirstName("");
            setContactLastName("");
            setContactEmail("");
            setContactPhone("");
            setContactMessage("");
        }
    };
    const formValidation = ()=>{
        const fnameErr = {};
        const lnameErr = {};
        const emailErr = {};
        const phoneErr = {};
        let isValid = true;
        if (fname.length == "") {
            fnameErr.fnameRequired = "Please enter first name";
            isValid = false;
        } else if (fname.trim().length <= 3 || fname.trim().length >= 30) {
            fnameErr.fnameShort = "Name lenght must be between 3 and 30";
            isValid = false;
        } else if (!isNaN(fname)) {
            fnameErr.fnameChar = "only character is allowed";
            isValid = false;
        }
        if (lname.length == "") {
            lnameErr.lnameRequired = "Please enter Parent name";
            isValid = false;
        } else if (lname.trim().length <= 3 || lname.trim().length >= 30) {
            lnameErr.lnameShort = "Parent Name lenght must be between 3 and 30";
            isValid = false;
        } else if (!isNaN(lname)) {
            lnameErr.lnameChar = "only character is allowed";
            isValid = false;
        }
        if (email.length == "") {
            emailErr.emailRequired = "Please enter Email Address";
            isValid = false;
        } else if (email.indexOf("@") <= 0) {
            emailErr.emailValid = "@ is at indvalid position";
            isValid = false;
        } else if (email.charAt(email.length - 4) != "." && email.charAt(email.length - 3) != ".") {
            emailErr.emailbadFormat = "Email Address is badly formated";
            isValid = false;
        }
        if (phone.length == "") {
            phoneErr.phoneRequired = "Please enter Phone Number";
            isValid = false;
        } else if (isNaN(phone)) {
            phoneErr.phoneNum = "Phone number should be in digits";
            isValid = false;
        } else if (phone.length != 10) {
            phoneErr.phoneDigit = "Phone number should be in 10 digits not more or less than 10";
            isValid = false;
        }
        setFNameErr(fnameErr);
        setLNameErr(lnameErr);
        setEmailErr(emailErr);
        setPhoneErr(phoneErr);
        return isValid;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "home-banner-area",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    fluid: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Carousel_default()), {
                            className: "carousel-fade",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Carousel_default()).Item, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "banner-hero-img",
                                            src: "/assets/banner1.jpg",
                                            alt: "First slide"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "banner-tarea",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                    className: "banner-text",
                                                    children: [
                                                        "Advanced Career Track in I.T ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        "Development courses."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: openNav,
                                                    class: "btn-banner",
                                                    children: "Enroll Now"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Carousel_default()).Item, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "banner-hero-img",
                                            src: "assets/banner2.jpg",
                                            alt: "Second slide"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "banner-tarea",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "banner-text",
                                                    children: "100% Job Oriented Courses"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: openNav,
                                                    class: "btn-banner",
                                                    children: "Enroll Now"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Carousel_default()).Item, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "banner-hero-img",
                                            src: "assets/banner3.jpg",
                                            alt: "Third slide"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "banner-tarea",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                    className: "banner-text",
                                                    children: [
                                                        "6 Month Designed Curriculum ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " with Offline Hands-on Training"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: openNav,
                                                    class: "btn-banner",
                                                    children: "Enroll Now"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Carousel_default()).Item, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "banner-hero-img",
                                            src: "assets/banner4.jpg",
                                            alt: "Third slide"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "banner-tarea",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                    className: "banner-text",
                                                    children: [
                                                        "Zero to Hero Training, ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " Get Job Ready"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: openNav,
                                                    class: "btn-banner",
                                                    children: "Enroll Now"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "about py-4",
                id: "about",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "justify-content-md-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "center-head mb-4",
                                children: "About Us"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                lg: "7",
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        style: {
                                            fontSize: "1.4em"
                                        },
                                        className: "mb-3",
                                        children: "Accelerate your career with job-ready digital skills"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "We at Heuristic Academy are a Group of Young Minds,Providing an Experience based Practical Learning called the Method of ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: "\u2018HEURISTIC\u2019"
                                            }),
                                            ".with Our Patent Pending, Digital Learning Platform enable a perfect blend of high-end academics and rich industry practitioners experience Which helps students to get the most out of the Program, and Able to Skillup and grab their Dream Jobs."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Here we provide you with a structured course that will teach you all you need to know to become a Developer / Designer / Tester / Data scientist. Work through each section, learning new skills (or improving existing ones) as you go along. Each section includes exercises and assessments to test your understanding before you move forward."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        onClick: openNav,
                                        class: "btn btn-outline-primary my-3",
                                        children: "Enroll Now"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "5",
                                md: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/assets/about-us.jpg",
                                    width: 600,
                                    height: 400,
                                    layout: "responsive",
                                    className: "img-fluid",
                                    alt: "main-banner"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "school py-4",
                id: "school",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "justify-content-md-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "center-head mb-4",
                                children: "Admisson open for ICSE"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "5",
                                md: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/assets/childrens.jpg",
                                    width: 600,
                                    height: 400,
                                    layout: "responsive",
                                    className: "img-fluid",
                                    alt: "main-banner"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                lg: "7",
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        style: {
                                            fontSize: "1.4em"
                                        },
                                        className: "my-3",
                                        children: "ICSE Grade 5 -10"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Heuristic Academy is here to help you get the most out of your child. Along with learning, the student has to deal with exam pressure, peer pressure, and, most importantly, time management."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "We are here to provide them with the right kind of care and the right amount of attention to cope with the above issues and excel in their educational career."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        style: {
                                            fontSize: "1.4em"
                                        },
                                        className: "mb-3",
                                        children: "Our Speciality :"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Mathematics and Science"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: "Training for KVPY & Olympiad"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        onClick: openSchNav,
                                        class: "btn btn-outline-primary",
                                        children: "Enroll Now"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "about py-4",
                id: "activities",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "justify-content-md-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "center-head mb-4",
                                children: "Key Highlights of our ICSE Coaching"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                lg: "7",
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Heuristic Academy provide you"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Complete syllabus clearance with conceptual knowledge. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Teach Proven Tips, Tricks, and Learning Techniques. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Experienced and dedicated faculty. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Digital Learning. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Weekly/Monthly Test Series. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Report-driven analysis."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- One-on-One Counseling."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Focus on the weaker subjects."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "5",
                                md: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/assets/study1.jpg",
                                    width: 600,
                                    height: 400,
                                    layout: "responsive",
                                    alt: "main-banner"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "choose-course",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "justify-content-md-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "9",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "center-head text-white mt-2",
                                    children: "Choose the right coaching for you children."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "3",
                                className: "btn-mobile-choose",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: openSchNav,
                                    class: "btn btn-choose mt-2",
                                    children: "Enroll Now"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Courses_Courses, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "about py-4",
                id: "activities",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "justify-content-md-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "center-head mb-4",
                                children: "Key Highlights of our Course"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                lg: "7",
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Heuristic Academy provide you"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- 6 Months Intense Traning "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Offline E-Learning With Industrial Professionals "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Hands On Experience On 10 Live Projects "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Communication Skills Development "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Interview Preparations With Aptitude & Mock Interviews "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- Campus Activities (Project Competitions & Tech Events)"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-2",
                                                children: "- 100 % Job Placement Assistance"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "5",
                                md: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/assets/key-fe.jpg",
                                    width: 600,
                                    height: 450,
                                    layout: "responsive",
                                    alt: "main-banner"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "certification py-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "justify-content-md-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "center-head pb-3",
                                children: "Our Certification"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "5",
                                md: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/assets/certificate.jpg",
                                    width: 600,
                                    height: 450,
                                    layout: "responsive",
                                    className: "img-fluid",
                                    alt: "main-banner"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                lg: "7",
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "mid-head pb-5 pt-4",
                                        children: "Become a Certified Developer, perfect your coding skills and accelerate your career with Heuristic Academy to get your dream job."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Talk about your Developer certification on LinkedIn, Twitter, Facebook, boost your resume, or frame it - tell your friends and colleagues about it."
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "choose-course",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "justify-content-md-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "9",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "center-head text-white mt-2",
                                    children: "Choose the right Development course for you."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                lg: "3",
                                className: "btn-mobile-choose",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    onClick: openNav,
                                    class: "btn btn-choose mt-2",
                                    children: "Enroll Now"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Testimonials_Testimonials, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "py-5",
                id: "contact",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "center-head pb-3",
                            children: "Contact Us"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                    lg: 6,
                                    className: "mt-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        onSubmit: handleSubmit,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                        lg: 6,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                    children: "Your firstname *"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                    type: "text",
                                                                    id: "firstname",
                                                                    name: "firstname",
                                                                    value: fname,
                                                                    onChange: (event)=>setFName(event.target.value),
                                                                    placeholder: "Enter your firstname"
                                                                }),
                                                                Object.keys(fnameErr).map((key)=>{
                                                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            color: "red"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: fnameErr[key]
                                                                        })
                                                                    });
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                                        lg: 6,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                                    children: "Your lastname *"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                                    type: "text",
                                                                    id: "lastname",
                                                                    name: "lastname",
                                                                    value: lname,
                                                                    onChange: (event)=>setLName(event.target.value),
                                                                    placeholder: "Enter your lastname"
                                                                }),
                                                                Object.keys(lnameErr).map((key)=>{
                                                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            color: "red"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: lnameErr[key]
                                                                        })
                                                                    });
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                        children: "Your phone *"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                        type: "number",
                                                        id: "mobile",
                                                        name: "mobile",
                                                        value: phone,
                                                        onChange: (event)=>setPhone(event.target.value),
                                                        placeholder: "Enter your phone no"
                                                    }),
                                                    Object.keys(phoneErr).map((key)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            style: {
                                                                color: "red"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: phoneErr[key]
                                                            })
                                                        });
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                        children: "Your email *"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                        id: "email",
                                                        type: "email",
                                                        name: "email",
                                                        value: email,
                                                        onChange: (event)=>setEmail(event.target.value),
                                                        placeholder: "Enter your email"
                                                    }),
                                                    Object.keys(emailErr).map((key)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            style: {
                                                                color: "red"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: emailErr[key]
                                                            })
                                                        });
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                                                className: "mb-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                                        children: "Your message for us"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                                        as: "textarea",
                                                        rows: 3,
                                                        name: "message",
                                                        id: "message",
                                                        value: message,
                                                        onChange: (event)=>setMessage(event.target.value),
                                                        placeholder: "Enter your Message"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Group, {
                                                className: "mb-3",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn btn-outline-primary w-100",
                                                    type: "submit",
                                                    children: "Submit"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                                    lg: 6,
                                    className: "mt-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "icon mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    class: "fas fa-map-marker-alt"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "Our Academy"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "1,United Apartments, Opp Richardson & Crudas Ltd, Nagpada, Mumbai - 400008"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "icon mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    class: "far fa-clock"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: "Open Office Hours"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Mon-Sun: 10am \u2013 9pm"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "icon mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    class: "fa fa-phone"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: " Get in Touch"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:+917039794283",
                                                children: "+91 7039794283"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:+919987056292",
                                                children: "+91 9987056292"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "icon mb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    class: "fa fa-envelope"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                    children: " Mail Us At"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://gmail.com",
                                                target: "blank",
                                                children: "Info@heuristicacademy.in"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            class: "d-flex list-unstyled ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://api.whatsapp.com/send?phone=+917039794283",
                                                        target: "blank",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "text-facebook fab fa-whatsapp",
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.instagram.com/heuristic_academy/",
                                                        target: "blank",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "text-insta fab fa-instagram",
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://g.page/zayn-academy?share",
                                                        target: "blank",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            class: "text-map fas fa-map-marker-alt",
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "mySidenav",
                class: "sidenav bg-white border-right",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "px-3 py-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(EnrollmentForm_EnrollmentForm, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "mySchSidenav",
                class: "sidenav bg-white border-right",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    class: "px-3 py-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SchoolEnrollmentForm_SchoolEnrollmentForm, {})
                })
            })
        ]
    });
}
/* harmony default export */ const pages = (index);


/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,910,675,152], () => (__webpack_exec__(6837)));
module.exports = __webpack_exports__;

})();