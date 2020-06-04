// 函数中变量的作用域

function test() {
    a = 100;
    var b = 200;
    let c = 300;
}
// 先要运行test函数

test()

console.log(a);
// console.log(b); // 不可见
// console.log(c); // 不可见







function show(i, arg) {
    console.log(i, arg)
}

// 作用域测试
x = 500;
function fn() {
    let z = 400;
    {
        var o = 100; // var 作用域当前上下文

        show(1, x);
        t = 'free'; // 此语句执行后，t作用域就是全局的，不推荐

        let p = 200;
    }
    var y = 300; 
    show(2, z); 
    show(3, x); 
    show(4, o); 
    show(5, t);
    //show(6,p); // 异常，let出不来上一个语句块


{
    show(7, y); show(8, o); show(9, t); {
        show(10, o); show(11, t); show(12, z);
    }
}
}

// 先执行函数

fn()

//show(13,y); // 异常，y只能存在于定义的上下文中，出不了函数
show(14,t); // 全局，但是严格模式会抛异常

//show(15,o) // 看不到o，异常原因同y

show(16, z); // 变量声明提升，var声明了z，但是此时还没有赋值

var z = 10;

const m = 1
//m = 2 // 常量不可以重新赋值
