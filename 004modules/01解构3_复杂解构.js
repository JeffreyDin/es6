// // 嵌套数组
// const arr = [1, [2, 3], 4];

// const [a, [b, c], d] = arr; 
// console.log(a, b, c, d); //1 2 3 4

// const [e, f] = arr; 
// console.log(e, f); //1 [ 2, 3 ]

// const [g, h, i, j = 18] = arr; 
// console.log(g, h, i, j); //1 [ 2, 3 ] 4 18

// const [k, ...l] = arr;
// console.log(k, l); //1 [ [ 2, 3 ], 4 ]



// 对象
var metadata = {
    title: "Scratchpad",
    translations: [
        {
            locale: "de", localization_tags: [],
            last_edit: "2014-04-14T08:43:37", 
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung"
        }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

console.log(metadata.title, metadata.translations[0].title)
console.log('~~~~~~~~~~~~~~')
var t0 = metadata.translations[0].title
console.log(t0)
console.log('~~~~~~~~~~~~~~')

// 对象解构
// const {title, translations} = metadata
// console.log("title值:", title)
// console.log("translations值:", translations)

// 对象解构
var { title: t1, translations: [{ title: t2 }] } = metadata;
console.log(t1); // "Scratchpad" 
console.log(t2); // "JavaScript-Umgebung"

