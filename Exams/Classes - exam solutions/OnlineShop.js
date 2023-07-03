class OnlineShop {
constructor(warehouseSpace){
    this.space = warehouseSpace;
    this.products = [];
    this.sales = []; 
}

loadingStore(product, quantity, spaceRequired){
if(this.space <= this.spaceRequired){
    throw new Error("Not enough space in the warehouse.");
}else {
    this.products.push({product:quantity});
this.space -= spaceRequired;
return "The {product} has been successfully delivered in the warehouse." ;
}
}

quantityCheck(product, minimalQuantity){
let hasProduct = false;


for(let obj in arr){
    if(obj.hasOwnProperty(product)){
        hasProduct = true;
    }
}
if(!hasProduct){
   throw new Error("There is no {product} in the warehouse.") ;
}

if(minimalQuantity <= 0){
    throw new Error("The quantity cannot be zero or negative.");
}
}


}