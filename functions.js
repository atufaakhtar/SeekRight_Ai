/**
 * functions.js
 * Contains custom implementations for JavaScript operations.
 * Includes solutions for mathematical operations, custom map, reduce, filter, and flatMap.
 * Author: Atufa Akhtar
 */

/**
 * Perform mathematical operations using let, var, and const.
 */
function mathematicalOperations() {
    let a = 10; // mutable variable
    var b = 20; // function-scoped variable
    const c = 5; // immutable variable

    // Perform operations
    let sum = a + b + c;
    let product = a * b * c;
    var difference = b - a - c;

    return {
        sum,
        product,
        difference
    };
}

/**
 * Custom implementation of Array.prototype.map
 * @param {Array} array - The input array.
 * @param {Function} callback - The function to apply on each element.
 * @returns {Array} - A new array with mapped values.
 */
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

/**
 * Custom implementation of Array.prototype.reduce
 * @param {Array} array - The input array.
 * @param {Function} callback - The function to execute on each element.
 * @param {*} initialValue - The initial accumulator value.
 * @returns {*} - The accumulated result.
 */
function customReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

/**
 * Custom implementation of Array.prototype.filter
 * @param {Array} array - The input array.
 * @param {Function} callback - The function to test each element.
 * @returns {Array} - A new array with elements that pass the test.
 */
function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

/**
 * Custom implementation of Array.prototype.flatMap
 * @param {Array} array - The input array.
 * @param {Function} callback - The function to apply on each element.
 * @returns {Array} - A flattened array with mapped values.
 */
function customFlatMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const mappedValue = callback(array[i], i, array);
        if (Array.isArray(mappedValue)) {
            result.push(...mappedValue);
        } else {
            result.push(mappedValue);
        }
    }
    return result;
}

/**
 * Export all functions to make them reusable in other files.
 */
module.exports = {
    mathematicalOperations,
    customMap,
    customReduce,
    customFilter,
    customFlatMap
};
