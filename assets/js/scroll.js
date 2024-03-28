window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu-main');
    var menuPosition = menu.getBoundingClientRect().top;
    console.log(menuPosition);

    if (menuPosition <= 0) {
        menu.classList.add('fixed-menu');
    } else {
        menu.classList.remove('fixed-menu');
    }
    if (window.scrollY === 0) {
        // Nếu đã cuộn đến đầu trang, loại bỏ lớp 'fixed-menu'
        menu.classList.remove('fixed-menu');
    }
});

document.querySelector('.scrop').addEventListener("click", function() {
    // Cuộn trình duyệt lên đầu trang với hiệu ứng mềm mại
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Tạo hiệu ứng cuộn mềm mại
    });
});
