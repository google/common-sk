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
/** Left pad a number with 0s.
 *
 * @param num - The number to pad.
 * @param size - The number of digits to pad out to.
 */
export declare function pad(num: number, size: number): string;
/**
 * Returns a human-readable format of the given duration in seconds.
 * For example, 'strDuration(123)' would return "2m 3s".
 * Negative seconds is treated the same as positive seconds.
 *
 * @param seconds - The duration.
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
 * @param milliseconds - The time in milliseconds or a time string.
 * @param now - The time to diff against, if not supplied then the diff
 * is done against Date.now().
 */
export declare function diffDate(s: number | string, now?: number): string;
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
 * @param b - The number of bytes in units 'unit'.
 * @param unit - The number of bytes per unit.
 */
export declare function bytes(b: number, unit?: number): string;
/** localeTime formats the provided Date object in locale time and appends the timezone to the end.
 *
 * @param date The date to format.
 */
export declare function localeTime(date: Date): string;
//# sourceMappingURL=human.d.ts.map