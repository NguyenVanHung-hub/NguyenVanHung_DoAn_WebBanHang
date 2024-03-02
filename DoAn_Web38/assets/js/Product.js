const data = [
    {
        "id" : 1,
        "name" : "Com Rang Cai Cam",
        "price" : "25.000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/8f1bfff1-9f88-4505-a309-11666acb-747467e0-231215133921.jpeg"
    },
    {
        "id" : 2,
        "name" : "Com Rang Hai San",
        "price" : "40.000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g119/1180780/s400x400/3d921668-0a2a-460f-8ac0-02ff1002-21d043cd-230906143726.jpeg"
    },
    {
        "id" : 3,
        "name" : "Com Rang Rua Bo",
        "price" : "30.000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/8ed4aab8-c355-421c-b2ef-75184153-4ad459cf-231215133539.jpeg"
    },
    {
        "id" : 4,
        "name" : "Com Rang Suon Sot",
        "price" : "30.000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/52735894-40a8-4de5-8824-defab69d-434685b5-231215141849.jpeg"
    },
    {
        "id" : 5,
        "name" : "Com Rang Dui Ga",
        "price" : "35.000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/9da3fc6c-e5c0-4cd7-a4df-277e699e-cb5e391f-231215134122.jpeg"
    },
    {
        "id" : 6,
        "name" : "Pho Tai",
        "price" : "30.000",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/18303c48-6083-462b-9fe2-d500b9a7-583c206b-231011123745.jpeg"
    },
    {
        "id" : 7,
        "name" : "Pho Gau",
        "price" : "40.000",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/d5b73434-1fe2-4a91-9532-89a713b2-742d7e82-231011124107.jpeg"
    },
    {
        "id" : 8,
        "name" : "Pho Tai Nam",
        "price" : "50.000",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/dd7de87d-b60c-42c9-96a8-aaf8ce6b-ab094f1d-231020012927.jpeg"
    },
    {
        "id" : 8,
        "name" : "Pho Ga Ta",
        "price" : "35.000",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/fdbbfeec-cc55-43c8-a2dc-c96a2b96-09ec7dc4-231011124619.jpeg"
    },
    {
        "id" : 9,
        "name" : "My Kim Chi Bo",
        "price" : "30.000",
        "category":"my",
        "image" :"https://images.foody.vn/res/g25/242707/s400x400/d2e8d239-fb9f-40b7-b4b8-d186597c-4862b11a-220413173408.jpeg"
    },
    {
        "id" : 10,
        "name" : "My Kim Chi Suon Sun",
        "price" : "50.000",
        "category":"my",
        "image" :"https://images.foody.vn/res/g25/242707/s400x400/5197b1a3-6386-422c-85bf-4c6b7104-b18da70f-220413183804.jpeg"
    },
    {
        "id" : 11,
        "name" : "My Kim Chi Dui Ga",
        "price" : "40.000",
        "category":"my",
        "image" :"https://images.foody.vn/res/g25/242707/s400x400/41698fe7-5fa2-4545-9ed7-4f4c5ab2-74a0f998-220413172758.jpeg"
    },
    {
        "id" : 12,
        "name" : "My Kim Chi Nam Bo Trung",
        "price" : "60.000",
        "category":"my",
        "image" :"https://images.foody.vn/res/g25/242707/s400x400/ccbeeb42-71e2-402b-bf2e-8ad9b83e-1120853a-220413173529.jpeg"
    },
    {
        "id" : 13,
        "name" : "My Kim Chi Hai San",
        "price" : "55.000",
        "category":"my",
        "image" :"https://images.foody.vn/res/g25/242707/s400x400/f53d8ac5-49a6-4ed9-8099-297bc219-5a512683-220413183940.jpeg"
    },
    {
        "id" : 14,
        "name" : "Bun Bo Hue",
        "price" : "55.000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g104/1037686/s400x400/04847146-f0c8-4247-9994-33a5151f-493673ef-201010143235.jpeg"
    },
    {
        "id" : 15,
        "name" : "Bun Vit",
        "price" : "40.000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g100007/1000061431/s400x400/1a018551-7e9a-47b6-b671-13a73776-2f3032c5-221221093903.jpeg"
    },
    {
        "id" : 16,
        "name" : "Bun Thit Nuong",
        "price" : "55.000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g2/12124/s400x400/2017113111948-hmn.jpg"
    },
    {
        "id" : 17,
        "name" : "Bun Tron",
        "price" : "50.000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g109/1081123/s400x400/3297fa15-64cc-46fa-9bd9-01e3247a-2fa8e767-220309212324.jpeg"
    },
    {
        "id" : 18,
        "name" : "Banh My Heo Quay",
        "price" : "40.000",
        "category":"banh my",
        "image" :"https://images.foody.vn/res/g75/749370/s400x400/55c4c97a-89d3-43aa-98de-8ea52e37-78b7e165-210408132613.jpeg"
    },
    {
        "id" : 19,
        "name" : "Banh My Trung",
        "price" : "30.000",
        "category":"banh my",
        "image" :"https://images.foody.vn/res/g75/749370/s400x400/a036cb2e-ea27-41e5-ad59-6a4ff080-e68a45cf-220905221026.jpeg"
    },
    {
        "id" : 20,
        "name" : "Banh My Cha",
        "price" : "35.000",
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
               <img src=${item.image} alt="">
               <div class="product-suggest-item-bottom product-item-bottom">
               <span>${item.name}</span>
               <span>${item.price}</span>
               </div>
           <div class="button-shop">
           <button>Shop Now</button>
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