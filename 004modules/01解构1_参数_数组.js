// // 列表/数组解构
// var parts = ['shoulder', 'knees'];
// var lyrics = ['head', ...parts, 'and', 'toes']; // 使用...解构

// console.log(lyrics) // [ 'head', 'shoulder', 'knees', 'and', 'toes' ]


// // 参数解构
// function f(x, y, z) {
//     console.log(x + y + z)
// }
// var args = [10, 3, 4, 5]; 
// f(...args);


// // 数组解构
// const arr = [100, 200, 300];
// let [x, y, z] = arr;
// console.log(x, y, z);
// // 或者
// var [x1, y1, z1] = ['shoulder', 'knees', 'toes']
// console.log(x1, y1, z1)

// 少于数据元素
var [x2, y2] = ['shoulder', 'knees', 'toes']
console.log(x2, y2)

// 多于数据元素
var [x3, y3, z3, a3] = ['shoulder', 'knees', 'toes']
console.log(x3, y3, z3, a3)

// 可变变量
var [x4, y4, ...z4] = ['1', '2', '3', '4']
console.log(x4, y4, z4)


// 丢弃变量
var [x5,,, ...z5] = ['1', '2', '3', '4']
console.log(x5,z5)

var [,,x5,,, ...z5] = ['1', '2', '3', '4']
console.log(x5,z5)

// 支持默认值
var [,,x6=100,,,,z6=200] = ['1', '2', '3', '4']
console.log(x6,z6)

