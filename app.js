const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navItems');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('active');

})
// product page javascript
const productPage = document.querySelector('#product-img');
const smallImages = document.querySelectorAll('.small-img');

smallImages.forEach(smallImage =>{
    smallImage.addEventListener('click', ()=>{
        productPage.src = smallImage.src;
    })
})

// contact page

const loginForm = document.querySelector("#login-form");
const registerForm =  document.querySelector('#register-form');
const indicator =  document.querySelector('#indicator');

 const register =()=>{
     loginForm.style.transform = "translatex(0)";
     registerForm.style.transform = "translatex(0)";
     indicator.style.transform = "translatex(100px)"
 }
 const login =()=>{
     loginForm.style.transform = "translatex(100%)";
     registerForm.style.transform = "translatex(100%)";
     indicator.style.transform = "translatex(0)"
 }