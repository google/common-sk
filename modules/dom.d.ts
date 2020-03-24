/** @module common-sk/modules/dom */
/**
 * A Promise that resolves when DOMContentLoaded has fired.
 */
export declare const DomReady: Promise<unknown>;
/** @function $
 *
 * @description Returns a real JS array of DOM elements that match the CSS selector.
 *
 * @param {string} query CSS selector string.
 * @param {Element} ele The Element to start the search from.
 * @returns {Array} Array of DOM Elements that match the CSS selector.
 *
 */
export declare function $<E extends Element = Element>(query: string, ele?: E | Document): E[];
/** @function $$
 *
 * @description Returns the first DOM element that matches the CSS query selector.
 *
 * @param {string} query CSS selector string.
 * @param {Element} ele The Element to start the search from.
 * @returns {Element} The first Element in DOM order that matches the CSS selector.
 */
export declare function $$<E extends Element = Element>(query: string, ele?: E | Document): E | null;
/**
 * Find the first parent of 'ele' with the given 'nodeName'.
 *
 * @param {HTMLElement} ele - The element to start searching a.
 * @param {string} nodeName - The node name we are looking for.
 * @returns {HTMLElement} Either 'ele' or the first parent of 'ele' that has the nodeName of 'nodeName'.
 *
 * @example
 *
 *   findParent(ele, 'DIV')
 *
 */
export declare function findParent(ele: HTMLElement | null, nodeName: string): HTMLElement | null;
//# sourceMappingURL=dom.d.ts.map