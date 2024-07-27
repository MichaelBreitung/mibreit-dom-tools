/**
 * @author Michael Breitung
 * @copyright Michael Breitung Photography (www.mibreit-photo.com)
 */
export type TElementDimension = {
    width: number;
    height: number;
};
export declare function documentReady(callback: () => void): void;
export declare function getRootFontSize(): number;
export declare function createElement(tagName: string): HTMLElement;
export declare function createInputElement(type: string): HTMLInputElement;
export declare function cloneElement(element: Node): Node;
export declare function removeElement(element: HTMLElement): void;
export declare function prependChildElement(element: HTMLElement, parent: HTMLElement): void;
export declare function appendChildElement(element: Node, parent: Node): void;
export declare function prependBeforeChild(element: HTMLElement, child: HTMLElement): void;
export declare function appendAfterChild(element: HTMLElement, child: HTMLElement): void;
export declare function getChildNodes(element: HTMLElement): Array<Node>;
export declare function setInnerHtml(parent: HTMLElement, inner: string): void;
export declare function wrapElements(elements: Array<Node>, wrapper: HTMLElement): void;
export declare function unwrapElements(wrapper: HTMLElement): void;
export declare function getParentElement(element: HTMLElement): HTMLElement | null;
export declare function getElementDimension(element: HTMLElement): TElementDimension;
export declare function isElementWithinWindow(element: HTMLElement): boolean;
export declare function getElementPosition(element: HTMLElement): {
    x: number;
    y: number;
};
export declare function getCssClasses(element: HTMLElement): string | null;
export declare function addCssClass(element: HTMLElement, cssClass: string): void;
export declare function removeCssClass(element: HTMLElement, cssClass: string): void;
export declare function removeAllCssClasses(element: HTMLElement): void;
export declare function overwriteCssClasses(element: HTMLElement, cssClasses: string | null): void;
export declare function getCssStyle(element: HTMLElement, styleName: string): string;
export declare function getCssStyles(element: HTMLElement): string;
export declare function getComputedCssStyle(element: HTMLElement, styleName: string): string;
export declare function addCssStyle(element: HTMLElement, styleName: string, styleProperty: string): void;
export declare function removeCssStyle(element: HTMLElement, styleName: string): void;
export declare function removeAllCssStyles(element: HTMLElement): void;
export declare function overwriteCssStyles(element: HTMLElement, styles: string | null): void;
export declare function hasAttribute(element: HTMLElement, attribute: string): boolean;
export declare function getAttribute(element: HTMLElement, attribute: string): string | null;
export declare function setAttribute(element: HTMLElement, attribute: string, value: string): void;
export declare function removeAttribute(element: HTMLElement, attribute: string): void;
export declare function addClickEventListener(element: HTMLElement, callback: (event?: MouseEvent) => void): void;
export declare function addKeyEventListener(callback: (event: KeyboardEvent) => void): void;
export declare function addScrollEventListener(callback: (event: Event) => void): void;
export declare function addResizeEventListener(callback: (event: UIEvent) => void): void;
export declare function addEventListener(element: HTMLElement, event: string, callback: (event: any) => void): void;
export declare function disableContextMenu(element: HTMLElement): void;
export declare function disableDragging(element: HTMLElement): void;
export declare function getElement(selector: string): HTMLElement | null;
export declare function getElements(selector: string): NodeListOf<HTMLElement>;
export declare function getKeyFromEvent(event: KeyboardEvent): string;
export declare const DomTools: {
    documentReady: typeof documentReady;
    getRootFontSize: typeof getRootFontSize;
    createElement: typeof createElement;
    createInputElement: typeof createInputElement;
    cloneElement: typeof cloneElement;
    removeElement: typeof removeElement;
    prependChildElement: typeof prependChildElement;
    appendChildElement: typeof appendChildElement;
    prependBeforeChild: typeof prependBeforeChild;
    appendAfterChild: typeof appendAfterChild;
    getChildNodes: typeof getChildNodes;
    setInnerHtml: typeof setInnerHtml;
    wrapElements: typeof wrapElements;
    unwrapElements: typeof unwrapElements;
    getParentElement: typeof getParentElement;
    getElementDimension: typeof getElementDimension;
    getElementPosition: typeof getElementPosition;
    isElementWithinWindow: typeof isElementWithinWindow;
    getCssClasses: typeof getCssClasses;
    addCssClass: typeof addCssClass;
    removeCssClass: typeof removeCssClass;
    removeAllCssClasses: typeof removeAllCssClasses;
    overwriteCssClasses: typeof overwriteCssClasses;
    getCssStyle: typeof getCssStyle;
    getCssStyles: typeof getCssStyles;
    getComputedCssStyle: typeof getComputedCssStyle;
    addCssStyle: typeof addCssStyle;
    removeCssStyle: typeof removeCssStyle;
    removeAllCssStyles: typeof removeAllCssStyles;
    overwriteCssStyles: typeof overwriteCssStyles;
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