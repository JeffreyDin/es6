function add(x, y) {
    console.log(this);
    console.log(x);
    console.log(y);
    return x+y
}
// call(this: Function, thisArg: any, ...argArray: any[]): any;
// apply(this: Function, thisArg: any, argArray?: any): any;
console.log(add.call(0,4,5))
console.log('~~~~~~')
console.log(add.apply(0,[4,5]))