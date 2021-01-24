/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
export declare type TElementDimention = {
    width: number;
    height: number;
};
declare function documentReady(callback: () => void): void;
declare function getRootFontSize(): number;
declare function createElement(tagName: string): HTMLElement;
declare function removeElement(element: HTMLElement): void;
declare function prependChildElement(element: HTMLElement, parent: HTMLElement): void;
declare function appendChildElement(element: HTMLElement, parent: HTMLElement): void;
declare function prependBeforeChild(element: HTMLElement, child: HTMLElement): void;
declare function getChildNodes(element: HTMLElement): Array<Node>;
declare function setInnerHtml(parent: HTMLElement, inner: string): void;
declare function wrapElements(elements: Array<Node>, wrapper: HTMLElement): void;
declare function unwrapElements(wrapper: HTMLElement): void;
declare function getParentElement(element: HTMLElement): HTMLElement;
declare function getElementDimension(element: HTMLElement): TElementDimention;
declare function isElementWithinWindow(element: HTMLElement): boolean;
declare function getElementPosition(element: HTMLElement): {
    x: number;
    y: number;
};
declare function getCssClass(element: HTMLElement): string | null;
declare function applyCssClass(element: HTMLElement, cssClass: string | null): void;
declare function getCssStyle(element: HTMLElement, styleName: string): string;
declare function applyCssStyle(element: HTMLElement, styleName: string, styleProperty: string | null): void;
declare function applyCssStyles(element: HTMLElement, styles: string | null): void;
declare function hasAttribute(element: HTMLElement, attribute: string): boolean;
declare function getAttribute(element: HTMLElement, attribute: string): string | null;
declare function setAttribute(element: HTMLElement, attribute: string, value: string): void;
declare function removeAttribute(element: HTMLElement, attribute: string): void;
declare function addClickEventListener(element: HTMLElement, callback: (event?: MouseEvent) => void): void;
declare function addKeyEventListener(callback: (event: KeyboardEvent) => void): void;
declare function addScrollEventListener(callback: (event: UIEvent) => void): void;
declare function addResizeEventListener(callback: (event: UIEvent) => void): void;
declare function addEventListener(element: HTMLElement, event: string, callback: () => void): void;
declare function disableContextMenu(element: HTMLElement): void;
declare function disableDragging(element: HTMLElement): void;
declare function getElement(selector: string): HTMLElement | null;
declare function getElements(selector: string): NodeListOf<HTMLElement>;
declare function getKeyFromEvent(event: KeyboardEvent): string;
export declare const DomTools: {
    documentReady: typeof documentReady;
    getRootFontSize: typeof getRootFontSize;
    createElement: typeof createElement;
    removeElement: typeof removeElement;
    prependChildElement: typeof prependChildElement;
    appendChildElement: typeof appendChildElement;
    prependBeforeChild: typeof prependBeforeChild;
    getChildNodes: typeof getChildNodes;
    setInnerHtml: typeof setInnerHtml;
    wrapElements: typeof wrapElements;
    unwrapElements: typeof unwrapElements;
    getParentElement: typeof getParentElement;
    getElementDimension: typeof getElementDimension;
    getElementPosition: typeof getElementPosition;
    isElementWithinWindow: typeof isElementWithinWindow;
    getCssClass: typeof getCssClass;
    applyCssClass: typeof applyCssClass;
    getCssStyle: typeof getCssStyle;
    applyCssStyle: typeof applyCssStyle;
    applyCssStyles: typeof applyCssStyles;
    hasAttribute: typeof hasAttribute;
    getAttribute: typeof getAttribute;
    setAttribute: typeof setAttribute;
    removeAttribute: typeof removeAttribute;
    addClickEventListener: typeof addClickEventListener;
    addKeyEventListener: typeof addKeyEventListener;
    addScrollEventListener: typeof addScrollEventListener;
    addResizeEventListener: typeof addResizeEventListener;
    addEventListener: typeof addEventListener;
    disableContextMenu: typeof disableContextMenu;
    disableDragging: typeof disableDragging;
    getElement: typeof getElement;
    getElements: typeof getElements;
    getKeyFromEvent: typeof getKeyFromEvent;
};
export {};
