// // 继承 方法重写
// // ES 6 之前类定义方式
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // this.show = function () {
        //     console.log('Point show:')
        // };
        this.show = () => console.log('Point');
    }
    show() {
        console.log( this.x, this.y)
    }
}

class Point3D extends Point {
    constructor (x, y, z) {
        super(x,y);
        this.z = z;
        // this.show = function () {
        //     console.log('P3D show:',this.x)
        // };
        this.show = () => console.log('P3D show:',this.x);
    }
    show() {
        console.log(this.x, this.y, this.z)
    }
}
p3d = new Point3D(4, 5, 6);
console.log(p3d);
p3d.show()