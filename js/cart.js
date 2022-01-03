var cartProduct = JSON.parse(localStorage.getItem("cartFoods"));

displayItem(cartProduct);
function displayItem(cartProduct) {
    cartProduct.map(function (el){
        //console.log(el)
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = el.strCategoryThumb;
        
        var cate = document.createElement("h2");
        cate.textContent= el.strCategory;
       
        var price = document.createElement("h4");
        price.textContent= "Price : " + Math.floor((Math.random()*500)+100)
        //console.log(price)
        div.append(img,cate,price);
        //console.log(div)
        document.querySelector("#display").append(div)
        EventTarget.parentNode.Delete();
    })
}