let btnAll = document.querySelectorAll(".favorite-icon");

btnAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("filled");

    btn.classList.contains("filled")
      ? (btn.innerHTML = "&#10084")
      : (btn.innerHTML = "&#9825");
  });
});
