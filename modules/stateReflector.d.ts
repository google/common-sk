/** Track the state of an object and reflect it to and from the URL.
 *
 * @example
 *
 * // If an element has a private variable _state:
 * this._state = {"foo": "bar", "count": 7}
 *
 * // then in the connectedCallback() call:
 * this._stateHasChanged = stateReflector(
 *   () => this._state,
 *   (state) => {
 *     this._state = state;
 *     this._render();
 *   }
 * );
 *
 * // And then any time the app changes the value of _state:
 * this._stateHasChanged();
 *
 * @param {function} getState - Function that returns an object representing the state
 *     we want reflected to the URL.
 *
 * @param {function} setState(o) - Function to call when the URL has changed and the state
 *     object needs to be updated. The object 'o' doesn't need to be copied
 *     as it is a fresh object.
 *
 * @returns {function} A function to call when state has changed and needs to be reflected
 *   to the URL.
 */
export declare function stateReflector(getState: () => {
    [key: string]: number | boolean | string | any[] | object;
}, setState: (o: {
    [key: string]: number | boolean | string | any[] | object;
}) => void): () => void;
//# sourceMappingURL=stateReflector.d.ts.map