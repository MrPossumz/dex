import { dew as _baseSliceDewDew } from "./_baseSlice.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSlice = _baseSliceDewDew(),
      toInteger = _toIntegerDewDew();
  /**
   * Creates a slice of `array` with `n` elements dropped from the beginning.
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Array
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to drop.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.drop([1, 2, 3]);
   * // => [2, 3]
   *
   * _.drop([1, 2, 3], 2);
   * // => [3]
   *
   * _.drop([1, 2, 3], 5);
   * // => []
   *
   * _.drop([1, 2, 3], 0);
   * // => [1, 2, 3]
   */


  function drop(array, n, guard) {
    var length = array == null ? 0 : array.length;

    if (!length) {
      return [];
    }

    n = guard || n === undefined ? 1 : toInteger(n);
    return baseSlice(array, n < 0 ? 0 : n, length);
  }

  exports = drop;
  return exports;
}