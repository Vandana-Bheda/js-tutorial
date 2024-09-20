const arr = ["js", "java", "pyhton", "ruby", "c++"];

arr.forEach( function (item){
    // console.log(item);//js java python rubyc++
})

// arr.forEach((val)=>{console.log(val);})// js java python ruby c++

function printMe(item) {
    console.log(item);
}

// arr.forEach(printMe)//js java python ruby c++

arr.forEach((item,index,array)=>{
    // console.log(item,index,array);//js 0 [ 'js', 'java', 'pyhton', 'ruby', 'c++' ]........ upto cpp
})

const mycode = [
    {
        languageName:"javascript",
        extension:".js",
    },
    {
        languageName:"html",
        extension:".html",
    },
    {
        languageName:"python",
        extension:".py",
    },
]

mycode.forEach((item)=>{console.log(`Extension of ${item.languageName} is ${item.extension}`)});//extension of javascript is .js....... upto .py