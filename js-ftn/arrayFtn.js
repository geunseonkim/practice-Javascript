let fruits = ["banana", "apple", "kiwi", "pineapple"];

// 분할 선택.
console.log(fruits.slice(1)); // 시작점 이후 선택 // [ 'apple', 'kiwi', 'pineapple' ]
console.log(fruits.slice(1, 3)); // 시작점 이후, 끝점 전까지 선택 // [ 'apple', 'kiwi' ]

// 분할 제거.
fruits.splice(0, 3); // 시작점에서 끝점 개만큼 제거. [ 'pineapple' ]
console.log(fruits);

// If deleteCount is omitted, all the elements from start to the end of the array will be deleted.
// fruits.splice(2); // [ 'banana', 'apple' ]

// If start >= array.length, no element will be deleted,
// fruits.splice(5); // [ 'banana', 'apple', 'kiwi', 'pineapple' ]

// (음수) start + array.length
// fruits.splice(-1); // [ 'banana', 'apple', 'kiwi' ]
// fruits.splice(-3); // [ 'banana' ]
// fruits.splice(-4); // []

// If deleteCount is 0 or negative, no elements are removed.
// fruits.splice(1, 0); // [ 'banana', 'apple', 'kiwi', 'pineapple' ]
// fruits.splice(1, -1); // [ 'banana', 'apple', 'kiwi', 'pineapple' ]
