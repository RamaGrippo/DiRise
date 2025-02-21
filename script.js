document.addEventListener("DOMContentLoaded", function () {
  const btnSubir = document.getElementById("btnSubir");
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  // Mostrar botón al hacer scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      btnSubir.classList.remove("hidden");
    } else {
      btnSubir.classList.add("hidden");
    }
  });

  // Subir al inicio al hacer clic
  btnSubir.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Alternar menú en móviles
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".download-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".plan-card");
      const pdfPath = card.getAttribute("data-pdf");
      window.location.href = pdfPath;
    });
  });
});
