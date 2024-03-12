
// Gio Hang
const cartModalOverlay = document.querySelector('.cart-modal-overlay');
const addToCart = document.querySelectorAll('.button-shop');
const cart = document.querySelector('.cart-btn');
const close = document.querySelector('#close-btn');


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
    addItemToCart(name, imageSrc, price);
    cartModalOverlay.style.transform = "translateX(0)";
};

const addItemToCart = (name, imageSrc, price) =>{
    const productRows = document.querySelector('.product-rows');
    let productRow = document.createElement('div');
    productRow.classList.add('product-row');
    const cartImge = document.querySelectorAll('.cart-image');
    let isAdd = false;
    cartImge.forEach((val) => {
      if (val.src == imageSrc) {
        alert('San pham da co trong gio hang');
        isAdd = true;
        return;
      }
    })
    if (isAdd) {
      return
    }
    productRow.innerHTML = `
      <div class="pro-shop">
        <img class="cart-image" src="${imageSrc}" alt="">
        <div class="pro-shop-bot">
            <span class ="cart-name">${name}</span>
            <span class ="cart-price">${price}</span>
        </div>
      </div>
      <input class="product-quantity" type="number" value="1">
      <button class="remove-btn">Remove</button>
    `;

    productRows.appendChild(productRow);

    removeProduct();
    chanProductValue();
    updatePrice();
};

const removeProduct = () =>{
    let btnRemove = document.querySelectorAll(".remove-btn");
    btnRemove.forEach((item) =>{
        item.addEventListener("click", () =>{
            item.parentElement.remove();
            updatePrice();
        });
    });
};

const chanProductValue = () =>{
    const inputQuality = document.querySelectorAll('.product-quantity');
    inputQuality.forEach((item) =>{
        item.addEventListener("change", () =>{
            updatePrice();
        })
    })
}

const updatePrice = () =>{
    const productRowEle = document.querySelectorAll('.product-row');
    let total = 0;
    productRowEle.forEach((item) =>{
        const priceEl = item.querySelector('.cart-price');
        const price = parseFloat(priceEl.innerHTML.replace('vnd', ' '))
        const quantity = item.querySelector('.product-quantity').value;
       
        total = total + (price * quantity);
        

        document.querySelector('.total-price').innerHTML = total;
        document.querySelector('.cart-quantity').innerHTML = productRowEle.length;
    });
}

