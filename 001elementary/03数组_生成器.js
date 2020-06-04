// 1. 数组定义
// a = ['b','c']  // 类型是 object
// console.log(typeof a)
// console.log('------------------------')

// b = new Array()
// console.log(typeof b)
// console.log('------------------------')


// var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
// for (var i = 0; i < trees.length; i++)
//     console.log(trees[i])
// console.log('==================')
// delete trees[3]; // 数组中元素被删除，但空着的位置是undefined

// for (var i = 0; i < trees.length; i++)
//     console.log(trees[i])




// let trees = new Array("redwood", "bay", "cedar", "oak", "maple");

// console.log(0 in trees);	// returns true ，0在数组对象的index中

// console.log(3 in trees);	// returns true ，3在数组对象的index中

// console.log(6 in trees);	// returns false，6不在数组对象的index中

// console.log("bay" in trees);	// return false，bay不是属性，它是值
// console.log("length" in trees); // returns true，length是对象的属性

// console.log('~~~~~~~~~~~~~~~~~~~~')

// delete trees[3];

// console.log(3 in trees);	// return false

// for(var i=0;i<trees.length;i++)
//     console.log(trees[i]);
// console.log('~~~~~~~~~~~~~~~~~~~~')




// // Custom objects 
// let mycar = {
//     color: "red", 
//     year: 1998
// };
// console.log("color" in mycar); // returns true 
// console.log("model" in mycar); // returns false 
// console.log('year' in mycar) // true




// 生成器
// // 生成器 1
// function * inc(){
//     yield 100;
//     return 200;
// }


// gen = inc();   // 生成器对象
// // 返回实例对象
// console.log(gen.next())  // { value: 100, done: false }
// console.log(gen.next())  // { value: 200, done: true }
// console.log(gen.next())  // { value: undefined, done: true }


// 生成器
// // 生成器 2
function* inc() {
    let i = 0; let j = 7;
    while (true) {
        yield i++;
        if (!j--) return 100;
    }
}

let gen = inc()
for (let i = 0; i < 10; i++)
    console.log(gen.next());
