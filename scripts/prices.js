"use strict"

// object that has baked goods prices
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
          return foodobj[i].name;
            }
   }

getProductNames(bakedGoodsPrices)


// this function gets the all the prodcut names from the document and lists them
function bakedProductList(){
let docProductNames=document.querySelectorAll('.bakedProd');// this takes all  the document's bakedproduct names and stores them in an array

 docProductNames.forEach(bakedProductName=>{
    const allProducts=(bakedProductName.textContent.trim());
    return(allProducts);
 })
 //  this arrow foreach function takes all the data in the products array and list them out
};
bakedProductList();


