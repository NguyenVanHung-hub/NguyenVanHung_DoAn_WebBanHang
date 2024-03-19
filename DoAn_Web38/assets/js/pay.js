let pay = document.querySelector('.pay-right-pro');

const getCartLocal = () =>{
    const cartItems = localStorage.getItem('cartItems');
   
    return cartItems ? JSON.parse(cartItems) : [];
  };
  
const cartItems = getCartLocal();
let HTML = ` `;
cartItems.forEach((item) => {
    HTML += `
    
       
            <div class="pay-right-item">
                <div class="pay-right-img">
                    <img src="${item.imageSrc}" alt="">
                </div>
                <div class="pay-right-tex">
                    <span class="pay-tex-name">${item.name}</span>
                    <span class="pay-tex-name">Gia: ${item.price}</span>
                    <span>So Luong: ${item.quantity}</span>
                    
                </div>
                
                
            </div>
        
       
    
    `
});
pay.innerHTML = HTML;
const updatePrice = () =>{
    // const productRowEle = document.querySelectorAll('.pay-right-item');
    let total = 0;
    cartItems.forEach((item) =>{
        // const priceEl = item.querySelector('.cart-price');
        const price = parseFloat(item.price.replace('vnd', ' '))
        
       
        total = total + (price * item.quantity);
        
        
        document.querySelector('.total-pric').innerHTML = total +" " + "vnd";
        
    });
}
updatePrice();

// Menu 

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