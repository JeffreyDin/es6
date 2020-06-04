// 九九乘法表，使用JS实现
// for (let i = 1; i < 10; i++) {
//     line = '';
//     console.log(i);
//     console.log('~~~~~~~~~~~~~~~~');
//     for (let j = 1; j <= i; j++){
//         console.log(j);
//         console.log('===');
//     }
// }

for (let i = 1; i < 10; i++) {
    line = '';
    for (let j = 1; j <= i; j++)
        line += `${j}*${i}=${i * j} `;
    console.log(line)
}
