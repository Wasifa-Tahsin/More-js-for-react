// JSON =>stringify,parse

const student={
    name:'Afia',
    age:32,
    isActive:true,
    Movies:['king khan','pagla']
}

// const studentJSON=JSON.stringify(student)
// console.log(student)
// console.log(studentJSON);
// const studentObj=JSON.parse(studentJSON)
// console.log(studentObj);

// fetch
fetch('url')
.then(res=>res.json())
.then(data=>console.log(data))

// keys,values
const keys=Object.keys(student)
const values=Object.values(student)
// console.log(keys);
// console.log(values);

// array
const numbers=[34,57,877,6,3,324,34]
numbers.forEach(num=>console.log(num))
numbers.map(num=>num*2)

// for of=>on array like object
// loop=>on an obj using for in 


// add or remove from an array
const products=[
    {name:'laptop',price:43000,Brand:'lenovo',color:'yellow'},
    {name:'phone',price:67000,Brand:'iphone',color:'Silver'},
    {name:'watch',price:40000,Brand:'casio',color:'golden'},
    {name:'SunGlass',price:3000,Brand:'ray',color:'Black'},
    {name:'camera',price:4300,Brand:'canon',color:'gray'}
]

const newProduct={name:'webcam',price:900,brand:'lal'}

// copy products array and then add newProduct
const newProducts=[...products,newProduct]

// create a new array without one specific item
// remove phone means create a new array without phone
const remaining=products.filter(product=>product.name!=='phone')
console.log(remaining);