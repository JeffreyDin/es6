// const obj = {
//     a: 100, b: 200, c: 300
// };

// console.log(Object.keys(obj)); // key，ES5 
// console.log(Object.values(obj)); // 值，实验性
// console.log(Object.entries(obj)); // 键值对，实验性







// const obj = {
//     a: 100, b: 200, c: 300
// };
// // 在对象上赋值，生成组合后的新对象
// // 在最后的最终被赋值
// console.log(Object.assign({d:1000}, obj, {e:2000, a:1000}))
// console.log(Object.assign({d:1000}, obj, {e:2000, a:1000}, obj))

// // 后面往前覆盖
// let o = {d:1000}
// let o1= Object.assign(o, obj, {e:2000})
// console.log( o === o1 )





// assign
var metadata = {
    title: "Scratchpad", 
    translations: [
        {
            locale: "de", 
            localization_tags: [],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad", 
            title: "JavaScript-Umgebung"
        }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var copy = Object.assign( 
    {} /*目标对象*/,
    
    metadata, 
    { schoolName: 'magedu', url: 'www.magedu.com' } 
     /*增加新的属性，覆盖同名属性*/, 

     { translations: null } 
     /*覆盖metadata的translations*/
);
console.log(copy);
