/** @constant {number} */
export declare const KB = 1024;
/** @constant {number} */
export declare const MB: number;
/** @constant {number} */
export declare const GB: number;
/** @constant {number} */
export declare const TB: number;
/** @constant {number} */
export declare const PB: number;
/** Left pad a number with 0's.
 *
 * @param {number} num - The number to pad.
 * @param {number} size - The number of digits to pad out to.
 * @returns {string}
 */
export declare function pad(num: number, size: number): string;
/**
 * Returns a human-readable format of the given duration in seconds.
 * For example, 'strDuration(123)' would return "2m 3s".
 * Negative seconds is treated the same as positive seconds.
 *
 * @param {number} seconds - The duration.
 * @returns {string}
 */
export declare function strDuration(seconds: number): string;
/**
 * Returns the difference between the current time and 's' as a string in a
 * human friendly format. If 's' is a number it is assumed to contain the time
 * in milliseconds otherwise it is assumed to contain a time string parsable
 * by Date.parse().
 *
 * For example, a difference of 123 seconds between 's' and the current time
 * would return "2m".
 *
 * @param {Object} milliseconds - The time in milliseconds or a time string.
 * @returns {string}
 */
export declare function diffDate(s: number | string): string;
/**
 * Formats the amount of bytes in a human friendly format.
 * unit may be supplied to indicate b is not in bytes, but in something
 * like kilobytes (KB) or megabytes (MB)
 *
 * @example
 * // returns "1 KB"
 * bytes(1234)
 * @example
 * // returns "5 GB"
 * bytes(5321, MB)
 *
 * @param {number} b - The number of bytes in units 'unit'.
 * @param {number} unit - The number of bytes per unit.
 * @returns {string}
 */
export declare function bytes(b: number, unit?: number): string;
/** localeTime formats the provided Date object in locale time and appends the timezone to the end.
 *
 * @param {Date} date
 * @returns {string}
 */
export declare function localeTime(date: Date): string;
//# sourceMappingURL=human.d.ts.map