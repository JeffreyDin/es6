// switch (test){
//     case 1:
//         ;
//     case 2:
//         ;
// }

// test = 1
// // test = parseInt(Math.random()*10) // (0,1)*10
// switch (test){
//     case 1:
//         console.log(1); // 穿透效果
//     case 2:
//         console.log(2);
//     case 3:
//         console.log(3);
//     default:
//         console.log(test);
//         console.log(' > 3')
// }



// // test = 1
// test = parseInt(Math.random()*10) // (0,1)*10
// switch (test){
//     case 1:
//         console.log(1);
//         break
//     case 2:
//         console.log(2);
//         break
//     case 3:
//         console.log(3);
//         break
//     default:
//         console.log(test);
//         console.log(' > 3')
// }



test = 2
// test = parseInt(Math.random()*10) // (0,1)*10
switch (test) {
    case 1:
    case 2:
        console.log('<2');
        break
    case 3:
        console.log(3);
        break
    default:
        console.log(test);
        console.log(' > 3')
        break   // 可以省略
}

// 等价于：
if (test === 1 || test === 2) {
    console.log('<2');
} else if (test === 3) {
    console.log(3);
} else {
    console.log(test);
    console.log(' > 3')
}






