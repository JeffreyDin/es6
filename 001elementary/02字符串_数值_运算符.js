// 1. 字符串操作方法：

// let a = 'abc'
// let b = "135"
// let c = `line1
// line2
// line3
// ` // 支持多行

// console.log(a,b)
// console.log(c)

// // 字符串插值，要求在反引号字符串中。python3.6支持
// let name = "tom", age = 19;
// console.log(`Hi, my name is ${name}. I am ${age}`)


// let school = 'magedu' 
// console.log(school.charAt(2)) // g 
// console.log(school[2]) // g,  只有array（数组）的概念，按索引操作
// console.log(school.toUpperCase()) // MAGEDU，转化为大写
// console.log(school.concat('.com')) // 连接
// console.log(school.slice(3)) // 切片，支持负索引 school[3:]
// console.log(school.slice(3,5))   //school[3:5]  ed
// console.log(school.slice(-2, -1))  // d
// console.log(school.slice(-2))      //du

// let url = "www.magedu.com"
// console.log(url.split('.'))
// console.log(url.substr(7,2)) // 返回子串从何处开始，取多长
// console.log(url.substring(7,10)) // 返回子串，从何处开始，到什么为止
//                                  // 前包，后不包


// let s = 'magedu.edu' 
// // 指数，找子串的位置，从
// console.log(s.indexOf('ed')) // 3
// console.log(s.indexOf('ed', 4)) // 7 
// console.log(s.replace('.edu', '.com')) 

// s = ' \tmag edu \r\n'
// // 去除两端的空白字符。trimLeft、trimRight是非标函数，少用
// console.log(s.trim()) 





// 2. 数值型number
// var biggestNum = Number.MAX_VALUE; 
// var smallestNum = Number.MIN_VALUE;
// var infiniteNum = Number.POSITIVE_INFINITY;
// var negInfiniteNum = Number.NEGATIVE_INFINITY; 
// var notANum = Number.NaN;

// console.log(biggestNum)
// console.log(smallestNum)
// console.log(infiniteNum)
// console.log(negInfiniteNum)
// console.log(notANum)


// console.log(1/2)
// console.log(1/0)
// console.log(1/'int')


// console.log(Math.PI) 
// console.log(Math.abs(-1))   // 绝对值
// console.log(Math.log2(16))  // 开平方
// console.log(Math.sqrt(2))   // 根号开方
// console.log(Math.random()) // (0, 1) 随机数
// console.log(parseInt(100.02)) 








// 3. 运算符 // 算数运算符
// console.log(1/2) // 0.5自然除
// console.log(1/0) // 无异常，返回无穷
// console.log(5 % 3)  // 2

// console.log(parseInt(1/2)) // 0 
// console.log(parseInt(3/2)) // 1

// console.log(Math.floor(3/2)) // 1 
// console.log(Math.ceil(3/2)) // 2 
// console.log(Math.round(3/2)) // 2
// console.log(Math.round(1/2)) // 1


// let i = 0
// let a = i++   // 先用i(先赋值)，用完之后i再自增加1  a=0; i=1
// console.log(a, i) // 打印什么  0 1
// console.log(a, i++) // 打印什么  0 1 还得先用(赋值)，当前i=1，赋值给log()；已经打印完成，然后进行自增，将 i=> 2

// // 赋值表达式，先算右边，
// a = ++i   // i=2, i先自增，再使用i；i=> 3 右边算完，赋值后a=3
// // 函数执行，从左到右
// console.log(a, ++i) // 打印什么 3 4 i先自增，再使用i；


// // 单目运算符 判断优先级
// i = 0;
// let a = ++i+i+++i+++i; console.log(a); //  答案是几？
// // 等价于 a = (++i) + (i++) + (i++) + i   
// // 运算过程：1 + 1(->2) + 2(->3) + 3
// // 运算过程：1 + 1 + 2 + 3





// // 3. 运算符 // 比较运算符
// // 不同类型之间比较大小，没有意义
// // 减少使用隐式类型转换
// console.log(20 > '2') // 隐式类型转换 数字  true
// console.log('30' > '200') // 字符串   true

// // 宽松比较
// // 减少使用隐式类型转换，尽量使用三等
// console.log(200 == '200') // 隐式类型转换  true
// console.log(200 != '200') // 隐式类型转换  false

// // 严格比较 ===
// console.log(200 === '200')   // 恒等  false  
// console.log('200' === '200') // 恒等  true
// console.log(200 !== '200')   // true






// // 3. 运算符 // 比较运算符 // 三目运算符
// x = 100 > 200 ? 'true' : 'false'
// console.log(x)

// a = 100
// b = 200
// x = a > b ? a + b : b++
// console.log(x, a, b)   // 200 100 201







// // 3. 运算符 // 逗号操作符
// a = 100
// b = 200
// x = a,b,a > b ? a + b : b++
// console.log(x, a, b)

// a = 100
// b = 200
// console.log('--------')
// function add(){
//     return a+b, b 
// }
// console.log(add())


// a = 100
// b = 200
// console.log('--------')
// function add(){
//     return b++,b++,++b
// }
// console.log(add())


// let a = 4 + 5, b = true, c = a > 20 ? 't' : 'f'
// console.log(a) //9
// console.log(c) //f

// function test() {
//     return 3, a + b, c = a++
// }

// console.log(test()) // 结果是什么
// console.log(c) // 结果是什么













// 4. 其他
// instanceof  typeof 
// s = 'a'
// console.log(s instanceof String)
// console.log(typeof s)
// c = new String('a')
// console.log(c instanceof String)
// console.log(typeof c)


// console.log('a' instanceof String) // false 
// console.log(1 instanceof Number) // false

// a = new String('b')
// console.log(a instanceof String) // true 
// console.log(new Number(1) instanceof Number) // true 
// console.log(a instanceof Object) // true

// console.log(typeof('a')) //string 
// console.log(typeof 'a') //string 
// console.log(typeof a) //object


// 删除
x = 42;
var y = 43;
let z = 60;
myobj = new Number();
myobj.h = 4;   // create property h

console.log(delete x);	// returns true (can delete if declared implicitly)

console.log(delete y);	// returns false (cannot delete if declared with var)

console.log(delete z);	// returns false

console.log(delete Math.PI); // returns false (cannot delete predefined properties) 
console.log(delete myobj.h); // returns true (can delete user-defined properties) 
console.log(delete myobj);  // returns true (can delete if declared implicitly) 
console.log('~~~~~~~~~~~~~~~~~~~~')


