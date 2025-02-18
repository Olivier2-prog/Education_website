const searchBtn = document.querySelector('.search-btn');
const navToggler = document.querySelector(".fa-bars");
const navBarList = document.querySelector(".nav-bar ul");
const searchInput = document.querySelector("#search");
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
})
/* End */



