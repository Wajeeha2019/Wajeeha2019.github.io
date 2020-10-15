const hamBurger=document.querySelector(".hamBurger");
const nav=document.querySelector("nav");
hamBurger.addEventListener("click",function(){
    nav.style.transition= "all 0.5s ease";
    nav.style.transitionDelay="0.1s";
    nav.classList.toggle("open");
    hamBurger.classList.toggle("close");
})