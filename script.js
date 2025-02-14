function greet(name = 'Unknown user'){
    return console.log(`Hello ${name}`);
};
greet();
greet('Mitchell');

function addNumbers(num1, num2){
    return console.log(num1 + num2);
};
addNumbers(37,64);


let x = 10;

function changeValue(){
    let x = 20
    return console.log(x);    
}
changeValue();
console.log(x);



function outerFuncion() {
    let count = 0;
    return {
        increase() {
            count++;
            return count;
        }
    };
}

let counter = outerFuncion();
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());