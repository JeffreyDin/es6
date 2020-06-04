const obj = {
    a: 100, b: 200, c: 300
};

let { x, y, z } = obj;
console.log(x, y, z); // undefined undefined undefined

// const, let不允许相同变量定义多次
var {a, b} = obj; // key名称
console.log(a, b); // 100 200 300

var {a, b, c, d} = obj; // key名称
console.log(a, b, c, d); // 100 200 300

// 别名解构
var { a:m, b:n, c} = obj; // 重命名
console.log(m, n, c);

// 缺省值
var {a:M, c:N, d:D ='python' } = obj; // 缺省值
console.log(M, N, D);
