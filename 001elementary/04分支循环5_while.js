// while (condition)
//     statement
// do
//     statement
// while (condition);


// arr = [1, 2, 3, 4]
// var i=0, j = arr.length-1;
// while (i<arr.length){
//     console.log(arr[i]);
//     console.log(arr[j]);
//     console.log('~~~')
//     i++;
//     j--
// }
// console.log('~~~~~~~~')

// arr = [1, 3, 5, 7]
// var i = 0
// do {
//     console.log(arr[i]);
//     ++i
// } while (i < arr.length)



let x = 10; while (x--) {
    console.log(x);
} 
console.log('~~~~~~~~~~~~~~~~') 
do {
    console.log(x);
} while (x++ < 10)
console.log('~~~~~~~~~~~~~~~~') 
do {
    console.log(x);
} while (x++ < 12)
// 分析这个程序的打印结果
// 9~0;  0-1
// -1~10;  10+1
// 11~12;  12+1








