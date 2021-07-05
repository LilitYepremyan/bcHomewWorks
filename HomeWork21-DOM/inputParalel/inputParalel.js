const input = document.querySelector("input");
      const text = document.getElementById("values");
      input.addEventListener("keyup", showValue);
      function showValue(evt) {
        text.innerHTML = evt.target.value;
      }