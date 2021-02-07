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
exports.DomTools = exports.getKeyFromEvent = exports.getElements = exports.getElement = exports.disableDragging = exports.disableContextMenu = exports.addEventListener = exports.addResizeEventListener = exports.addScrollEventListener = exports.addKeyEventListener = exports.addClickEventListener = exports.removeAttribute = exports.setAttribute = exports.getAttribute = exports.hasAttribute = exports.overwriteCssStyles = exports.removeCssStyle = exports.addCssStyle = exports.getComputedCssStyle = exports.getCssStyle = exports.removeAllCssClasses = exports.overwriteCssClasses = exports.removeCssClass = exports.addCssClass = exports.getCssClasses = exports.getElementPosition = exports.isElementWithinWindow = exports.getElementDimension = exports.getParentElement = exports.unwrapElements = exports.wrapElements = exports.setInnerHtml = exports.getChildNodes = exports.prependBeforeChild = exports.appendChildElement = exports.prependChildElement = exports.removeElement = exports.createElement = exports.getRootFontSize = exports.documentReady = void 0;
function documentReady(callback) {
    window.addEventListener('load', callback);
}
exports.documentReady = documentReady;
function getRootFontSize() {
    return parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));
}
exports.getRootFontSize = getRootFontSize;
function createElement(tagName) {
    return document.createElement(tagName);
}
exports.createElement = createElement;
function removeElement(element) {
    element.remove();
}
exports.removeElement = removeElement;
function prependChildElement(element, parent) {
    parent.prepend(element);
}
exports.prependChildElement = prependChildElement;
function appendChildElement(element, parent) {
    parent.append(element);
}
exports.appendChildElement = appendChildElement;
function prependBeforeChild(element, child) {
    child.parentElement.insertBefore(element, child);
}
exports.prependBeforeChild = prependBeforeChild;
function getChildNodes(element) {
    var nodes = element.childNodes;
    var nodesArray = new Array();
    for (var i = 0; i < nodes.length; ++i) {
        nodesArray.push(nodes[i]);
    }
    return nodesArray;
}
exports.getChildNodes = getChildNodes;
function setInnerHtml(parent, inner) {
    parent.innerHTML = inner;
}
exports.setInnerHtml = setInnerHtml;
function wrapElements(elements, wrapper) {
    elements[0].parentNode.insertBefore(wrapper, elements[0]);
    elements.forEach(function (element) {
        wrapper.appendChild(element);
    });
}
exports.wrapElements = wrapElements;
function unwrapElements(wrapper) {
    var elements = wrapper.childNodes;
    elements.forEach(function (element) {
        wrapper.parentNode.insertBefore(element, wrapper);
    });
}
exports.unwrapElements = unwrapElements;
function getParentElement(element) {
    return element.parentElement;
}
exports.getParentElement = getParentElement;
function getElementDimension(element) {
    return {
        width: element.clientWidth,
        height: element.clientHeight,
    };
}
exports.getElementDimension = getElementDimension;
function isElementWithinWindow(element) {
    var elementRect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    return elementRect.top + elementRect.height > 0 && elementRect.top < windowHeight;
}
exports.isElementWithinWindow = isElementWithinWindow;
function getElementPosition(element) {
    var rect = element.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { y: rect.top + scrollTop, x: rect.left + scrollLeft };
}
exports.getElementPosition = getElementPosition;
function getCssClasses(element) {
    return getAttribute(element, 'class');
}
exports.getCssClasses = getCssClasses;
function addCssClass(element, cssClass) {
    if (!element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
    }
}
exports.addCssClass = addCssClass;
function removeCssClass(element, cssClass) {
    if (element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
    }
}
exports.removeCssClass = removeCssClass;
function overwriteCssClasses(element, cssClasses) {
    element.setAttribute('class', cssClasses);
}
exports.overwriteCssClasses = overwriteCssClasses;
function removeAllCssClasses(element) {
    if (element.hasAttribute('class')) {
        element.removeAttribute('class');
    }
}
exports.removeAllCssClasses = removeAllCssClasses;
function getCssStyle(element, styleName) {
    return element.style.getPropertyValue(styleName);
}
exports.getCssStyle = getCssStyle;
function getComputedCssStyle(element, styleName) {
    return window.getComputedStyle(element).getPropertyValue(styleName);
}
exports.getComputedCssStyle = getComputedCssStyle;
function addCssStyle(element, styleName, styleProperty) {
    element.style.setProperty(styleName, styleProperty);
}
exports.addCssStyle = addCssStyle;
function removeCssStyle(element, styleName) {
    element.style.removeProperty(styleName);
    if (element.style.length === 0) {
        element.removeAttribute('style');
    }
}
exports.removeCssStyle = removeCssStyle;
function overwriteCssStyles(element, styles) {
    if (styles !== null) {
        element.style.cssText = styles;
    }
    else {
        element.removeAttribute('style');
    }
}
exports.overwriteCssStyles = overwriteCssStyles;
function hasAttribute(element, attribute) {
    return element.hasAttribute(attribute);
}
exports.hasAttribute = hasAttribute;
function getAttribute(element, attribute) {
    if (!element.hasAttribute(attribute)) {
        return null;
    }
    else {
        return element.getAttribute(attribute);
    }
}
exports.getAttribute = getAttribute;
function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
}
exports.setAttribute = setAttribute;
function removeAttribute(element, attribute) {
    element.removeAttribute(attribute);
}
exports.removeAttribute = removeAttribute;
function addClickEventListener(element, callback) {
    element.addEventListener('click', callback);
}
exports.addClickEventListener = addClickEventListener;
function addKeyEventListener(callback) {
    document.addEventListener('keydown', callback);
}
exports.addKeyEventListener = addKeyEventListener;
function addScrollEventListener(callback) {
    document.addEventListener('scroll', callback);
}
exports.addScrollEventListener = addScrollEventListener;
function addResizeEventListener(callback) {
    window.addEventListener('resize', callback);
}
exports.addResizeEventListener = addResizeEventListener;
function addEventListener(element, event, callback) {
    element.addEventListener(event, callback);
}
exports.addEventListener = addEventListener;
function disableContextMenu(element) {
    element.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
}
exports.disableContextMenu = disableContextMenu;
function disableDragging(element) {
    element.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
}
exports.disableDragging = disableDragging;
function getElement(selector) {
    return document.querySelector(selector);
}
exports.getElement = getElement;
function getElements(selector) {
    return document.querySelectorAll(selector);
}
exports.getElements = getElements;
function getKeyFromEvent(event) {
    return event.key;
}
exports.getKeyFromEvent = getKeyFromEvent;
exports.DomTools = {
    documentReady: documentReady,
    getRootFontSize: getRootFontSize,
    createElement: createElement,
    removeElement: removeElement,
    prependChildElement: prependChildElement,
    appendChildElement: appendChildElement,
    prependBeforeChild: prependBeforeChild,
    getChildNodes: getChildNodes,
    setInnerHtml: setInnerHtml,
    wrapElements: wrapElements,
    unwrapElements: unwrapElements,
    getParentElement: getParentElement,
    getElementDimension: getElementDimension,
    getElementPosition: getElementPosition,
    isElementWithinWindow: isElementWithinWindow,
    getCssClasses: getCssClasses,
    addCssClass: addCssClass,
    removeCssClass: removeCssClass,
    removeAllCssClasses: removeAllCssClasses,
    overwriteCssClasses: overwriteCssClasses,
    getCssStyle: getCssStyle,
    getComputedCssStyle: getComputedCssStyle,
    addCssStyle: addCssStyle,
    removeCssStyle: removeCssStyle,
    overwriteCssStyles: overwriteCssStyles,
    hasAttribute: hasAttribute,
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
    getKeyFromEvent: getKeyFromEvent,
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