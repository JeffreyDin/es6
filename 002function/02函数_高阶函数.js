// // 计数器counter

// // 高阶函数
// function counter() {
//     let c = 0;
//     // 函数作为返回值：function (){return ++c;}
//     return function () {
//         return ++c;
//     }
// }
// // 内层函数
// const inc = counter();
// console.log(inc())
// console.log(inc())
// console.log(inc())
// console.log(inc())




// // 生成器方式
// function* counter() {
//     let c = 0;
//     while (1) {
//         yield ++c;
//     }
// }
// // 生成器对象
// const inc = counter();
// console.log(inc.next())
// console.log(inc.next())
// console.log(inc.next().value)
// console.log(inc.next().value)

// // for (let x of inc){
// //     console.log(x);
// // }







// // map 函数1，可以对某一个数组的元素进行某种处理
// function map(fn, arr) {
//     // 立即返回结果
//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newarr[i] = fn(arr[i]);
//     }
//     return newarr;


// }
// // 箭头函数，ES6 支持，类似 lambda 函数，单行，匿名函数
// console.log(map(x => x + 10, [1, 2, 3, 4]))
// console.log(map(function (x) { return x + 10 }, [1, 2, 3, 4]))

// map 函数2
// const map = function (arr, fn) {
//     let newarr = [];
//     for (let i in arr) {
//         newarr[i] = fn(arr[i]);
//     }
//     return newarr
// }
// console.log(map([1, 2, 3, 4], function (x) { return x + 10 }));

// // map 函数3 生成器
// function* map(fn, arr) {
//     for (let i = 0; i < arr.length; i++)
//         yield fn(arr[i]);
// }
// for (let o of map(x => x + 10, [1, 2, 3, 4])){
//     console.log(o);
// }








// // 箭头函数1
// // 以下三行等价
// const map = function (arr, fn) {
//     let newarr = [];
//     for (let i in arr) {
//         newarr[i] = fn(arr[i]);
//     }
//     return newarr
// }
// // console.log(map([1, 2, 3, 4], function (x) { return x + 10 }));
// // 箭头函数
// console.log(map([1, 2, 3, 4], function (x) { return x*2 }));
// console.log(map([1,2,3,4], (x) => {return x*2})); 
// console.log(map([1,2,3,4], x => {return x*2})); 
// console.log(map([1,2,3,4], x => x*2));



// // 箭头函数2

// function fn(x){
//     return x += 10;
// }
// console.log(fn(3));

// let fn2 = function(x){
//     return x += 10;
// };
// console.log(fn2(3));
// // 箭头函数
// let fn3 = (x) =>{
//     return x += 10;
// };
// console.log(fn3(3));



// // 箭头函数3

// 箭头匿名函数
// function x (a,b) {
//     return Math.random();
// }
// console.log(x(4,5));
// const z = (a,b) => console.log('abc')