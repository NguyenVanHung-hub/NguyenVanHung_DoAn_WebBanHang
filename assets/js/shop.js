
// Gio Hang
const cartModalOverlay = document.querySelector('.cart-modal-overlay');
const addToCart = document.querySelectorAll('.button-shop');
const cart = document.querySelector('.cart-btn');
const close = document.querySelector('#close-btn');
const gio = document.querySelector('.gio');


const getCartLocal = () =>{
  const cartItems = localStorage.getItem('cartItems');
 
  return cartItems ? JSON.parse(cartItems) : [];
};

const saveLocal = (cartItems) =>{
  localStorage.setItem("cartItems" , JSON.stringify(cartItems));
};

let cartItems = getCartLocal();


gio.addEventListener('click', () => {
  cartModalOverlay.style.transform = "translateX(0)";
});
cart.addEventListener('click', () => {
    cartModalOverlay.style.transform = "translateX(0)";
  });
  close.addEventListener('click', () => {
    cartModalOverlay.style.transform = "translateX(-200%)";
  });
  cartModalOverlay.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart-modal-overlay') === true) {
      cartModalOverlay.style.transform = "translateX(-200%)";
    }
  });

  addToCart.forEach((item, ) => {
    item.addEventListener('click', () => {
       addToCartclick(item);
    });
  })

const addToCartclick = (item) =>{
    let cartItem = item.parentElement;
    
    let price = cartItem.querySelector('.price').innerHTML;
    let imageSrc = cartItem.querySelector('.img').src;
    let name = cartItem.querySelector('.name').innerHTML;
    let isAdd = false;
    cartItems.forEach((val) => {
      if (val.imageSrc === imageSrc && val.price === price) {
        alert('San pham da co trong gio hang');
        isAdd = true;
        return;
      }
    })
    if (isAdd == false) {
      cartItems.push({
        price: price,
        imageSrc: imageSrc,
        name: name,
        quantity: 1
      });
    }
    
    saveLocal(cartItems);
    

    addItemToCart(cartItems);
    cartModalOverlay.style.transform = "translateX(0)";
};

const addItemToCart = (cartItems) =>{
    const productRows = document.querySelector('.product-rows');
    productRows.innerHTML= ` `;
  if(cartItems.length >0){
    
    cartItems.forEach((item) =>{
      let productRow = document.createElement('div');
    productRow.classList.add('product-row');
    const cartImge = document.querySelectorAll('.cart-image');
    
    productRow.innerHTML = `
      <div class="pro-shop">
        <img class="cart-image" src="${item.imageSrc}" alt="">
        <div class="pro-shop-bot">
            <span class ="cart-name">${item.name}</span>
            <span class ="cart-price">${item.price}</span>
        </div>
      </div>
      <input class="product-quantity" type="number" value="${item.quantity}">
      <button class="remove-btn">Remove</button>
    `;
    productRows.appendChild(productRow);
    })
  };
    

    removeProduct();
    chanProductValue();
    updatePrice();
};

const removeProduct = () =>{

    let btnRemove = document.querySelectorAll(".remove-btn");
    btnRemove.forEach((item) =>{
      let imageSrc = item.parentElement.querySelector('.cart-image').src;
      
        item.addEventListener("click", () =>{
            item.parentElement.remove();
            cartItems = cartItems.filter((val) => val.imageSrc !== imageSrc);
            saveLocal(cartItems);
            updatePrice();
        });
    });
};

const chanProductValue = () =>{
    const inputQuality = document.querySelectorAll('.product-quantity');
    
    inputQuality.forEach((item,index) =>{
        item.addEventListener("change", () =>{
            cartItems[index].quantity = item.value;
            saveLocal(cartItems);
            updatePrice();
        })
    })
}

const updatePrice = () =>{
    // const productRowEle = document.querySelectorAll('.product-row');
    let total = 0;
    cartItems.forEach((item) =>{
        // const priceEl = item.querySelector('.cart-price');
        const price = parseFloat(item.price.replace('vnd', ' '))
        
       
        total = total + (price * item.quantity);
        

        document.querySelector('.total-price').innerHTML = total;
        document.querySelector('.cart-quantity').innerHTML = cartItems.length;
    });
}


window.addEventListener('DOMContentLoaded', ()=>{
  const cartItems =getCartLocal();
  addItemToCart(cartItems);
});