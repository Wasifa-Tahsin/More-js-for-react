const products=[
    {name:'laptop',price:43000,Brand:'lenovo',color:'yellow'},
    {name:'phone',price:67000,Brand:'iphone',color:'Silver'},
    {name:'watch',price:40000,Brand:'casio',color:'golden'},
    {name:'SunGlass',price:3000,Brand:'ribon',color:'Black'},
    {name:'camera',price:4300,Brand:'canon',color:'gray'}
]
    

// map
const brands=products.map(product=>product.Brand)
console.log(brands);
const prices=products.map(product=>product.price)
console.log(prices);

// forEach
products.forEach(product=>console.log(product))
products.forEach(product=>console.log(product.color))

products.forEach(product=>{

})

// filter
const cheap=products.filter(product=>product.price<=5000)
console.log(cheap);


const specificName=products.filter(product=>product.name.includes('n'))
console.log(specificName);


// find
const match=products.find(product=>product.name.includes('n'))
console.log(match);