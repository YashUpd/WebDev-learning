// // // //  // let str = "Yash Upadhyay";
// // // // // // let size = 0;
// // // // // // for(let i of str){
// // // // // //     console.log("i=",i);
// // // //// // //     size++;
// // // // // // }
// // // // // // console.log("String size =",size);

// // // // // let student = {
// // // // //     Name: "Rahul Kumar",
// // // // //     age: 20,
// // // // //     cgpa: 8.9,
// // // // //     isPass: true,
// // // // // };

// // // // // for(let key in student){
// // // // //     console.log("key=",key," value=", student[key]);
// // // // // }

// // // // for(let i=1;i<=100;i++){
// // // //     if(i%2===0){
// // // //         console.log("num =",i);
// // // //     }
// // // // }

// // // let gameNum = 25;
// // // let userNum = prompt("Guess the game number:");
// // // while(userNum!=gameNum){
// // //     userNum = prompt("You entered wrong number. Guess again:");
// // // }
// // // console.log("congratulations, you entered the right number.");

// // let str = "Yash Upadhyay";
// // console.log(str[8]);

// // let sentence = `This is a template literal`;
// // console.log(sentence);

// let obj = {
//     item: "pen",
//     price: 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("Yash\nUpadhyay");
// let str = console.log("Yash\tUpadhyay");
// console.log(str.length);

// let str = "Yash\tUpadhyay";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str = "      Yash Upadhyay   JS              ";
// console.log(str.trim());

// let str = "hello";
// let str2 = "world"
// console.log(str + str2);

let userName = prompt("Enter your full name:");
console.log(`@${userName}${userName.length}`);