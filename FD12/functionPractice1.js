//Ek function banao jo "Hello Kiran" print kare.
function call(){
    console.log("Hello Kiran");
}
call();

//Ek function greet(name) banao jo "Hello, Kiran" print kare.
function greet(name){
    console.log("Hello,Kiran");
}
greet();

//Do numbers ka sum return karne wala function banao.
function sum(a,b){
    return a+b;
}
let res = sum(10,30);
console.log(res);

//Do numbers ka multiplication karne wala function banao.
function multi(a,b){
    return a*b;
}
let mult = multi(5,4);
console.log(mult);

//Ek number even hai ya odd, check karne wala function banao.
function EvenOdd(n){
    if(n%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
EvenOdd(8);

