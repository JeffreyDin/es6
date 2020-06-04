
// // 3.  参数解构

// const add1 = (x = 4, ...y) => {
//     let s = 0;
//     s += x;
//     console.log(x);
//     console.log(y);
//     // 收集实参的所有参数
//     // console.log('~', arguments);
//     for (let a of y) {
//         s += a
//     }
//     console.log(s);
// };
// add1(5, 6, 7, 8);
// console.log('~~~~~~');
// add1(...[5, 6, 7, 8]);
// console.log('~~~~~~');
// console.log(...[100, 200, 300, 3, 5, 3]);


// // 4. 函数返回值
a = (x = 5, y = 6, true); 
console.log(a); // true

b = (123, true, z = 'test');
 console.log(b)

function c() {
    return x = 5, y = 6, true, 'ok';
}

console.log(c()); // ok

