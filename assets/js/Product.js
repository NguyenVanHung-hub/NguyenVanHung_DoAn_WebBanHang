const data = [
    {
        "id" : 1,
        "name" : "Cơm Rang Cải Bò",
        "price" : "25000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/8f1bfff1-9f88-4505-a309-11666acb-747467e0-231215133921.jpeg"
    },
    {
        "id" : 2,
        "name" : "Cơm Rang Hải Sản",
        "price" : "40000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g119/1180780/s400x400/3d921668-0a2a-460f-8ac0-02ff1002-21d043cd-230906143726.jpeg"
    },
    {
        "id" : 3,
        "name" : "Cơm Rang Cải Bò",
        "price" : "30000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/8ed4aab8-c355-421c-b2ef-75184153-4ad459cf-231215133539.jpeg"
    },
    {
        "id" : 4,
        "name" : "Cơm Rang Sườn Sốt",
        "price" : "30000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/52735894-40a8-4de5-8824-defab69d-434685b5-231215141849.jpeg"
    },
    {
        "id" : 5,
        "name" : "Cơm Rang Đùi Gà",
        "price" : "35000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/9da3fc6c-e5c0-4cd7-a4df-277e699e-cb5e391f-231215134122.jpeg"
    },
    {
        "id" : 6,
        "name" : "Phở Tái",
        "price" : "30000",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/18303c48-6083-462b-9fe2-d500b9a7-583c206b-231011123745.jpeg"
    },
    {
        "id" : 7,
        "name" : "Phở Gầu",
        "price" : "40000 ",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/d5b73434-1fe2-4a91-9532-89a713b2-742d7e82-231011124107.jpeg"
    },
    {
        "id" : 8,
        "name" : "Phở Tái Năm",
        "price" : "50000",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/dd7de87d-b60c-42c9-96a8-aaf8ce6b-ab094f1d-231020012927.jpeg"
    },
    {
        "id" : 8,
        "name" : "Phở Gà Ta",
        "price" : "35000",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/fdbbfeec-cc55-43c8-a2dc-c96a2b96-09ec7dc4-231011124619.jpeg"
    },
    
    {
        "id" : 12,
        "name" : "Mỳ Kim Chi Nặm Bò",
        "price" : "60000",
        "category":"my",
        "image" :"https://images.foody.vn/res/g25/242707/s400x400/ccbeeb42-71e2-402b-bf2e-8ad9b83e-1120853a-220413173529.jpeg"
    },
    {
        "id" : 13,
        "name" : "Mỳ Kim Chi Hải Sản",
        "price" : "55000",
        "category":"my",
        "image" :"https://images.foody.vn/res/g25/242707/s400x400/f53d8ac5-49a6-4ed9-8099-297bc219-5a512683-220413183940.jpeg"
    },
    {
        "id" : 14,
        "name" : "Bún Bò Huế",
        "price" : "55000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g104/1037686/s400x400/04847146-f0c8-4247-9994-33a5151f-493673ef-201010143235.jpeg"
    },
    {
        "id" : 15,
        "name" : "Bún Vịt",
        "price" : "40000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g100007/1000061431/s400x400/1a018551-7e9a-47b6-b671-13a73776-2f3032c5-221221093903.jpeg"
    },
    {
        "id" : 16,
        "name" : "Bún Thịt Nướng",
        "price" : "55000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g2/12124/s400x400/2017113111948-hmn.jpg"
    },
    {
        "id" : 17,
        "name" : "Bún Trộn",
        "price" : "50000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g109/1081123/s400x400/3297fa15-64cc-46fa-9bd9-01e3247a-2fa8e767-220309212324.jpeg"
    },
    {
        "id" : 18,
        "name" : "Bánh Mỳ Heo Quay",
        "price" : "40000",
        "category":"banh my",
        "image" :"https://images.foody.vn/res/g75/749370/s400x400/55c4c97a-89d3-43aa-98de-8ea52e37-78b7e165-210408132613.jpeg"
    },
    {
        "id" : 19,
        "name" : "Bánh Mỳ Trứng",
        "price" : "30000",
        "category":"banh my",
        "image" :"https://images.foody.vn/res/g75/749370/s400x400/a036cb2e-ea27-41e5-ad59-6a4ff080-e68a45cf-220905221026.jpeg"
    },
    {
        "id" : 20,
        "name" : "Bánh Mỳ Chả",
        "price" : "35000",
        "category":"banh my",
        "image" :"https://images.foody.vn/res/g75/749370/s400x400/5ba2c1a4-95bb-48fa-9f38-01065d7c-477a1774-220326150401.jpeg"
    },
    
];

let rowPro = document.querySelector('.row-js-pro');

let itemPerPage = 8;
let currentPage = 1;
let totalPage = 0;
const displayData = (data, page) =>{
    let HTML = ``;
    currentPage = page;
    rowPro.innerHTML = ``;

    const start = (page - 1)*itemPerPage;
    const end = start + itemPerPage;

    const itemDisplay = data.slice(start, end);
    itemDisplay.forEach((item) =>{
        HTML = HTML + `
        <div class="col-sm-6 col-md-3 col-12 ">
           <div class="product-suggest-item">
               <img src=${item.image} alt="" class="img">
               <div class="product-suggest-item-bottom product-item-bottom">
               <span class="name">${item.name}</span>
               
               </div>
           <div class="button-shop">
           <span class="price">${item.price} vnd</span>
           <button><i class="fa-solid fa-cart-shopping"></i>
           Mua</button>
           </div> 
           </div>
           
       </div>
       `
    });
    rowPro.innerHTML = HTML;
};

const createPagination = (data) =>{
    const paginationContainer = document.querySelector('#pagNums');

    paginationContainer.innerHTML = ``;
    totalPage = Math.ceil(data.length/itemPerPage);
    

    if(totalPage > 0){
        const nextBtn = document.createElement("button");
        const pretBtn = document.createElement("button");
        nextBtn.textContent="Next";
        pretBtn.textContent="Prev";
        nextBtn.classList.add("nex");
        pretBtn.classList.add("pre");
        nextBtn.addEventListener("click", () =>{
            if(totalPage >= currentPage +1){
                displayData(data, currentPage+1);
            };
            
        });
        pretBtn.addEventListener("click", () =>{
           if(0 < currentPage -1){
            displayData(data, currentPage-1);
           }
            
        });

        paginationContainer.insertAdjacentElement("beforebegin", pretBtn);
        paginationContainer.insertAdjacentElement("afterend", nextBtn);

        for(let i = 1; i <= totalPage; i++ ){
            const button = document.createElement("button"); 
            button.textContent = i;
      
            button.addEventListener("click", ()=>{
              displayData(data, i);
            })
    
            paginationContainer.appendChild(button);
            
      
          }
    }
};



(() =>{
    displayData(data, 1);
    createPagination(data);
})();



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




// const selec = document.querySelector('.orderby');
// console.log(selec.value)
// selec.forEach((item) =>{
//     console.log(item)
// })

// const changes = document.querySelectorAll('.opti').value;
// console.log(changes);


// có form gồm buttm có icon đẻ gửi dl đi
// truy cap input và buttun(sk onsubmit).
// 


// Search
const search = document.getElementById('searchs');
const buttonSearch = document.querySelector('.ic-sear');
const pre = document.querySelector('.pre');
const nex = document.querySelector('.nex');


buttonSearch.addEventListener("click", () =>{
    let dataNew = data.filter( item =>{
        return item.category.includes(search.value);
    });
    pre.remove();
    nex.remove();
    
    displayData(dataNew, 1);
    createPagination(dataNew);
});




// Select

const selectPro = document.querySelector('.orderby');

const dataAscending = data.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
const dataDescending = data.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));


selectPro.addEventListener("change", () =>{
    
    if(selectPro.value == "price"){
        pre.remove();
        nex.remove();
        displayData(dataAscending, 1);
        createPagination(dataAscending);
    };
    if(selectPro.value == "price-desc"){
        pre.remove();
        nex.remove();
        displayData(dataDescending, 1);
        createPagination(dataDescending);
    };
    if(selectPro.value == "menu-oder"){
        pre.remove();
        nex.remove();
        displayData(data, 1);
        createPagination(data);
    };
})
