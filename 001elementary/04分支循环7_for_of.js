
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




// for of
let arr = [1, 2, 3, 4, 5] 
let obj = {
    a: 1, b: 'rs', c: true
}


// for (let i of arr) { // 返回数组的元素
//     console.log(i)
// }

for (let i of obj) {// 异常，不可以迭代
    console.log(i)
}


    