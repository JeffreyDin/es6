// 	有一个数组 const arr = [1, 2, 3, 4, 5]; ，要求算出所有元素平方值是偶数且大于10的平方值。



const arr = [1, 2, 3, 4, 5];

// // 这种实现好吗？
// console.log(arr.map(x => x * x).filter(x => x % 2 === 0).filter(x => x > 10));
// console.log('~~~~~~~~~~')
// // 应该先过滤，再求值比较好

// // 第一种
// let newarr = []
// console.log(arr.filter(x => x % 2 == 0).forEach(x => {
//     let y = x * x;
//     if (y > 10) newarr.push(y);
// }))
// console.log(newarr)
// console.log('~~~~~~~~~~')


// 第二种
console.log(arr.filter(x => x % 2 == 0))
console.log(arr.filter(x => !(x%2)))

s = Math.sqrt(10)  // 开方
console.log(arr.filter(x => !(x%2) && x > s).map(x => x*x))