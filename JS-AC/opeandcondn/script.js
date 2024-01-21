// let num = prompt("Enter a Number:");
// console.log(num);
// if(num%5==0){
//     console.log(num,"is a multiple of 5");
// }else{
//     console.log(num,"is not a multiple of 5");
// }

let score = prompt("Enter your score:");
if(score<=49){
    console.log("Your grade is F");
}else if(score>49 && score<=59){
    console.log("Your grade is D");
}else if(score>59 && score<=69){
    console.log("Your grade is C");
}else if(score>69 && score<=79){
    console.log("Your grade is B");
}else if(score>79 && score<=100){
    console.log("Your grade is A");
}else{
    console.log("Invalid Input");
}