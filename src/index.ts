/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

export type TElementDimention = { width: number; height: number };

function documentReady(callback: () => void) {
  window.addEventListener('load', callback);
}

function getRootFontSize(): number {
  return parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));
}

function createElement(tagName: string): HTMLElement {
  return document.createElement(tagName);
}

function removeElement(element: HTMLElement) {
  element.parentElement.removeChild(element);
}

function prependChildElement(element: HTMLElement, parent: HTMLElement) {
  parent.prepend(element);
}

function appendChildElement(element: HTMLElement, parent: HTMLElement) {
  parent.append(element);
}

function prependBeforeChild(element: HTMLElement, child: HTMLElement) {
  child.parentElement.insertBefore(element, child);
}

function getChildNodes(element: HTMLElement): Array<Node> {
  const nodes: NodeList = element.childNodes;
  const nodesArray: Array<Node> = new Array();
  for (let i = 0; i < nodes.length; ++i) {
    nodesArray.push(nodes[i]);
  }
  return nodesArray;
}

function setInnerHtml(parent: HTMLElement, inner: string) {
  parent.innerHTML = inner;
}

function wrapElements(elements: Array<Node>, wrapper: HTMLElement) {
  elements[0].parentNode.insertBefore(wrapper, elements[0]);
  elements.forEach((element: HTMLElement) => {
    wrapper.appendChild(element);
  });
}

function unwrapElements(wrapper: HTMLElement) {
  const elements = wrapper.childNodes;
  elements.forEach((element: HTMLElement) => {
    wrapper.parentNode.insertBefore(element, wrapper);
  });
}

function getParentElement(element: HTMLElement): HTMLElement {
  return element.parentElement;
}

function getElementDimension(element: HTMLElement): TElementDimention {
  return {
    width: element.clientWidth,
    height: element.clientHeight,
  };
}

function isElementWithinWindow(element: HTMLElement) {
  const elementRect: DOMRect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  return elementRect.top + elementRect.height > 0 && elementRect.top < windowHeight;
}

function getElementPosition(element: HTMLElement): { x: number; y: number } {
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { y: rect.top + scrollTop, x: rect.left + scrollLeft };
}

function getCssClasses(element: HTMLElement): string | null {
  return getAttribute(element, 'class');
}

function addCssClass(element: HTMLElement, cssClass: string) {
  if (!element.classList.contains(cssClass)) {
    element.classList.add(cssClass);
  }
}

function removeCssClass(element: HTMLElement, cssClass: string) {
  if (element.classList.contains(cssClass)) {
    element.classList.remove(cssClass);
  }
}

function overwriteCssClasses(element: HTMLElement, cssClasses: string) {
  element.setAttribute('class', cssClasses);
}

function removeAllCssClasses(element: HTMLElement) {
  if (element.hasAttribute('class')) {
    element.removeAttribute('class');
  }
}

function getCssStyle(element: HTMLElement, styleName: string): string {
  return element.style.getPropertyValue(styleName);
}

function getComputedCssStyle(element: HTMLElement, styleName: string): string {
  return window.getComputedStyle(element).getPropertyValue(styleName);
}

function addCssStyle(element: HTMLElement, styleName: string, styleProperty: string) {
  element.style.setProperty(styleName, styleProperty);
}

function removeCssStyle(element: HTMLElement, styleName: string) {
  element.style.removeProperty(styleName);
  if (element.style.length === 0) {
    element.removeAttribute('style');
  }
}

function overwriteCssStyles(element: HTMLElement, styles: string | null) {
  if (styles !== null) {
    element.style.cssText = styles;
  } else {
    element.removeAttribute('style');
  }
}

function hasAttribute(element: HTMLElement, attribute: string): boolean {
  return element.hasAttribute(attribute);
}

function getAttribute(element: HTMLElement, attribute: string): string | null {
  if (!element.hasAttribute(attribute)) {
    return null;
  } else {
    return element.getAttribute(attribute);
  }
}

function setAttribute(element: HTMLElement, attribute: string, value: string) {
  element.setAttribute(attribute, value);
}

function removeAttribute(element: HTMLElement, attribute: string) {
  element.removeAttribute(attribute);
}

function addClickEventListener(element: HTMLElement, callback: (event?: MouseEvent) => void) {
  element.addEventListener('click', callback);
}

function addKeyEventListener(callback: (event: KeyboardEvent) => void) {
  document.addEventListener('keydown', callback);
}

function addScrollEventListener(callback: (event: UIEvent) => void) {
  document.addEventListener('scroll', callback);
}

function addResizeEventListener(callback: (event: UIEvent) => void) {
  window.addEventListener('resize', callback);
}

function addEventListener(element: HTMLElement, event: string, callback: (event: any) => void) {
  element.addEventListener(event, callback);
}

function disableContextMenu(element: HTMLElement) {
  element.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
}

function disableDragging(element: HTMLElement) {
  element.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
}

function getElement(selector: string): HTMLElement | null {
  return document.querySelector(selector);
}

function getElements(selector: string): NodeListOf<HTMLElement> {
  return document.querySelectorAll(selector);
}

function getKeyFromEvent(event: KeyboardEvent): string {
  return event.key;
}

export const DomTools = {
  documentReady,
  getRootFontSize,
  createElement,
  removeElement,
  prependChildElement,
  appendChildElement,
  prependBeforeChild,
  getChildNodes,
  setInnerHtml,
  wrapElements,
  unwrapElements,
  getParentElement,
  getElementDimension,
  getElementPosition,
  isElementWithinWindow,
  getCssClasses,
  addCssClass,
  removeCssClass,
  removeAllCssClasses,
  overwriteCssClasses,
  getCssStyle,
  getComputedCssStyle,
  addCssStyle,
  removeCssStyle,
  overwriteCssStyles,
  hasAttribute,
  getAttribute,
  setAttribute,
  removeAttribute,
  addClickEventListener,
  addKeyEventListener,
  addScrollEventListener,
  addResizeEventListener,
  addEventListener,
  disableContextMenu,
  disableDragging,
  getElement,
  getElements,
  getKeyFromEvent,
};
