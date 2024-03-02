
// Section
const plusCkick = document.querySelectorAll('.plus-click');
const minusClick = document.querySelectorAll('.minus-click');
const accordionBottom = document.querySelectorAll('.accordion-bottom');
const mau = document.querySelector('#mau');
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
// Hien Thi accordion
plusCkick.forEach((item) =>{
    item.addEventListener("click",() =>{
        plusHt();
        minusHt();
        hienThi();
        
    })
});

let hienThi = () =>{
    accordionBottom.forEach((item) =>{
        item.style.display = "block";
    });
};
let plusHt = () =>{
    plus.forEach((item) =>{
        item.style.display = "none"
    });
};

let minusHt = () =>{
    minus.forEach((item) =>{
        item.style.display = "block"
    });
};


// An accordion
minusClick.forEach((item) =>{
    item.addEventListener("click",() =>{
        plusA();
        minusA();
        an();
        
    })
});

let an = () =>{
    accordionBottom.forEach((item) =>{
        item.style.display = "none";
    });
};
let plusA = () =>{
    plus.forEach((item) =>{
        item.style.display = "block"
    });
};

let minusA = () =>{
    minus.forEach((item) =>{
        item.style.display = "none"
    });
};

const seRight = document.querySelector('.section-right');
seRight.addEventListener("click", (e) =>{
    console.log(e.target.classList.contains('section-right'))
})