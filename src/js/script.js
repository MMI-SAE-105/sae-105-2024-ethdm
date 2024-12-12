const carouselContainer = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

let currentIndex = 0;

function updateCarousel() {
    const offset = currentIndex * -100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 2; // Loop back to the last image
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < 2) ? currentIndex + 1 : 0; // Loop back to the first image
    updateCarousel();
});

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