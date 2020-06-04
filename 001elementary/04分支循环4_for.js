// // C风格for循环

// for ([initialExpression]; [condition];
//     [incrementExpression]) {
//     statement
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log('~~~~~~~~~~~~~~~')

// for (let i = 0; i < 10; i += 3) {
//     console.log(i)
// }
// console.log('~~~~~~~~~~~~~~~')

// for (var x = 0, y = 9; x < 10;
//     x++, y--) {
//     console.log(x * y)
// }
// console.log('~~~~~~~~~~~~~~~')



// arr = [1, 2, 3, 4]
// // var i = 0, j = arr.length-1; 迭代变量的初始化部分，进入循环的时候执行一次
// // i < arr.length;    退出条件，当条件不满足退出
// // i++, j--   每一次循环结束要做的事情
// for (var i = 0, j = arr.length-1; i < arr.length; i++, j--) {
//     console.log(arr[i])
//     console.log(arr[j])
//     console.log('~~~')
// }
// console.log('~~~~~~~~~~~~~~~')
// // 等价于：
// arr = [1, 2, 3, 4]
// var i=0, j = arr.length-1;
// while (i<arr.length){
//     console.log(arr[i]);
//     console.log(arr[j]);
//     console.log('~~~')
//     i++;
//     j--
// }




// arr = [1, 3, 5, 7]
// // var i = 0, j = arr.length-1; 迭代变量的初始化部分，进入循环的时候执行一次
// // i < arr.length;    退出条件，当条件不满足退出
// // i++, j--   每一次循环结束要做的事情
// for (var i = 0, j = arr.length-1; i < arr.length; i=i+2, j--) {
//     console.log(arr[i])
//     console.log(arr[j])
//     console.log('~~~')
// }
// console.log('~~~~~~~~~~~~~~~')
// // 等价于：
// arr = [1, 3, 5, 7]
// var i=0, j = arr.length-1;
// while (i<arr.length){
//     console.log(arr[i]);
//     console.log(arr[j]);
//     console.log('~~~')
//     i=i+2;
//     j--
// }





// // 数组
// arr = [1, 3, 5, 7]
// // c 风格
// for (var i = 0; i < arr.length; i++) {
//     console.log(i, arr[i])
// }
// console.log('~~~~~~~~~~~~~~~')
// for (let x in arr) {
//     console.log(x, arr[x])
// }
// console.log('~~~~~~~~~~~~~~~')
// for (let x of arr) {
//     console.log(x)
// }

// 对象
var obj = {
    a:10,
    b:20,
    c:'abc'
} 
// 将对象当数组用
for (let x in obj) {
    console.log(x, obj[x])
}