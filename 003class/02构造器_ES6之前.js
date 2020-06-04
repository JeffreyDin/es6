// // ES 6 之前类定义方式
// // 构造器，构造函数
// function A(x, y) {
//     this.x = x;
//     this.y = y;
//     console.log('this:', this);
//     this.show = function () {
//         console.log(this.x, this.y)
//     }
// }
// // this 在普通函数调用中，this 指向全局对象
// // 使用 new，this 指向当前实例本身
// a = new A(4, 5)
// console.log(a); // A 对象，{} 两个属性
// console.log(a.x)
// a.show()


// 继承
// ES 6 之前类定义方式
// 构造器，构造函数
function Point(x, y) {
    this.x = x;
    this.y = y;
    console.log('this:', this);
    this.show = function () {
        console.log(this.x, this.y)
    }
}
// a = new A(4, 5)
// console.log(a); // A 对象，{} 两个属性
// console.log(a.x)
// a.show()


function Point3D(x, y, z) {
    Point.call(this, x, y);
    this.z = z;
    this.show = function () {
        console.log(this.x, this.y, this.z)
    }
}
p3d = new Point3D(4, 5, 6);
console.log(p3d);
p3d.show()