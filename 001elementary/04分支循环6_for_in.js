
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

// // 数组
// arr = [1, 3, 5, 7]
// for (let x in arr) {
//     console.log(x, arr[x])
// }
// console.log('~~~~~~~~~~~~~~~')
// for (let index in arr)
//     console.log(`${index} : ${arr[index]}`); 




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
for (let key in obj) // 返回数组的index
    console.log(`${key} : ${obj[key]}`);
