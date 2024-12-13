
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;


if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}
if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.ariaExpanded === "true";
      if (isOpen) {
        page.style.overflow = "hidden";
      } else {
        page.style.overflow = "";
      }
    });
  }


