// 语法

// new Promise(
//     /* 下面定义的函数是 executor (执行器) */

//     function(resolve, reject) {...}
//     );




// // 简单使用 异步执行+延迟效果 setTimeout()
// var p1 = new Promise(function (resolve, reject) {
//     setTimeout( /*使用函数作为参数，3秒 执行一次 */ 
//         () => {
//         resolve('ok')
//     }, 3000 );
// })
// console.log('===============')
// console.log(p1)

// setTimeout(() => console.log(p1), 5000);







myPromise.then(
    /*如果成功则显示结果*/
    (value) => console.log(1, myPromise, value), 
    
    /*如果失败则显示原因*/
    (reason) => console.log(2, myPromise, reason)
);



// // then()方法调用
// var p1 = new Promise(function (resolve, reject) {
//     setTimeout( /*使用函数作为参数，3秒 执行一次 */ 
//         () => {
//         resolve('ok')   // value
//         console.log('~~~~~~~~~~~~')
//         reject('bad')   // reason
//         console.log('~~~~~~~~~~~~')
//     }, 3000 );
// })
// console.log('===============')
// console.log(p1)

// // setTimeout(() => console.log(p1), 5000);

// // then()方法调用， 相当于为对象注册了未来两种不同状态的回调函数
// // 传入俩个参数（函数）, 函数要求是单参数的
// p1.then(
//     value => console.log('1:', value),
//     reason => console.log('2:', reason)
// )
// console.log('--------------')






// // catch()方法调用1 
// var p1 = new Promise(function (resolve, reject) {
//     setTimeout( /*使用函数作为参数，3秒 执行一次 */ 
//         () => {
//         // resolve('ok')   // value
//         console.log('~~~~~~~~~~~~')
//         reject('bad')   // reason
//         console.log('~~~~~~~~~~~~')
//     }, 3000 );
// })
// console.log('===============')
// console.log(p1)

// // setTimeout(() => console.log(p1), 5000);

// p1.catch(reason => console.log(reason))
// // 或者
// p1.then(
//     value => console.log('1:', value),
//     // reason => console.log('2:', reason)
// ).catch(reason => console.log(reason))
// console.log('--------------')





// catch()方法调用2
var p1 = new Promise(function (resolve, reject) {
    setTimeout( /*使用函数作为参数，3秒 执行一次 */
        () => {
            // resolve('ok')   // value
            console.log('~~~~~~~~~~~~')
            reject('bad')   // reason
            console.log('~~~~~~~~~~~~')
        }, 3000);
})
console.log('===============')
console.log(p1)

// 链式处理
p1.then(
    value => console.log('1:', value),
    reason => console.log('2:', reason)
).then(
    // 默认新的 promise 对象的 fulfilled
    value => console.log('4:', value),
    reason => console.log('5:', reason)
).catch(reason => console.log('3:', reason))
console.log('--------------')
