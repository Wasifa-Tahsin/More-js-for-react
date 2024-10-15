// 1. how to declare a variable using let and const
// 2.const=change hobe na
// 3.let=change hoite pare


// condition
// 6 basic condition >,<,===,!==,<==,>==
// multiple condition &&,||
if(fatherName==='adib' || season==='rainy'){

}
else if(fatherName==='abid'){

}
else{

}

// array declare
// index [0],[1]
// length,push,pop,index
const numbers=[23,45,67,87,867,675]
numbers[1]=46

//for loop
for(let i=0;i<numbers.length;i++){
    const number=numbers[i]
    console.log(number);
}

// function
function multiply(num1,num2){
    const result=num1*num2
    return result
}
const output=multiply(34,65)

// object
//3 ways to access property by name
const student={
    name:'Afia',
    age:32,
    isActive:true,
    Movies:[
        'king khan'
    ]
}

const myVariable='age'

// console.log(student.age); direct by property
// console.log(student['age']); access via property name String
// console.log(student[myVariable]); access via property name in a variable