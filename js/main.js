// const elSiteNavToggler = document.querySelector("[data-sitenav-toggler]");

document.addEventListener("click", (evt) => {
  SiteNavToggle(evt);
  siteNavOutsideClick(evt);
});

// Click SitenavToggle
function SiteNavToggle(evt) {
  const el = evt.target.closest("[data-sitenav-toggler]");

  if (!el) return;

  el.classList.toggle("show");
}

function siteNavOutsideClick(evt) {
  if (
    evt.target.closest("[data-sitenav]") ||
    evt.target.closest("[data-sitenav-toggler]")
  )
    return;

  document.querySelector("[data-sitenav-toggler]").classList.remove("show");
}

// Swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
