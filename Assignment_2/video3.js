let cart = [
    {id:1, productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2, productName:"Bardak",quantity:2,unitPrice:30},
    {id:3, productName:"Kalem",quantity:1,unitPrice:20},
    {id:4, productName:"Şarj Cihazi",quantity:2,unitPrice:100},
    {id:5, productName:"Kitap",quantity:3,unitPrice:30},
    {id:6, productName:"Pot",quantity:5,unitPrice:150}
]

// Created "price" key value considering tax and stored within a new array
let newCart = cart.map(product => {
    return {id:product.id,productName:product.productName,quantity:product.quantity,unitPrice:product.unitPrice,price:product.unitPrice*1.18}
})

// Created an array with the products that the quantity values are greather than 2
let quantityOver2 = cart.filter(product => product.quantity > 2);

// %50 discount is applied to the products that the quantity values are greather than 2
let discountCart = cart.filter(product => product.quantity > 2)
                    .map(product => {
                        return {id:product.id,productName:product.productName,quantity:product.quantity,unitPrice:product.unitPrice*0.5}
                    })

// Finds out the total price of the products within the cart
let totalPrice = cart.reduce((acc,product) => acc + product.unitPrice * product.quantity,0)
