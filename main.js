/**
 * main.js
 * Demonstrates the usage of functions imported from functions.js.
 * Author: Atufa Akhtar
 */

// Importing functions from functions.js
const {
    mathematicalOperations,
    customMap,
    customReduce,
    customFilter,
    customFlatMap
} = require('./functions');

/**
 * Mathematical Operations
 * Showcasing usage of let, var, and const in calculations.
 */
console.log("=== Mathematical Operations ===");
const mathResults = mathematicalOperations();
console.log('Sum:', mathResults.sum);
console.log('Product:', mathResults.product);
console.log('Difference:', mathResults.difference);

/**
 * Custom Map
 * Applying a custom map function to double each element in an array.
 */
console.log("\n=== Custom Map ===");
const mapResult = customMap([1, 2, 3], x => x * 2);
console.log('Result of customMap:', mapResult);

/**
 * Custom Reduce
 * Using a custom reduce function to calculate the sum of an array.
 */
console.log("\n=== Custom Reduce ===");
const reduceResult = customReduce([1, 2, 3], (acc, x) => acc + x, 0);
console.log('Result of customReduce:', reduceResult);

/**
 * Custom Filter
 * Filtering even numbers from an array using custom filter.
 */
console.log("\n=== Custom Filter ===");
const filterResult = customFilter([1, 2, 3, 4], x => x % 2 === 0);
console.log('Result of customFilter:', filterResult);

/**
 * Custom FlatMap
 * Mapping and flattening an array using custom flatMap.
 */
console.log("\n=== Custom FlatMap ===");
const flatMapResult = customFlatMap([1, 2], x => [x, x * 2]);
console.log('Result of customFlatMap:', flatMapResult);
