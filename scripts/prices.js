"use strict"
// const prices=document.querySelector("#priceCard");

const bakedGoodsPrices=[
    {name:"Chocolate croissants",
    price:35,
    productNo:1,
    available:true},
    
    {name:"Banana bread",
    price:45,
    productNo:2,
    available:true},

    {name:"Blueberry muffins",
    price:25,
    productNo:3,
    available:true},
    
    {name:"Cookies",
    price:15,
    productNo:4,
    available:true},

    {name:"Cinnamon rolls",
    price:30,
    productNo:5,
    available:true}
];

// function to get product names fom the product objects
 function getProductNames(foodobj){
    for(let i=0;i<foodobj.length;i++){
          console.log(foodobj[i].name)
            }
   }

// function to give the products on the product list  their prices
 let priceCards=document.querySelectorAll(".bakedProd");



 




// function to match the products and match with the prices
// function mathcingProductToPrice(name){
//     let product=bakedGoodsPrices

  
// }

// for(){

// }
