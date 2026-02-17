/* ===============================
   ESTUDIO ADUANERO LD
   Script principal
================================ */


/* ===============================
   LOAD COMPONENTS
================================ */

async function loadComponent(id, file)
{
    try
    {
        const response = await fetch(file);

        if (!response.ok)
        {
            throw new Error(`Error cargando ${file}`);
        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;
    }
    catch (error)
    {
        console.error(error);
    }
}



/* ===============================
   LOAD NAVBAR + FOOTER
================================ */

document.addEventListener("DOMContentLoaded", async () =>
{
    await loadComponent("navbar", "/components/navbar.html");
    await loadComponent("footer", "/components/footer.html");

    initMobileMenu();
    initNavbarScroll();
});



/* ===============================
   MOBILE MENU
================================ */

function initMobileMenu()
{
    const btn = document.getElementById("menu-btn");

    if (!btn) return;

    btn.addEventListener("click", () =>
    {
        const menu = document.getElementById("mobile-menu");

        if (!menu) return;

        menu.classList.toggle("hidden");
    });
}



/* ===============================
   NAVBAR SCROLL EFFECT
================================ */

function initNavbarScroll()
{
    const navbar = document.querySelector(".navbar-premium");

    if (!navbar) return;

    window.addEventListener("scroll", () =>
    {
        if (window.scrollY > 50)
        {
            navbar.classList.add("navbar-scrolled");
        }
        else
        {
            navbar.classList.remove("navbar-scrolled");
        }
    });
}



/* ===============================
   FADE IN ANIMATION ON SCROLL
================================ */

const observer = new IntersectionObserver((entries) =>
{
    entries.forEach(entry =>
    {
        if (entry.isIntersecting)
        {
            entry.target.classList.add("animate-fade-in");
        }
    });

}, { threshold: 0.1 });



document.querySelectorAll(".card-premium, .section-title")
.forEach(el =>
{
    observer.observe(el);
});
