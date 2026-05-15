const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const setHeader = () =>
  header && header.classList.toggle("is-scrolled", window.scrollY > 12);
setHeader();
window.addEventListener("scroll", setHeader, { passive: true });
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }),
  );
}
document.querySelectorAll("[data-faq] .faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });
});
const form = document.querySelector("[data-whatsapp-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const text = [
      "Hi ShopInMysore, I want a website for my Mysore business.",
      "",
      `Name: ${data.get("name") || "-"}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Business: ${data.get("business") || "-"}`,
      `Message: ${data.get("message") || "-"}`,
    ].join("\n");
    window.open(
      `https://wa.me/919738722032?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  });
}
