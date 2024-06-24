// Question1

var name="sree Harish"
var age=31
var isstudent=true
console.log(name,age,isstudent) //Sree Harish,31,true


// Question no 2:
// area and perimeter of a rectangle 

let length =10
let width = 20


let area =length*width

let perimeter = 2*(length+width);
console.log(area);//200
console.log(perimeter);//60

// Question no 3

// String operations

//question no 3 :

var greeting = "Hello," 
var userName = "Hari"

var welomeMessage = greeting+userName
console.log(welomeMessage);//Hello,Hari


// question no 4:
// type conversion

var stringNumber ="123"
var convertedNumber = Number(stringNumber)

console.log(typeof(stringNumber));//string
console.log(typeof(convertedNumber));//Number


// question no 5

let a=4
const b=4

console.log(a==b)//true
console.log(a===b)//true
console.log(a!=b)//false
console.log(a!==b)//false
console.log(a>b)//false
console.log(a<b)//false
console.log(a>=b)//true
console.log(a<=b)//true


// question no-6

// issunny=Boolean(prompt("enter the true or false"))
// isweekend=Boolean(prompt("enter the true or false"))
// hashomework=Boolean(prompt("enter the true or false"))

// or
issunny=prompt("enter the true or false")
isweekend=prompt("enter the true or false")
hashomework=prompt("enter the true or false")


if(issunny=="true" && isweekend=="true"){
    if(hashomework=="true"){
    console.log("you can play and have a blast")
}}

else {

console.log("you should study well no playing");
}

// question no-7


let temperature=prompt("enter the temperature in numbers")

if(temperature>30){
    let weather="hot";
    console.log(`weather is ${weather}` )
}
else {
    let weather="cool";
    console.log(`weather is ${weather}` )
}



// question 8
let name1 = "Guru";
let x1 = 10;
let g1 = true;
let obj1 = {
    name: "prasad",
    age : 25
}
let y1;
console.log(y1);
console.log(typeof(name1));
console.log(typeof(x1));
console.log(typeof(g1));
console.log(typeof(obj1));
console.log(typeof(y1));

//question no-9

let a1 = parseInt(prompt("Enter the number"));
let operator = prompt("Enter +, -, *, /");
let a2 = parseInt(prompt("Enter the number"));

if(operator == '+'){
    let A = a1 + a2;
    console.log(A);
}
else if(operator == '-'){
    let B = a1 - a2;
    console.log(B);
}
else if(operator == '*'){
    let C = a1 * a2;
    console.log(C);
}
else if(operator == '/'){
    let D = a1 / a2;
    console.log(D);
}
else{
    console.log("Invalid operator entered");
}


// question 10

let name2 = "Guru";
let x2 = 10;
let g2 = true;
let obj2 = {
    name: "prasad",
    age : 25
}
let y2;
console.log(y2);
console.log(typeof(name2));
console.log(typeof(x2));
console.log(typeof(g2));
console.log(typeof(obj2));




