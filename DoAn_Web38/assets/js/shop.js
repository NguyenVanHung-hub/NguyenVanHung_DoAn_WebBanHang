// MenuMoblie

const menuHt = document.querySelector('.icon-moblie');
const menuMoblie = document.querySelector('.menu-moblie');
const menuAn = document.querySelector('.iconX');
const wrapperMenu = document.querySelector('.wrapper');
menuHt.addEventListener("click", () =>{
    menuMoblie.style.transform = "translateX(0)";
    
});
menuAn.addEventListener("click", () =>{
    menuMoblie.style.transform = "translateX(-200%)";
    
});
wrapperMenu.addEventListener("click", (event) =>{
    if(event.target.classList.contains('moblie') === false){
        menuMoblie.style.transform = "translateX(-200%)";
    }
});



// Gio Hang
const shopCart = document.querySelector('.shop-cart-product');
const addToCart = document.querySelectorAll('.button-shop');


addToCart.forEach((item) =>{
    item.addEventListener("click", () =>{
        addToCartClick(item);
    });
});
 let addToCartClick = (item) =>{
    let carItem = item.parentElement;
    
    let price = carItem.querySelector(".price").innerHTML;
    let name = carItem.querySelector(".name").innerHTML;
    let img = carItem.querySelector(".img").src;

    addItemToCart(price, name, img)    
    
 };
let proWrapRow = document.querySelector('.shop-rows');

let pushPro = [];
let addItemToCart = (price, name, img)=>{
    
    pushPro.push({
        names : name,
        prices : price,
        imgae: img
    });
    console.log(pushPro)
    // let HTML = `
    // <div class="shop-row-item">
    //    <img class="cart-img" src=${img} alt="">
    //     <span class="cart-name">${name}</span>
    // </div>
    // <span class="cart-price">${price}</span>
    // <input class="pro-qua" type="number" value="1">
    // <button class="xoa">Xoa</button>
    // `

    // let proRow = document.createElement("div");
    // proRow.classList.add("shop-row");
    

    // proRow.innerHTML = HTML;
    
    
    // proWrapRow.appendChild(proRow);
    // console.log(proWrapRow);

 };

 let HTML = ``;
 pushPro.forEach(() =>{
    HTML = HTML +`
    <div class="col-12 col-sm-6 col-md-12 shop-row">
                        
         <div class="shop-row-item">
            <img class="cart-img" src="" alt="">
             <span class="cart-name"></span>
        </div>
        <span class="cart-price"></span>
        <input class="pro-qua" type="number" value="1">
        <button class="xoa">Xoa</button>              
    </div>
    `
 });
//  proWrapRow.innerHTML = HTML;
 
