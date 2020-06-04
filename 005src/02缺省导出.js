// 缺省导出
export default function foo() {
    console.log('function foo')
}

// 缺省导出 匿名
export default function () {
    console.log('function foo')
}

// 缺省导出 匿名类
export default class A {
    show() {
        console.log('Class A')
    }
}

// export const B = 'JeffreyDin';