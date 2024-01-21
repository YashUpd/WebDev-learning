// //sum function
// function sum(a,b){
//     return a+b;
// };

// //arrow Functions modern javascript

// const arrowsum = (a,b)=>{
//     return a+b;
// };

// let arrowmul = (a,b)=>{
//     return (a*b);
// };

// const printHello = ()=>{
//     console.log("hello");
// };

// function countVowels(str) {
//   //"Yash Upadhyay"
//   let count = 0;
//   for (const char of str) {
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }


// const vowelCounter = (str)=>{
//     let count = 0;
//     for (const char of str){
//         if(
//             char == "a" ||
//             char == "e" ||
//             char == "i" ||
//             char == "o" ||
//             char == "u"
//         ){
//             count++;
//         }
//     }
//     return count;
// }

//higher order functions

// let arr = ["delhi","mumbai","pune","lucknow"];
// arr.forEach((val, idx ,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });

// let calcSquare = (val)=>{
//     console.log(val*val);
// }
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(calcSquare);

// let arr = [29,57,69];
// let newArr=arr.map((val)=>{
//     return val;
// });
// console.log(newArr);


// let arr = [28,18,29,3,2829,68];
// let newArr = arr.filter((val)=>{
//     return val>29;
// });
// console.log(newArr);


// let arr = [1,2,3,4];
// let newArr = arr.reduce((previous,currentVal)=>{
//     return previous+currentVal;
// });
// console.log(newArr);


// let arr = [5,6,2,1,3,19];
// let newArr = arr.reduce((previous,currentVal)=>{
//     return previous>currentVal?previous:currentVal;
// });
// console.log(newArr);


// let arr = [87,69,97,88,74,99,91,72];
// let newArr = arr.filter((val)=>{
//     return val>90;
// });
// console.log(newArr);


let n = prompt("Enter a number:");
let arr = [];
for(let i=1;i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);

let sumArr = arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(sumArr);

let mulArr = arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(mulArr);