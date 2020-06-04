
// // 1. 语句块1
// function hello() {
//     let a = 1; var b = 2; 
//     c = 3 // 全局变量
// }

// hello()
// // let 作用域是块作用域；var 作用域是函数作用域（在函数中），全局作用域；
// // console.log(a) // 不可见
// // console.log(b) // 不可见
// console.log(c) // 不可见吗？ 调用函数后，可见


// 1. 语句块2
let d = 100 
if (1)
{
    let d = 4;  // 赋值即重新定义
    var e = 5; 
    f = 6
    if (true) {
        // let d = 44;  // 赋值即重新定义
        console.log(d) 
        console.log(e) 
        console.log(f)
        console.log('-------------') 
        g = 10
        var h = 11
    }
}


console.log(d) // 块作用域使用let，不可见;但是块外的d可见
console.log(e) // 块作用域使用var，可见
console.log(f) // 块作用域隐式声明，可见
console.log(g) // 可见
console.log(h) // 可见
