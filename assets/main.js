const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
}
document.querySelectorAll("#year").forEach((el) => el.textContent = new Date().getFullYear());

const interestSelect = document.querySelector("#interest");
if (interestSelect) {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("interest");
  if (requested) {
    const option = [...interestSelect.options].find((opt) => opt.text.toLowerCase() === requested.toLowerCase());
    if (option) interestSelect.value = option.value;
  }
}
