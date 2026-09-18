// function toggleMenu() {

//     const Last = document.getElementById("Last");

//     Last.classList.toggle("active");

// }

const footer = document.querySelector(".Last");
const suggestBtn = document.querySelector(".bell-btn");

suggestBtn.addEventListener("click", () => {
  footer.classList.toggle("active");
});
