var moneys=0
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
        template += `<button onclick="handleProductButton(${i})">${product.name}-$${product.price}</button>`
        
    }
    document.getElementById("buttons-container").innerHTML=template;
}
function handleProductButton(index){
    /**
     * What are my problems??
     * How do I get a vending machine to work?
     * Pushing a button without putting money in is bad
     * how much money?
     * is the product in stock?
     * change needed?
     * 
     */
    var product=getProduct(index);
    if(product.stock<=0){
        displayMessage("Sorry out of stock, Select Again...","red");
        return;
    }
    if(moneys<= product.price){
        displayMessage("Insufficient Funds", "red");
        return;
    }
    vend(product);

    if (moneys> 0){
        makeChange(moneys);
        displayMessage("Have a nice day","green");
        return;
    }
    displayMessage("Have a nice day","green");
}
function getProduct(index){
return products[index];
}

function displayMessage(msg,color){
   var msgElem =document.getElementById('msg-output')
   msgElem.textContent =msg;
   msgElem.style.color=color;

}
function vend(product){
product.stock--
moneys -=product.price;
}

function makeChange(balance){
moneys-=balance
if (moneys!==0){
    console.log("UGH something bad just occurred!")
}
//TODO: dispense change
}
drawProducts()