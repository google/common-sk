/** @module common-sk/modules/dom */
/**
 * A Promise that resolves when DOMContentLoaded has fired.
 */
export declare const DomReady: Promise<unknown>;
/** @function $
 *
 * @description Returns a real JS array of DOM elements that match the CSS selector.
 *
 * @param query CSS selector string.
 * @param ele The Element to start the search from.
 * @returns Array of DOM Elements that match the CSS selector.
 *
 */
export declare function $<E extends Element = Element>(query: string, ele?: Element | Document): E[];
/** @function $$
 *
 * @description Returns the first DOM element that matches the CSS query selector.
 *
 * @param query CSS selector string.
 * @param ele The Element to start the search from.
 * @returns The first Element in DOM order that matches the CSS selector.
 */
export declare function $$<E extends Element = Element>(query: string, ele?: Element | Document): E | null;
/**
 * Find the first parent of 'ele' with the given 'nodeName'.
 *
 * @param ele - The element to start searching a.
 * @param nodeName - The node name we are looking for.
 * @returns Either 'ele' or the first parent of 'ele' that has the nodeName of 'nodeName'. Returns null if none are found.
 *
 * @example
 *
 *   findParent(ele, 'DIV')
 *
 */
export declare function findParent(ele: HTMLElement | null, nodeName: string): HTMLElement | null;
/**
 * Find the first parent of 'ele' with the given 'nodeName'. Just like findParent, but TypeScript typesafe.
 *
 * @param ele - The element to start searching a.
 * @param nodeName - The lower-case node name we are looking for, e.g. 'div'.
 * @returns Either 'ele' or the first parent of 'ele' that has the nodeName of 'nodeName'. Returns null if none are found.
 *
 * @example
 *
 *   findParentSafe(ele, 'div')
 *
 */
export declare function findParentSafe<K extends keyof HTMLElementTagNameMap>(ele: HTMLElement | null, nodeName: K): HTMLElementTagNameMap[K] | null;
//# sourceMappingURL=dom.d.ts.map