const header = document.getElementById("header");

function handlescroll() {
  if (window.scrollY > 24) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
}
handlescroll();
window.addEventListener("scroll", handlescroll, { passive: true });
