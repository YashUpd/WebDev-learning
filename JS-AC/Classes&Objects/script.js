class Person {
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    work(){
        console.log("solve problems. Build something.");
    }
}

let obj = new Engineer();