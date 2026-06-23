//reverse array
let num = [1,2,3,4,5];
num.reverse();
console.log(num);

//sort array(arrange in assending order)
num.sort();
console.log(num);

//map()..(make new array)
let res =  num.map(function(num){
    return num * 2;
});
console.log(res);


