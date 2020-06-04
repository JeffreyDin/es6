// function 函数名(参数列表) {
//     函数体;
//     return 返回值;
// };
// // 函数
// function add(x, y) {
//     return x + y;
// }
// console.log(add(3, 5));


// // 匿名函数；函数表达式
// const add = function (x, y) {
//     return x + y;
// };
// console.log(add(4, 6));

// // 有名字的函数表达式
// const add1 = function fn(x,y) {
//     return x + y
// }
// console.log(add1(5,6));
// // console.log(fn(5,6)); // fn只能用在函数内部


// // 有名字的函数表达式
// const sub = function fn(x, y) {
//     return x - y;
// };
// console.log(sub(5, 3));
// //console.log(fn(3, 2)); // fn只能用在函数内部


// // 有名字的函数表达式
// const sum = function _sum(n) {
//     // if (n == 1) return n;
//     if (n === 1) return n;
//     // _sum只能内部使用
//     return n + _sum(--n)
// }
// console.log(sum(5));


// 函数表达式不会申明提升
// console.log(sum(5));
// const sum = function _sum(n) {
//     // if (n == 1) return n;
//     if (n === 1) return n;
//     // _sum只能内部使用
//     return n + _sum(--n)
// }

// 函数会申明提升,不使用声明提升
console.log(sum(5));
function sum(n) {
    //  if (n == 1) return n;
    if (n === 1) return n;
    return n + sum(--n)
}
