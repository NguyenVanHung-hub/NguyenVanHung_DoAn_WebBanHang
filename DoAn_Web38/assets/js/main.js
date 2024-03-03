
// // Section
// const plusCkick = document.querySelectorAll('.plus-click');
// const minusClick = document.querySelectorAll('.minus-click');
// const accordionBottom = document.querySelectorAll('.accordion-bottom');
// const mau = document.querySelector('#mau');
// const plus = document.querySelectorAll('.plus');
// const minus = document.querySelectorAll('.minus');
// // Hien Thi accordion

// plusCkick.forEach((item,) =>{
//     item.addEventListener("click",() =>{
//         plusHt();
//         minusHt();
//         hienThi();
        
//     })
// });

// let hienThi = () =>{
//     accordionBottom.forEach((item,) =>{
//         item.style.display = "block";
//         console.log()
//     });
// };
// let plusHt = () =>{
//     plus.forEach((item) =>{
//         item.style.display = "none"
//     });
// };

// let minusHt = () =>{
//     minus.forEach((item) =>{
//         item.style.display = "block"
//     });
// };


// // An accordion
// minusClick.forEach((item) =>{
//     item.addEventListener("click",() =>{
//         plusA();
//         minusA();
//         an();
        
//     })
// });

// let an = () =>{
//     accordionBottom.forEach((item) =>{
//         item.style.display = "none";
//     });
// };
// let plusA = () =>{
//     plus.forEach((item) =>{
//         item.style.display = "block"
//     });
// };

// let minusA = () =>{
//     minus.forEach((item) =>{
//         item.style.display = "none"
//     });
// };


const plusClick = document.querySelectorAll('.plus');
const minusClick = document.querySelectorAll('.minus');
const accordionBottom = document.querySelectorAll('.accordion-bottom');

plusClick.forEach((item, index) => {
    item.addEventListener("click", () => {

        // kiểm tra xe item hiện tại đã có chứa class là active tức là đã hiển thì hay chưa
        // Nếu mặc định có thì nó sẻ chạy vào case và xóa class đó đi. vì yêu cầu đề bài ko active cái nào cả mà ẩn hêt
        // style tùy biến theo vị trí item đó
        if (accordionBottom[index].classList.contains('active')) {
            accordionBottom[index].classList.remove('active');
        }
        // Còn ko nó sẻ chạy vào đây và thêm các class . mặc định nút dấu trừ nó sẻ đè lên nút cộng
        else {
         
            accordionBottom[index].classList.add('active');
            minusClick[index].classList.add('active');
        
        }

    });
});

minusClick.forEach((item, index) => {
    item.addEventListener("click", () => {
        // xử lý khi click vào nút minus tại vị trí item index 
        console.log(item, index);
        if (minusClick[index].classList.contains('active')) {
            minusClick[index].classList.remove('active');
            accordionBottom[index].classList.remove('active');
        }

    });
});

