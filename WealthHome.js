
// Navbar toggle in mobile
const navbar = document.querySelector(".navbar");
const navToggle =document.querySelector(".nav-toggle-btn");

navToggle.addEventListener("click",()=>{
    navbar.classList.toggle("active");
})

// header scroll state

const header =document.querySelector(".header");

window.addEventListener("scroll" ,e =>{
    header.classList[window.scrollY>50?"add": "remove"]("active"); 
})

// add to favirote button toggle

const toggleBtn = document.querySelectorAll(".fav-btn");

toggleBtn.forEach(toggleBtn => {
        toggleBtn.addEventListener("click" ,()=>{
            toggleBtn.classList.toggle("active");
        });
    });