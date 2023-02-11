const navToggle =document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const home = document.querySelector(".nav__menu__home");
const about = document.querySelector(".nav__menu__about");
const skill = document.querySelector(".nav__menu__skill");
const experience = document.querySelector(".nav__menu__experience");
const portfolio = document.querySelector(".nav__menu__portfolio");
const contact = document.querySelector(".nav__menu__contact");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav__menu__visible")
})

home.addEventListener("click", ()=>{
    navMenu.classList.remove("nav__menu__visible")
})
about.addEventListener("click", ()=>{
    navMenu.classList.remove("nav__menu__visible")
})
skill.addEventListener("click", ()=>{
    navMenu.classList.remove("nav__menu__visible")
})
experience.addEventListener("click", ()=>{
    navMenu.classList.remove("nav__menu__visible")
})
portfolio.addEventListener("click", ()=>{
    navMenu.classList.remove("nav__menu__visible")
})
contact.addEventListener("click", ()=>{
    navMenu.classList.remove("nav__menu__visible")
})