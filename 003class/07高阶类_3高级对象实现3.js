// 多继承
const Serialization = /*后画是函数对象*/ 
Sup => class extends Sup {
    constructor(...args) {
        super (...args);
        console.log('Serialization ~~~~~')
        if (typeof(this.stringify) !== 'function'){
            throw new ReferenceError('should define stringify')
        }
    }
}

class Point {
    constructor(x,y) {
        // super ();   // 调用父构造器
        console.log('Point ~~~~')
        this.x = x;
        this.y = y;
    }
    // stringify () {
    //     console.log(this.x, this.y, '++++++')
    // }
}

class Point3D extends Serialization(Point) {
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


p3d = new Point3D(7, 8, 9);
console.log('Point3D显示：', p3d);
p3d.stringify()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')


// 流程：class Point3D：constructor(x, y, z)：super (x, y); ->
//  const Serialization: constructor(...args): super (...args); ->
//  class Point: constructor(x,y)
    