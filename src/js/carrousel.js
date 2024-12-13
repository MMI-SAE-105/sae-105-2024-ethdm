const carousel = document.querySelector(".carousel_ecran");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel && prevButton && nextButton) {
  const items = document.querySelectorAll(".items_carousel");
  const itemWidth = items[0].clientWidth;

  
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
  });
}