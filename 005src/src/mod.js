// 命令导出 匿名类
function foo() {
    console.log('function foo')
}

export default class A {
    show() {
        console.log('Class A')
    }
}

const B = 'JeffreyDin';

export {B, foo};