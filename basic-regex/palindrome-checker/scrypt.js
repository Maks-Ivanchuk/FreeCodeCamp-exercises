document.addEventListener("DOMContentLoaded", function () {
  const checkBtn = document.querySelector("#check-btn");
  const textInput = document.querySelector("#text-input");

  function checkInputFilled() {
    if (textInput.value.length == 0) alert("Ведіть текст");
  }

  checkBtn.addEventListener("click", checkInputFilled);
});
