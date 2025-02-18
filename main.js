const searchBtn = document.querySelector('.search-btn');
const navToggler = document.querySelector(".fa-bars");
const navBarList = document.querySelector(".nav-bar ul");
const searchInput = document.querySelector("#search");
const header = document.querySelector(".header");
/* Adding event listener */
navToggler.addEventListener('click', function () {
    navBarList.classList.toggle("show-nav");
});
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    searchInput.classList.toggle("toggle-input");
})
window.addEventListener("scroll", function () {
    navBarList.classList.remove("show-nav");
    searchInput.classList.remove("toggle-input");
});
window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;  
    const headerHeight = header.offsetHeight;
    if (scrollTop > 160) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");

    }
});
/* End */



