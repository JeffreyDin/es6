const A2 = class {
    constructor() {
        this.x = 100;
    }
}; // 匿名类

console.log(A2)
console.log(new A2().x)
console.log('~~~~~~~~~~~~')


// 普通的继承
// class B extends Object {
// class B extends A2 {
const B = class extends A2 {
    // constructor() {
    //     super ();
    //     // this.x = 200;
    // }  // 可以省略掉
}; 
console.log(B);
console.log(new B().x);
console.log('~~~~~~~~~~~~')


const C = (Sup) => class extends Sup {}
// D 是什么？普通函数
// D 返回什么？ return回来一个类定义： class extends Sup {}
const D = Sup => class extends Sup {}

let cls = D(A2);  
// 类 obj 实例化
let obj = new cls();
console.log(obj, typeof obj);
console.log(obj.x);
