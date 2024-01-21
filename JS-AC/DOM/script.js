let divs = document.querySelectorAll(".box");
let i = 1;
for(let div of divs){
    div.innerText = `new unique value ${i++}`;
}
