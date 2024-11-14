const searchButton = document.querySelector(".search-hotel-button");
const modal = document.querySelector(".overlay");
const modalCloseButton = document.querySelector(".modal-close-button");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.remove("overlay-hidden");
})

modalCloseButton.addEventListener("click", () => {
  modal.classList.add("overlay-hidden");
})
