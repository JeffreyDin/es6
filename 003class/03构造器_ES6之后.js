// // ES 6 之后类定义方式
// // 构造器，构造函数
// // 基类定义
class Point {
    constructor(x, y) /*构造器*/{
        this.x = x;
        this.y = y;
    }
    show() /*方法*/{
        console.log( this.x, this.y)
    }
}
a = new Point(4,5);
console.log('Point显示：',a)
a.show()

console.log(Point)


// // // 继承
// // // ES 6 之前类定义方式
// // // 构造器，构造函数
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     show() {
//         console.log( this.x, this.y)
//     }
// }
// // a = new Point(4,5);
// // console.log('Point显示：',a)
// // a.show()

// // console.log(Point)

// class Point3D extends Point {
//     constructor (x, y, z) {
//         super(x,y);
//         this.z = z;
//     }
//     show() {
//         console.log(this.x, this.y, this.z)
//     }
// }
// p3d = new Point3D(4, 5, 6);
// console.log(p3d);
// p3d.show()