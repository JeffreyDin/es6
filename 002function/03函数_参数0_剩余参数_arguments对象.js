// // 1. 普通参数
// function add(x,y){
//     console.log(x+y);
// }
// add(1,5);

// // 缺省值
// const add1 =(x,y=5) => console.log(x+y);
// add1(2);

// // 没有关键字传参的概念，建议将默认参数后置
// const add2 =(x=5,y) => console.log(x+y);
// add2(x=3);

// const add3 =(x,y=5) => console.log(x+y);
// add3(a=4,b=5);

// const add4 =(x,y) => console.log(x+y);
// add4(1,2,3,4,5);





// // // 2. 可变参数1
// const add =(x=4, ...y) => {
//     let s = 0;
//     s += x;
//     console.log(x);
//     console.log(y);
//     console.log(s);
//     for (let a of y) {
//         s += a
//     }
//     console.log(s);
// };
// add(5,6,7,8);


// // // 3. arguments 对象
// const add1 = function (x = 4, ...y) {
//     let s = 0;
//     s += x;
//     console.log(x);
//     console.log(y);
//     // 收集实参的所有参数
//     console.log('~', arguments);
//     for (let a of y) {
//         s += a
//     }
//     console.log(s);
// };
// add1(5, 6, 7, 8);


// 箭头函数不能使用 arguments
// ((x, ...args) => {
//     console.log(args); // 数组console.log(x);
//     console.log(arguments); // 不是传入的值

// })(...[1, 2, 3, 4]);


