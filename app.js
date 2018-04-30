var products = [{
    name: "Mt Dew",
    price: .75,
    stock: 17
},{
    name: "Flaming Hot Cheetos con Limon",
    price:1.75,
    stock:2

}]

function drawProducts(){
    var template=""
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        template += `<button onclick="purchaseProduct(${i})">${product.name}-$${product.price}</button>`
        
    }
    document.getElementById("buttons-container").innerHTML=template;
}
function onProductPush(index){
    /**
     * What are my problems??
     * How do I get a vending machine to work?
     * Pushing a button without putting money in is bad
     * how much money?
     * is the product in stock?
     * change needed?
     * 
     */
}