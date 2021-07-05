const left = document.querySelector(".left");
const right = document.querySelector(".right");

const slides = document.querySelectorAll("img");
let i = 0;

left.addEventListener("click", () => {
  if (i === 0) {
    slides[i].classList.remove("block");
    i = slides.length - 1;
    slides[i].classList.add("block");
  } else {
    slides[i].classList.remove("block");
    i--;
    slides[i].classList.add("block");
  }
});

right.addEventListener("click", () => {
  if (i === slides.length - 1) {
    slides[i].classList.remove("block");
    i = 0;
    slides[i].classList.add("block");
  } else {
    slides[i].classList.remove("block");
    i++;
    slides[i].classList.add("block");
  }
});

setInterval(() => {
  if (i === slides.length - 1) {
    slides[i].classList.remove("block");
    i = 0;
    slides[i].classList.add("block");
  } else {
    slides[i].classList.remove("block");
    i++;
    slides[i].classList.add("block");
  }
}, 1000);
