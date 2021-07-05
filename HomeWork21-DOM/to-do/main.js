const input = document.querySelector(".input");
const button = document.querySelector(".addBtn");
const toDoList = document.querySelector(".wrapper");

let inputValue = "";
input.addEventListener("input", (event) => {
  inputValue = event.target.value;
});

// const editIcon = ` <button class="item-btn" id="edit-btn"><i class="fas fa-edit"></i></button>`;
// `<button class="item-btn" id="close-btn"><i class="fas fa-window-close"></i></button> `

button.addEventListener("click", () => {
  const toDo = document.createElement("li");
  // const deletIcon = document.createElement("fa-window-close")

const spanText = document.createElement("span")
const spanEditIcon = document.createElement("span")
const spanDeletIcon = document.createElement("span")

spanText.inneerText = input.value
spanEditIcon.innerHTML =  `<i class="fas fa-edit"></i>`;
spanDeletIcon.innerHTML =`<i class="fas fa-window-close"></i>`



  spanText.innerText = input.value;
  toDo.appendChild(spanText)
  toDo.appendChild(spanDeletIcon);
  toDo.appendChild(spanEditIcon)
  toDoList.appendChild(toDo);
  input.value = "";
  toDo.addEventListener("click", (e) => {
    spanText.classList.toggle("completed");
    console.log(e.target)
  });
});
