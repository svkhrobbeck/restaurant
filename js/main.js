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
