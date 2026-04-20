document.addEventListener("DOMContentLoaded", function () {
  const checkBtn = document.querySelector("#check-btn");
  const textInput = document.querySelector("#text-input");
  const result = document.querySelector("#result");

  const fillterStr = /[^a-z0-9]/g;

  function isPalindrome(str) {
    const clean = str.toLowerCase().replace(fillterStr, "");
    const reversed = clean.split("").reverse().join("");

    return clean === reversed;
  }

  checkBtn.addEventListener("click", () => {
    if (!textInput.value.trim()) {
      alert("Please input a value");
      result.textContent = "";
      return;
    }

    result.textContent = isPalindrome(textInput.value)
      ? `${textInput.value} is a palindrome`
      : `${textInput.value} is not a palindrome`;
    textInput.value = "";
  });
});
