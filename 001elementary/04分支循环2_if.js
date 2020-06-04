// 1. if else
// if (cond1) {

// } else if (cond2) {

// } else if (cond3) {

// } else {

// }

// 1.0
// a = 100
// if (a>100){
//     console.log('ok')
// } else if (a===100) {
//     console.log('100')
// } else {
//     console.log('failed')
// }

// 1.1
a = [undefined, null, 0, '', Number.NaN, [], {}]
for (let i = 0; i < a.length; i++) {
    console.log(i, a[i], typeof a[i])
    if (a[i]) {
        console.log('true')
    } else {
        console.log('false')
    }
}

