/* LOADER */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader)
loader.style.display = "none";

});


/* NAVBAR SCROLL */

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar-premium");

if(!navbar) return;

if(window.scrollY > 50)
navbar.classList.add("navbar-scrolled");
else
navbar.classList.remove("navbar-scrolled");

});


/* LOAD COMPONENTS */

async function loadComponent(id, file){

const el = document.getElementById(id);

if(!el) return;

try{

const res = await fetch(file);
const html = await res.text();
el.innerHTML = html;

}catch(e){

console.error("Error loading component:", file);

}

}


loadComponent("navbar", "/components/navbar.html");
loadComponent("footer", "/components/footer.html");


/* ANIMATION ON SCROLL */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting)
entry.target.classList.add("animate-show");

});

});

document.querySelectorAll(".card-premium").forEach(el => {

observer.observe(el);

});

document.addEventListener("click", function(e){

if(e.target.closest("#menu-btn")){

const menu = document.getElementById("mobile-menu");

menu.classList.toggle("hidden");

}

});
