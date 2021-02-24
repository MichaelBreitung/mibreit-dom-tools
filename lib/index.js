/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
export function documentReady(callback) {
    window.addEventListener('load', callback);
}
export function getRootFontSize() {
    return parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));
}
export function createElement(tagName) {
    return document.createElement(tagName);
}
export function removeElement(element) {
    element.remove();
}
export function prependChildElement(element, parent) {
    parent.prepend(element);
}
export function appendChildElement(element, parent) {
    parent.append(element);
}
export function prependBeforeChild(element, child) {
    child.parentElement.insertBefore(element, child);
}
export function getChildNodes(element) {
    var nodes = element.childNodes;
    var nodesArray = new Array();
    for (var i = 0; i < nodes.length; ++i) {
        nodesArray.push(nodes[i]);
    }
    return nodesArray;
}
export function setInnerHtml(parent, inner) {
    parent.innerHTML = inner;
}
export function wrapElements(elements, wrapper) {
    elements[0].parentNode.insertBefore(wrapper, elements[0]);
    elements.forEach(function (element) {
        wrapper.appendChild(element);
    });
}
export function unwrapElements(wrapper) {
    var elements = wrapper.childNodes;
    elements.forEach(function (element) {
        wrapper.parentNode.insertBefore(element, wrapper);
    });
}
export function getParentElement(element) {
    return element.parentElement;
}
export function getElementDimension(element) {
    return {
        width: element.clientWidth,
        height: element.clientHeight,
    };
}
export function isElementWithinWindow(element) {
    var elementRect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    return elementRect.top + elementRect.height > 0 && elementRect.top < windowHeight;
}
export function getElementPosition(element) {
    var rect = element.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { y: rect.top + scrollTop, x: rect.left + scrollLeft };
}
export function getCssClasses(element) {
    return getAttribute(element, 'class');
}
export function addCssClass(element, cssClass) {
    if (!element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
    }
}
export function removeCssClass(element, cssClass) {
    if (element.classList.contains(cssClass)) {
        element.classList.remove(cssClass);
    }
}
export function overwriteCssClasses(element, cssClasses) {
    element.setAttribute('class', cssClasses);
}
export function removeAllCssClasses(element) {
    if (element.hasAttribute('class')) {
        element.removeAttribute('class');
    }
}
export function getCssStyle(element, styleName) {
    return element.style.getPropertyValue(styleName);
}
export function getCssStyles(element) {
    return element.style.cssText;
}
export function getComputedCssStyle(element, styleName) {
    return window.getComputedStyle(element).getPropertyValue(styleName);
}
export function addCssStyle(element, styleName, styleProperty) {
    element.style.setProperty(styleName, styleProperty);
}
export function removeCssStyle(element, styleName) {
    element.style.removeProperty(styleName);
    if (element.style.length === 0) {
        element.removeAttribute('style');
    }
}
export function overwriteCssStyles(element, styles) {
    if (styles !== null) {
        element.style.cssText = styles;
    }
    else {
        element.removeAttribute('style');
    }
}
export function hasAttribute(element, attribute) {
    return element.hasAttribute(attribute);
}
export function getAttribute(element, attribute) {
    if (!element.hasAttribute(attribute)) {
        return null;
    }
    else {
        return element.getAttribute(attribute);
    }
}
export function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
}
export function removeAttribute(element, attribute) {
    element.removeAttribute(attribute);
}
export function addClickEventListener(element, callback) {
    element.addEventListener('click', callback);
}
export function addKeyEventListener(callback) {
    document.addEventListener('keydown', callback);
}
export function addScrollEventListener(callback) {
    document.addEventListener('scroll', callback);
}
export function addResizeEventListener(callback) {
    window.addEventListener('resize', callback);
}
export function addEventListener(element, event, callback) {
    element.addEventListener(event, callback);
}
export function disableContextMenu(element) {
    element.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
}
export function disableDragging(element) {
    element.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
}
export function getElement(selector) {
    return document.querySelector(selector);
}
export function getElements(selector) {
    return document.querySelectorAll(selector);
}
export function getKeyFromEvent(event) {
    return event.key;
}
export var DomTools = {
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
    getCssStyles: getCssStyles,
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
