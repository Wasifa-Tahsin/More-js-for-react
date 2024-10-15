// truthy=>'Afia,5,true,{},[]
// falsy=> '',0,false,null,undefined
// check truthy

let myVar=5
// check any truthy
if(myVar){
myVar=myVar*100
}
else{
    myVar=0
}

// check falsy
let myMoney=700
// you check negative or falsy anything
if(!myMoney){

}

const money=90
let food;
if(money>100){
    food='biriyani'
}
else{
    food='cha'
}


// ternary
let food1=money>100? 'biriyani':'cha';

let drink=(money>100 && myVar>100)?"coke":"cha"

// shortcut number to string conversation
const num1=45
console.log(num1)
const numStr=num1+''
console.log(numStr);

// string to number
const input='900'
const inputNum=+input
console.log(inputNum);

// 
let isActive=true;
const showUser=()=>console.log("display-user");
const hideUser=()=>console.log("hide-user");
isActive?showUser():hideUser()
// use && if the left side is true then right side will be executed
isActive && showUser()
// use || if the left side is false then the right side will bw executed
isActive || hideUser()

// toggole mane true thakle false korbe ..false thakle true korbe
isActive= !isActive