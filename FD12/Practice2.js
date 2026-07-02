//Sabse bada number return karo (2 numbers me).
function LargestNumber(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
//console.log(LargestNumber(10,30));

//Teen numbers me sabse bada number return karo.
function LargestNumber(num1,num2,num3){
    if(num1>num2 && num1>num3 ){
        return num1;
    }
    else if(num2>num1 && num2>num3){
                return num2;
    }
    else {
        return num3;
    }
}
console.log(LargestNumber(10,30,55));

//Number positive, negative ya zero hai, check karo.
function CheckNumber(num){
    if(num>0){
        return "Positive";
    }
    else if(num<0){
        return "Negative";
    }
    else{
        return "Zero";
    }
}
console.log(CheckNumber(-4));

//Circle ka area calculate karne wala function banao.
function area(r){
    return 2*3.14*r;
}
console.log(area(2));

//Celsius ko Fahrenheit me convert karne wala function banao.
function CelsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
console.log(CelsiusToFahrenheit(0));



