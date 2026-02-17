// =========================
// Inicialización AOS
// =========================
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-out-cubic",
});

// =========================
// GSAP - Animaciones iniciales
// =========================
gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".hero h1, .page-header h1", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: "power3.out",
});

gsap.from(".hero p, .page-header p", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.7,
  ease: "power3.out",
});

gsap.from(".hero .btn, .page-header .btn", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "power3.out",
});

// =========================
// GSAP - Animaciones al hacer scroll
// =========================
gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

// =========================
// EmailJS - Envío de formulario
// =========================
(function () {
  emailjs.init("xVwdbB46eyW5LrqW4"); // Reemplazá con tu Public Key real
})();

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formStatus.innerHTML = "<span class='text-info'>Enviando mensaje...</span>";

    emailjs.sendForm("service_lpndc49", "template_qj19ozw", this).then(
      function () {
        formStatus.innerHTML =
          "<span class='text-success'>Mensaje enviado correctamente. Nos contactaremos a la brevedad.</span>";
        contactForm.reset();
      },
      function (error) {
        console.error("EmailJS error:", error);
        formStatus.innerHTML =
          "<span class='text-danger'>Error al enviar el mensaje. Intente nuevamente.</span>";
      }
    );
  });
}

// =========================
// Efecto hover GSAP en cards
// =========================
gsap.utils.toArray(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
