// class A {
//     static s_p = 1000; /*静态属性*/
//     static show() /*静态方法*/ {
//         // this.x = x; //错误
//         console.log('static show')
//     };
// }

// // A.show()
// // 类的静态方法不能用实例来调用
// // (new A()).show()
// // 类的静态方法不能用实例来调用
// //  a = new A()
// //  a.show()
// // 静态的，是类的
// A.show() // 静态方法
// console.log(A.s_p) // 静态属性



class Add {
    constructor(x, y) {
    this.x = x; this.y = y;
    }
    static print() {
        console.log(this.x); // ? this是什么

    }
}

add = new Add(40, 50); 
console.log(Add); 
Add.print();
//add.print(); // 实例不能访问直接访问静态方法，和C++、Java一致
add.constructor.print(); // 实例可以通过constructor访问静态方法
