document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll en enlaces del navbar
  document.querySelectorAll("nav a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const navbarHeight = document.querySelector("nav").offsetHeight;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 84,
          behavior: "smooth",
        });
      }
    });
  });
});

// Función para igualar alturas de tarjetas
function igualarAlturas() {
  const tarjetas = document.querySelectorAll(".plan-card");
  if (tarjetas.length === 0) return;

  let maxAltura = 0;
  tarjetas.forEach((tarjeta) => {
    tarjeta.style.height = "auto";
    maxAltura = Math.max(maxAltura, tarjeta.offsetHeight);
  });

  tarjetas.forEach((tarjeta) => {
    tarjeta.style.height = `${maxAltura}px`;
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  const btn = document.getElementById("btnScrollTop");
  if (window.scrollY > 300) {
    // Aparece después de 300px de scroll
    btn.classList.add("mostrar");
  } else {
    btn.classList.remove("mostrar");
  }
});

document.querySelectorAll(".servicios-item").forEach((item) => {
  const video = item.querySelector("video");

  item.addEventListener("mouseenter", () => {
    video.play(); // Reproduce el video al hacer hover
  });

  item.addEventListener("mouseleave", () => {
    video.pause(); // Pausa el video cuando el mouse se va
    video.currentTime = 0; // Reinicia el video
  });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("active");
});
