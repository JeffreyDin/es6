// 1. 注释
// /**
//  * 注释
//  */
// console.log('hello js')   // console print

// str = 'hello' + /*comment*/' magedu' 
// console.log(str)

// /**
//  * 
//  * @param {string} x 
//  */
// function a(x){
//     return 100;
// }





// // 2. 变量与常量
// // var 定义 当前作用域提升此声明 undefined 声明初始化 声明+赋值
// var a       // 只是声明，a为undefined
// let b       // ES6 支持
// console.log(1,a,b)

// a = 100 //现在不推荐 不使用
// b = 'a string'  //现在不推荐 不使用
// console.log(2,a,b)
// // var a = 100
// // let b = 'a string'  
// // console.log(3,a,b)

// var aa = 1000
// let bb = 'astring'  
// console.log(4,aa,bb)

// var y //只是声明，y值为undefined
// var x = 5 // 规范的声明并初始化，声明全局或局部变量。
// z = 6 // 不规范的初始化，不推荐。在严格模式下会产生异常。在赋值之前不能引用，因为它没有声明。一旦这样赋值就是全局作用域。


// //const c // 可以吗？不可以
// const c = 100 // 常量必须声明时赋值，之后不能再改

// console.log(c)

// //c = 200 // 不可以更改





// // 3. 函数
// function hello()
// {
//     var a; // 只是声明，a为undefined，作用域在函数中
//     a = 100;
// }
// hello();
// console.log(a) // 未声明变量a，异常

// //a = 200 // 不能声明提升//
// // let a = 200 // 不能声明提升
// // var a = 200; hello(); // var声明提升hoisting



// 4. 类型转换
// // 弱类型
// console.log('=====string=====') 
// console.log(a = 3 + 'magedu', typeof(a)) 
// console.log(a = null + 'magedu', typeof(a))
// console.log(a = undefined + 'magedu', typeof(a)) 
// console.log(a = true + 'magedu', typeof(a))


// // 数字
// console.log('=====number=====') 
// console.log(a = null + 8, typeof(a))
// console.log(a = undefined + 8, typeof(a)) //undefined没法转换成一个对应的数字
// console.log(a = true + 8, typeof(a)) 
// console.log(a = false + 8, typeof(a))

// // boolean 
// console.log('=====bool=====')
// console.log(a = null + true, typeof(a))
// console.log(a = null + false, typeof(a))
// console.log(a = undefined + true, typeof(a)) //undefined没法转换成一个对应的数字
// console.log(a = undefined + false, typeof(a)) // NaN
// console.log(a = null & true, typeof(a))       // and => && 位与
// console.log(a = undefined & true, typeof(a)) 


// // 短路  && and  || or
// console.log(a = null && true, typeof(a)) // 逻辑运算符，null 直接就是false短路
// console.log(a = false && null, typeof(a)) // 逻辑运算符，false短路返回false 
// console.log(a = false && 'magedu', typeof(a)) // boolean
// console.log(a = true && 'magedu', typeof(a)) // 字符串
// console.log(a = true && '', typeof(a)) // 字符串
// console.log(a = true || '', typeof(a)) // boolean

// // null 
// console.log('=====null=====')
// console.log(a = null + undefined, typeof(a))
