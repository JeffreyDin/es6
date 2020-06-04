const arr = [1, 2, 3, 4, 5]; 

// // push(...items) 尾部增加多个元素
// arr.push(6,7); 
// console.log(arr);

// // pop() 移除最后一个元素，并返回它
// arr.pop() 
// console.log(arr);

// // map 引入处理函数来处理数组中每一个元素，
// // 返回新的数组
// console.log(arr.map(x=> x+10));


// // filter 元素处理的回调函数
// // 返回新的数组
// console.log(arr.filter(x=> x%2==0));


// // foreach 迭代所有元素，无返回值
// // 类似 for 循环 操作 任意可迭代对象
// // forEach 操作仅限于 数组
// var newarr = []
// console.log(arr.forEach(x=> {
//     newarr.push(x*2)
// }))
// console.log(newarr)


var newarr0 = []
var newarr1 = []
var newarr2 = []
console.log(arr.forEach((x,y,z)=> {
    console.log(x) // element 元素
    console.log(y) // index 序号
    // console.log(z) // arr

    newarr0.push(x*2)
    newarr1[y] = x * 2
    newarr1[y] = arr[y]* 2
}))
console.log(newarr0)
console.log(newarr1)
console.log(newarr1)