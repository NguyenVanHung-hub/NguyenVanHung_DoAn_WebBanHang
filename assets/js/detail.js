const data = [
    {
        "id" : 1,
        "name" : "Cơm Rang Cải Bò",
        "price" : "25000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/8f1bfff1-9f88-4505-a309-11666acb-747467e0-231215133921.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 2,
        "name" : "Cơm Rang Hải Sản",
        "price" : "40000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g119/1180780/s400x400/3d921668-0a2a-460f-8ac0-02ff1002-21d043cd-230906143726.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 3,
        "name" : "Cơm Rang Cải Bò",
        "price" : "30000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/8ed4aab8-c355-421c-b2ef-75184153-4ad459cf-231215133539.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 4,
        "name" : "Cơm Rang Sườn Sốt",
        "price" : "30000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/52735894-40a8-4de5-8824-defab69d-434685b5-231215141849.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 5,
        "name" : "Cơm Rang Đùi Gà",
        "price" : "35000",
        "category":"com rang",
        "image" :"https://images.foody.vn/res/g100008/1000072631/s400x400/9da3fc6c-e5c0-4cd7-a4df-277e699e-cb5e391f-231215134122.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 6,
        "name" : "Phở Tái",
        "price" : "30000",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/18303c48-6083-462b-9fe2-d500b9a7-583c206b-231011123745.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 7,
        "name" : "Phở Gầu",
        "price" : "40000 ",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/d5b73434-1fe2-4a91-9532-89a713b2-742d7e82-231011124107.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 8,
        "name" : "Phở Tái Năm",
        "price" : "50000",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/dd7de87d-b60c-42c9-96a8-aaf8ce6b-ab094f1d-231020012927.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 8,
        "name" : "Phở Gà Ta",
        "price" : "35000",
        "category":"pho",
        "image" :"https://images.foody.vn/res/g100008/1000070824/s400x400/fdbbfeec-cc55-43c8-a2dc-c96a2b96-09ec7dc4-231011124619.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    
    {
        "id" : 12,
        "name" : "Mỳ Kim Chi Nặm Bò",
        "price" : "60000",
        "category":"my",
        "image" :"https://images.foody.vn/res/g25/242707/s400x400/ccbeeb42-71e2-402b-bf2e-8ad9b83e-1120853a-220413173529.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 13,
        "name" : "Mỳ Kim Chi Hải Sản",
        "price" : "55000",
        "category":"my",
        "image" :"https://images.foody.vn/res/g25/242707/s400x400/f53d8ac5-49a6-4ed9-8099-297bc219-5a512683-220413183940.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 14,
        "name" : "Bún Bò Huế",
        "price" : "55000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g104/1037686/s400x400/04847146-f0c8-4247-9994-33a5151f-493673ef-201010143235.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 15,
        "name" : "Bún Vịt",
        "price" : "40000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g100007/1000061431/s400x400/1a018551-7e9a-47b6-b671-13a73776-2f3032c5-221221093903.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 16,
        "name" : "Bún Thịt Nướng",
        "price" : "55000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g2/12124/s400x400/2017113111948-hmn.jpg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 17,
        "name" : "Bún Trộn",
        "price" : "50000",
        "category":"bun",
        "image" :"https://images.foody.vn/res/g109/1081123/s400x400/3297fa15-64cc-46fa-9bd9-01e3247a-2fa8e767-220309212324.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 18,
        "name" : "Bánh Mỳ Heo Quay",
        "price" : "40000",
        "category":"banh my",
        "image" :"https://images.foody.vn/res/g75/749370/s400x400/55c4c97a-89d3-43aa-98de-8ea52e37-78b7e165-210408132613.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 19,
        "name" : "Bánh Mỳ Trứng",
        "price" : "30000",
        "category":"banh my",
        "image" :"https://images.foody.vn/res/g75/749370/s400x400/a036cb2e-ea27-41e5-ad59-6a4ff080-e68a45cf-220905221026.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    {
        "id" : 20,
        "name" : "Bánh Mỳ Chả",
        "price" : "35000",
        "category":"banh my",
        "image" :"https://images.foody.vn/res/g75/749370/s400x400/5ba2c1a4-95bb-48fa-9f38-01065d7c-477a1774-220326150401.jpeg",
        "mota": "Đây là món ăn ngon, đậm vị. Thông qua tay nghề của đầu bếp sẽ giúp thức khách cảm nhận rõ hơn về mon ăn nay của đất nước Việt Nam"
    },
    
];
const detail = document.querySelector('.product-datail');
const detailLq = document.querySelector('.product-lq');


document.addEventListener("DOMContentLoaded", function() {
    // Lấy tham số id từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')); // Parse to integer
    
    console.log(productId);

    let dataNew = data.find(item => item.id === productId);
    let dataNe = data.filter( item =>{
        return item.category.includes(dataNew.category);
    });
    console.log(dataNe)
    
    // Kiểm tra xem sản phẩm có tồn tại không
    if (dataNew) {
        // Nếu sản phẩm tồn tại, hiển thị thông tin chi tiết
        
        detail.innerHTML = `
        <h2>Thông tin sản phẩm</h2>
        <div class="datail-item">
            <div class="datail-pro-left">
                <img src="${dataNew.image}" alt="">
                <div class="deta-pro-left-item">
                    <span>${dataNew.name}</span>
                    <span>${dataNew.price} vnd</span>
                </div>
            </div>
            <div class="datail-pro-right">
                <h3> Mô Tả</h3>
                <span> ${dataNew.mota}
                </span>
            </div>
        </div>
        
        `;
           
        
    }
    else {
        // Nếu không tìm thấy sản phẩm, hiển thị thông báo lỗi
        
        detail.innerHTML = `<p>Product not found!</p>`;
    }
});
