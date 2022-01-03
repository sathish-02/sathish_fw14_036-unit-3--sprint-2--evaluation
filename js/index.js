getApi()
async function getApi(){
    try {
        var res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        var data = await res.json();
        var food = data.categories;
        displayItem(food);
        console.log(data)
    } catch (error) {
        
    }
    
}

// document.querySelector("#Count").addEventListener("click",goToCart);
// goToCart()
// function goToCart(){
//     window.location.href= "/html/cart.html";
// }

function displayItem(food){
    food.map(function(el){
        
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = el.strCategoryThumb;
        var des = document.createElement("h3");
        des.textContent= el.strCategoryDescription;
        var cate = document.createElement("h2");
        cate.textContent= el.strCategory;
        var price = document.createElement("h4");
        price.textContent= "Price : " + Math.floor((Math.random()*500)+100)

        var button = document.createElement("button");
        button.addEventListener("click", function (){
            console.log(el)
            var cartproduct = JSON.parse(localStorage.getItem("cartFoods"))||[];
            cartproduct.push(el);
            console.log(cartproduct);
            
            localStorage.setItem("cartFoods",JSON.stringify(cartproduct))
            
        })
        
        button.textContent= "Add To Cart";

        div.append(img,cate,des,price,button);
        document.querySelector(".container").append(div);

    })

}



function addToCart(el){
    

}