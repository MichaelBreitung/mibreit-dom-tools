(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 607:
/***/ ((__unused_webpack_module, exports) => {


/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomTools = void 0;
function documentReady(callback) {
    window.addEventListener('load', callback);
}
function getRootFontSize() {
    return parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));
}
function createElement(tagName) {
    return document.createElement(tagName);
}
function prependChildElement(element, parent) {
    parent.prepend(element);
}
function appendChildElement(element, parent) {
    parent.append(element);
}
function removeChildElement(element, parent) {
    if (parent === void 0) { parent = null; }
    if (parent) {
        parent.removeChild(element);
    }
    else {
        getParentElement(element).removeChild(element);
    }
}
function prependBeforeChild(element, child) {
    child.parentElement.insertBefore(element, child);
}
function getChildNodes(element) {
    var nodes = element.childNodes;
    var nodesArray = new Array();
    for (var i = 0; i < nodes.length; ++i) {
        nodesArray.push(nodes[i]);
    }
    return nodesArray;
}
function setInnerHtml(parent, inner) {
    parent.innerHTML = inner;
}
function wrapElements(elements, wrapper) {
    elements[0].parentNode.insertBefore(wrapper, elements[0]);
    elements.forEach(function (element) {
        wrapper.appendChild(element);
    });
}
function unwrapElements(wrapper) {
    var elements = wrapper.childNodes;
    elements.forEach(function (element) {
        wrapper.parentNode.insertBefore(element, wrapper);
    });
}
function getParentElement(element) {
    return element.parentElement;
}
function getElementDimension(element) {
    return {
        width: element.clientWidth,
        height: element.clientHeight,
    };
}
function isElementWithinWindow(element) {
    var elementRect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    return elementRect.top + elementRect.height > 0 && elementRect.top < windowHeight;
}
function getElementPosition(element) {
    var rect = element.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { y: rect.top + scrollTop, x: rect.left + scrollLeft };
}
function getCssClass(element) {
    return element.getAttribute('class');
}
function applyCssClass(element, cssClass) {
    if (cssClass !== null) {
        element.setAttribute('class', cssClass);
    }
    else {
        element.removeAttribute('class');
    }
}
function getCssStyle(element, styleName) {
    return element.style.getPropertyValue(styleName);
}
function applyCssStyle(element, styleName, styleProperty) {
    if (styleProperty !== null) {
        element.style.setProperty(styleName, styleProperty);
    }
    else {
        element.style.removeProperty(styleName);
        if (element.style.length === 0) {
            element.removeAttribute('style');
        }
    }
}
function applyCssStyles(element, styles) {
    if (styles !== null) {
        element.style.cssText = styles;
    }
    else {
        element.removeAttribute('style');
    }
}
function getAttribute(element, attribute) {
    return element.getAttribute(attribute);
}
function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
}
function removeAttribute(element, attribute) {
    element.removeAttribute(attribute);
}
function addClickEventListener(element, callback) {
    element.addEventListener('click', callback);
}
function addKeyEventListener(callback) {
    document.addEventListener('keydown', callback);
}
;
function addScrollEventListener(callback) {
    document.addEventListener('scroll', callback);
}
function addResizeEventListener(callback) {
    window.addEventListener('resize', callback);
}
function addEventListener(element, event, callback) {
    element.addEventListener(event, callback);
}
function disableContextMenu(element) {
    element.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
}
function disableDragging(element) {
    element.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
}
function getElement(selector) {
    return document.querySelector(selector);
}
function getElements(selector) {
    return document.querySelectorAll(selector);
}
function getKeyFromEvent(event) {
    return event.key;
}
exports.DomTools = {
    documentReady: documentReady,
    getRootFontSize: getRootFontSize,
    createElement: createElement,
    prependChildElement: prependChildElement,
    appendChildElement: appendChildElement,
    removeChildElement: removeChildElement,
    prependBeforeChild: prependBeforeChild,
    getChildNodes: getChildNodes,
    setInnerHtml: setInnerHtml,
    wrapElements: wrapElements,
    unwrapElements: unwrapElements,
    getParentElement: getParentElement,
    getElementDimension: getElementDimension,
    getElementPosition: getElementPosition,
    isElementWithinWindow: isElementWithinWindow,
    getCssClass: getCssClass,
    applyCssClass: applyCssClass,
    getCssStyle: getCssStyle,
    applyCssStyle: applyCssStyle,
    applyCssStyles: applyCssStyles,
    getAttribute: getAttribute,
    setAttribute: setAttribute,
    removeAttribute: removeAttribute,
    addClickEventListener: addClickEventListener,
    addKeyEventListener: addKeyEventListener,
    addScrollEventListener: addScrollEventListener,
    addResizeEventListener: addResizeEventListener,
    addEventListener: addEventListener,
    disableContextMenu: disableContextMenu,
    disableDragging: disableDragging,
    getElement: getElement,
    getElements: getElements,
    getKeyFromEvent: getKeyFromEvent
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(607);
/******/ })()

));