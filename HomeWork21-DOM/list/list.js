const li = document.querySelectorAll(".li");
li[0].addEventListener("click", () => {
  li[0].classList.add("color");
});

for (let i = 1; i < li.length; i++) {
  li[i].addEventListener("click", () => {
    if (li[i - 1].classList.contains("color")) {
      li[i].classList.add("color");
    }
  });
}
