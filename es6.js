const numbers=[23,45,67,87,867,675]

const student={
    name:'Afia',
    age:32,
    isActive:true,
    Movies:[
        'king khan'
    ]
}

// template string
const about=`My name is ${student.Movies[0]} has number ${numbers[2]}`
console.log(about)

// arrow function
const getFiftyFive=()=>55
const addSixtyFive=num=>num+65;
const isEven=x=>x%2==0;
const addThree=(x,y,z)=>x+y+z;
const doMath=(num1,num2)=>{
    const sum=num1+num2
    return sum
}



// spread operator
const newNumbers=[...numbers]
numbers.push(99)
console.log(newNumbers)


// create an new array from an older array and add an element
const currentNumbers=[...numbers,77]
console.log(currentNumbers);