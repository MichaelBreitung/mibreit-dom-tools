/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */

export type TElementDimension = { width: number; height: number };

export function documentReady(callback: () => void) {
  window.addEventListener('load', callback);
}

export function getRootFontSize(): number {
  return parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));
}

export function createElement(tagName: string): HTMLElement {
  return document.createElement(tagName);
}

export function createInputElement(type: string): HTMLInputElement {
  const input: HTMLInputElement = document.createElement('input');
  input.type = type;
  return input;
}

export function cloneElement(element: Node) {
  return element.cloneNode();
}

export function removeElement(element: HTMLElement) {
  element.remove();
}

export function prependChildElement(element: HTMLElement, parent: HTMLElement) {
  parent.prepend(element);
}

export function appendChildElement(element: Node, parent: Node) {
  parent.appendChild(element);
}

export function prependBeforeChild(element: HTMLElement, child: HTMLElement) {
  if (child.parentElement) {
    child.parentElement.insertBefore(element, child);
  }
}

export function appendAfterChild(element: HTMLElement, child: HTMLElement) {
  if (child.parentElement) {
    child.parentElement.insertBefore(element, child.nextSibling);
  }
}

export function getChildNodes(element: HTMLElement): Array<Node> {
  const nodes: NodeList = element.childNodes;
  const nodesArray: Array<Node> = new Array();
  for (let i = 0; i < nodes.length; ++i) {
    nodesArray.push(nodes[i]);
  }
  return nodesArray;
}

export function setInnerHtml(parent: HTMLElement, inner: string) {
  parent.innerHTML = inner;
}

export function wrapElements(elements: Array<Node>, wrapper: HTMLElement) {
  if (elements[0].parentNode) {
    elements[0].parentNode.insertBefore(wrapper, elements[0]);
    elements.forEach((element: Node) => {
      wrapper.appendChild(element);
    });
  }
}

export function unwrapElements(wrapper: HTMLElement) {
  if (wrapper.parentNode) {
    const elements = wrapper.childNodes;
    elements.forEach((element: Node) => {
      wrapper.parentNode!.insertBefore(element, wrapper);
    });
  }
}

export function getParentElement(element: HTMLElement): HTMLElement | null {
  return element.parentElement;
}

export function getElementDimension(element: HTMLElement): TElementDimension {
  const elementRect: DOMRect = element.getBoundingClientRect();
  return {
    width: elementRect.width,
    height: elementRect.height,
  };
}

export function isElementWithinWindow(element: HTMLElement) {
  const elementRect: DOMRect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  return (
    elementRect.top + elementRect.height > 0 &&
    elementRect.top < windowHeight &&
    elementRect.left + elementRect.width > 0 &&
    elementRect.left < windowWidth
  );
}

export function getElementPosition(element: HTMLElement): { x: number; y: number } {
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { y: rect.top + scrollTop, x: rect.left + scrollLeft };
}

export function getCssClasses(element: HTMLElement): string | null {
  return getAttribute(element, 'class');
}

export function addCssClass(element: HTMLElement, cssClass: string) {
  if (!element.classList.contains(cssClass)) {
    element.classList.add(cssClass);
  }
}

export function removeCssClass(element: HTMLElement, cssClass: string) {
  if (element.classList.contains(cssClass)) {
    element.classList.remove(cssClass);
  }
}

export function removeAllCssClasses(element: HTMLElement) {
  if (element.hasAttribute('class')) {
    element.removeAttribute('class');
  }
}

export function overwriteCssClasses(element: HTMLElement, cssClasses: string | null) {
  if (cssClasses == null) {
    removeAllCssClasses(element);
  } else {
    element.setAttribute('class', cssClasses);
  }
}

export function getCssStyle(element: HTMLElement, styleName: string): string {
  return element.style.getPropertyValue(styleName);
}

export function getCssStyles(element: HTMLElement): string {
  return element.style.cssText;
}

export function getComputedCssStyle(element: HTMLElement, styleName: string): string {
  return window.getComputedStyle(element).getPropertyValue(styleName);
}

export function addCssStyle(element: HTMLElement, styleName: string, styleProperty: string) {
  element.style.setProperty(styleName, styleProperty);
}

export function removeCssStyle(element: HTMLElement, styleName: string) {
  element.style.removeProperty(styleName);
  if (element.style.length === 0) {
    element.removeAttribute('style');
  }
}

export function removeAllCssStyles(element: HTMLElement) {
  if (element.hasAttribute('style')) {
    element.removeAttribute('style');
  }
}

export function overwriteCssStyles(element: HTMLElement, styles: string | null) {
  if (styles == null) {
    removeAllCssStyles(element);
  } else {
    element.style.cssText = styles;
  }
}

export function hasAttribute(element: HTMLElement, attribute: string): boolean {
  return element.hasAttribute(attribute);
}

export function getAttribute(element: HTMLElement, attribute: string): string | null {
  if (!element.hasAttribute(attribute)) {
    return null;
  } else {
    return element.getAttribute(attribute);
  }
}

export function setAttribute(element: HTMLElement, attribute: string, value: string) {
  element.setAttribute(attribute, value);
}

export function removeAttribute(element: HTMLElement, attribute: string) {
  element.removeAttribute(attribute);
}

export function addClickEventListener(element: HTMLElement, callback: (event?: MouseEvent) => void) {
  element.addEventListener('click', callback);
}

export function addKeyEventListener(callback: (event: KeyboardEvent) => void) {
  document.addEventListener('keydown', callback);
}

export function addScrollEventListener(callback: (event: Event) => void) {
  document.addEventListener('scroll', callback);
}

export function addResizeEventListener(callback: (event: UIEvent) => void) {
  window.addEventListener('resize', callback);
}

export function addEventListener(element: HTMLElement, event: string, callback: (event: any) => void) {
  element.addEventListener(event, callback);
}

export function disableContextMenu(element: HTMLElement) {
  element.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
}

export function disableDragging(element: HTMLElement) {
  element.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
}

export function getElement(selector: string): HTMLElement | null {
  return document.querySelector(selector);
}

export function getElements(selector: string): NodeListOf<HTMLElement> {
  return document.querySelectorAll(selector);
}

export function getKeyFromEvent(event: KeyboardEvent): string {
  return event.key;
}

export const DomTools = {
  documentReady,
  getRootFontSize,
  createElement,
  createInputElement,
  cloneElement,
  removeElement,
  prependChildElement,
  appendChildElement,
  prependBeforeChild,
  appendAfterChild,
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
  getCssStyles,
  getComputedCssStyle,
  addCssStyle,
  removeCssStyle,
  removeAllCssStyles,
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
