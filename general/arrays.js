/* jshint esversion: 6 */
// array creation
const items = [];

// add items
items.push('one');
items.push('two');
items.push('three');

//
console.log(items);

// copy arrays
const copyItems = [...items];
console.log(copyItems);

// To convert an iterable object to an array, use spreads ... instead of Array.from.
// const foo = document.querySelectorAll('.foo');
// const nodes = [...foo];

// Use Array.from for converting an array-like object to an array.
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
const arr = Array.from(arrLike);
console.log(arr);

// Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.
const baz = Array.from(foo, bar);