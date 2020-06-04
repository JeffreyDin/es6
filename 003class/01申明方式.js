// var obj = {
//     property_1: value_1,  // property_# may be an identifier... 
//     property_2:  value_2,  // or a number...
//     ...,
//     "property n": value_n   // or a string
// };


var obj = {
    x: 1,
    1: 'abc', // key允许不加引号，最好加
    'y': '123'
}

for (let s in obj)
    console.log(s, typeof s, obj[s]);
