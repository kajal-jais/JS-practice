// function outer(){
//     var x = 10;
//     function inner(){
//         var y=5;
//         console.log(x+y);
//     }
//     var x=20;
//     return inner;
// }
// var innerFun = outer();
// innerFun();

// const radius = [3,2,1,4];


// const area = function (radius){
//    return Math.PI * radius * radius;
// }

// const diameter = function(radius){
//     return radius*radius;
// }
// const calculate = function (radius,logic){
//     const output = [];
//     for(let i = 0;i<radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,diameter));

// const str1 = "abc";
// const str2 = "pqr";
// let str3 = "";

// for(let i=0;i<str1.length;i++){
//     for(let j=0;j<str2.length;j++){
//         if(i==j){
//             str3 = str3 + str1[i]+str2[j];
//         }
//     }
// }
// console.log(str3);



// arr.sort((a,b)=>{
    //     return a-b;
    // });
    // console.log(arr);
    
const arr = [10,20,30,50,40,70,5];
const j=0;
for(let i =0; i<arr.length;i++){
    if(arr[i]<arr[j]){
        arr[j]=arr[i];
    }
}
console.log(arr[j]);

for(let i = 0;i<arr.length;i++){
    if(arr[i]>arr[j]){
        arr[j]=arr[i];
    }
}
console.log(arr[j]);