// array destructuring
// const number=[32,45,345,88]
// const x=number[0]
// const y=number[1]
// const [x,y,...z]=[32,45,89,78]
// console.log(x,y,z)

function getValues(num1,num2){
    const nums=[num1+num2]
    return nums
}
// const [first,second]=[40,59]
const [first,second]=getValues(40,59)

// console.log(getValues(100,67));

const student={
    name:'Afia',
    age:32,
    isActive:true,
    Movies:['king khan','pagla']
}

const [firstMovie,secondMovie]=student.Movies


// object destructuring
// const {name,age} ={
// name:'alu',
// age:21
// }
// const {name,age} ={id:23,name:'alu',age:21}



const employee={
    id:'vs code',
    he:'abir',
    languages:['html','css','javascript'],
    isActive:true,
    specification:{
        height:66,
        weight:67,
        address:'Dhaka',
        drink:'water'
    }
}

const {he,id}=employee
const {weight,address}=employee.specification