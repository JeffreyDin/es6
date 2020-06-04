// // 判断 方法是否在 高级类中
// class A {
//     constructor() {
//         // if ('show1' in this) {
//         //     console.log('ok')
//         // }
//         if (typeof (this.show1) === 'function') {
//             console.log('ok')
//         }
//         else {
//             throw new ReferenceError('E1')
//         }
//     }
//     show () {}
// }

//  a = new A();


// 多继承
class Serialization {
    constructor() {
        console.log('Serialization ~~~~~')
        if (typeof(this.stringify) !== 'function'){
            throw new ReferenceError('should define stringify')
        }
    }
}

class Point extends Serialization {
    constructor(x,y) {
        super ();   // 调用父构造器
        console.log('Point ~~~~')
        this.x = x;
        this.y = y;
    }
    stringify () {
        console.log(this.x, this.y, '++++++')
    }
}

class Point3D extends Point {
    constructor(x, y, z) {
        super (x, y);
        console.log('Point3D ~~~~')
        this.z = z;
    };
    show () {
        console.log(this.x, this.y, this.z)
    };
    stringify () {
        console.log(this.x, this.y, this.z, '======')
    }

}


a = new Point(4, 5);
console.log('Point显示：', a)
a.stringify();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

p3d = new Point3D(7, 8, 9);
console.log('Point3D显示：', p3d);
p3d.stringify()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')