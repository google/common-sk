/** @module common-sk/modules/jsonOrThrow */
export declare class JsonOrThrowError extends Error {
    message: string;
    resp: Response;
    status: number;
    constructor(resp: Response);
}
/** Helper function when making fetch() requests.
 *
 * Checks if the response is ok and converts it to JSON, otherwise it throws.
 *
 * @example
 *
 *    fetch('/_/list').then(jsonOrThrow).then((json) => {
 *      // Do something with the parsed json here.
 *    }).catch((r) => {
 *      if (r.status === 403) {
 *        // Handle HTTP response 403 - not authorized here.
 *      } else {
 *        console.err(r.message);
 *      }
 *    });
 *
 * @throws A JsonOrThrowErrr. See the [Response docs]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response }
 *         for more detail on reading resp (e.g. resp.text()).
 */
export declare function jsonOrThrow(resp: Response): Promise<any>;
//# sourceMappingURL=jsonOrThrow.d.ts.map