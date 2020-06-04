// 隐式传参
// var school = {
//     name: 'JeffreyDin',
//     getNameFunc: function () {
//         console.log(this.name); 
//         console.log("this显示:", this);
//         // return 的是匿名函数
//         // this 返回的是全局对象
//         return function () {
//             console.log(this === global); // this是否是global对象

//             return this.name;
//         };
//     }
// }; 

// // 实例：school.getNameFunc()
// // 调用的是 函数 返回的return
// // this 在普通函数调用中，this 指向全局对象
// console.log(school.getNameFunc()()); 
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')

// fn = school.getNameFunc()
// console.log(fn())






// // // 解决问题



// // 显示传参
// var school = {
//     name: 'JeffreyDin',
//     getNameFunc: function () {
//         console.log(this.name); 
//         console.log("this显示:", this);
//         // return 的是匿名函数
//         // this 返回的是全局对象
//         return function (that) {
//             console.log(this === global); // this是否是global对象

//             return that.name;
//         };
//     }
// }; 

// // 实例：school.getNameFunc()
// // 调用的是 函数 返回的return
// // this 在普通函数调用中，this 指向全局对象
// console.log(school.getNameFunc()(school)); 
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')

// // 测试
// // console.log(school.name)

// fn = school.getNameFunc()
// console.log(fn(school))




// call, apply
// bind
// var school = {
//     name: 'JeffreyDin',
//     getNameFunc: function () {
//         console.log(this.name); 
//         console.log("this显示:", this);
//         // return 的是匿名函数
//         // this 返回的是全局对象
//         return function () {
//             console.log(this === global); // this是否是global对象

//             return this.name;
//         };
//     }
// }; 

// // 实例：school.getNameFunc()
// // 调用的是 函数 返回的return
// // this 在普通函数调用中，this 指向全局对象
// // console.log(school.getNameFunc().call(school)); 
// // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
// // console.log(school.getNameFunc().apply(school)); 
// // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
// // bind
// console.log(school.getNameFunc().bind(school)()); 
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')

// // call() apply() 任何函数都可以调用
// // 通过外部调用call() 方法 将内部的 this 替换掉
// // fn = school.getNameFunc()
// // console.log(fn.call(school))

// // fn = school.getNameFunc()
// // console.log(fn.apply(school))

// // bind return new bind function
// fn = school.getNameFunc().bind(school)() 
// console.log(fn)




// 箭头函数
// var school = {
//     name: 'JeffreyDin',
//     getNameFunc: function () {
//         console.log(this.name); 
//         console.log("this显示:", this);
//         // return 的是匿名函数
//         // this 返回的是全局对象
//         return () => {
//             console.log(this === global); // this是否是global对象
//             // console.log(this)
//             return this.name;
//         };
//     }
// }; 


// console.log(school.getNameFunc()()); 
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')


// ES6 新的定义方式如下:
class School {
    constructor() {
        this.name = 'JeffreyDin';
    };
    getNameFunc() {
        console.log(this.name);
        console.log("this显示:",this);
        return () => {
            console.log(this === global); // this是否是global对象
            console.log("this显示2:",this)
            return this.name;
        }
    }
}


console.log(new School().getNameFunc()()); 
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')