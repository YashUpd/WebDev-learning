// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data 1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data 2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data 1.........");
// asyncFunc().then((res) => {
//   console.log(res);
//   console.log("fetching data 2.........");
//   asyncFunc2().then((res) => {
//     console.log(res);
//   });
// });



function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

//Async-await
async function getAllData(){
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
  console.log("getting data4....");
  await getData(4);
  console.log("getting data5....");
  await getData(5);
}


//promise chain
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });


// //callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5);
//             })
//         })
//     })
// });
