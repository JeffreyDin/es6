
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

// // 对象
// var obj = {
//     a:10,
//     b:20,
//     c:'abc'
// } 
// // 将对象当数组用
// for (let x in obj) {
//     console.log(x, obj[x])
// }


function sum(arr) {
    for (let x = 0; x < arr.length; x++) { // 自己定义索引数值遍历

        console.log(x, typeof (x), arr[x]);
    }

    for (let x in arr) { // 遍历index或对象属性，

        console.log(x, typeof (x), arr[x]);
    }

    for (let x of arr) { // 遍历元素

        console.log(x, typeof (x));
    }

}

sum([3, 6, 9]);
