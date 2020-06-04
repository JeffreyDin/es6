// // catch()方法调用3
// var p1 = new Promise(function (resolve, reject) {
//     setTimeout( /*使用函数作为参数，3秒 执行一次 */
//         () => {
//             resolve('ok')   // value
//             console.log('~~~~~~~~~~~~')
//             reject('bad')   // reason
//             console.log('~~~~~~~~~~~~')
//         }, 3000);
// })
// console.log('===============')
// console.log(p1)

// // 链式处理
// p1.then(
//     value => {
//         console.log('1:', value);
//         // 成功， do sth.
//         return Promise.reject(value + '!')
//     },
//     reason => {
//         console.log('2:', reason);
//         // 失败，写处理逻辑
//         return Promise.reject('OKKK~~')
//     }
// ) /*将构建成的 新的 Promise() 返回值 构建成一个失败的状态*/


//     // .then(
//     //     // 默认新的 promise 对象的 fulfilled
//     //     value => console.log('4:', value),
//     //     reason => console.log('5:', reason)
//     // )
//     .catch(reason => console.log('3:', reason))
// console.log('--------------')



// 例子 异步实例
function runAsync() {
    return new Promise(function (resolve, reject) {
        // 异步操作

        setTimeout(function () {
            console.log('do sth...'); 
            resolve('ok...');
        }, 3000);

    });

}

// 调用
runAsync().then(value => {
    console.log(value);
    return Promise.reject(value + '*');
}).catch(reason => {
    console.log(reason);
    return Promise.resolve(reason + '*');
}).then(value => {
    console.log(value); console.log('END');
});
console.log('~~~~~~ FIN ~~~~~~~')