const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }
  if (globalFlag.checked) {
    flags += "g";
  }
  return flags;
}

testButton.addEventListener("click", () => {
  const flags = getFlags();
  const regex = new RegExp(regexPattern.value, flags);
  const str = stringToTest.innerText;

  const isGlobal = flags.includes("g");

  let found = [];

  // збіги
  if (isGlobal) {
    const matches = [...str.matchAll(regex)];
    found = matches.map((m) => m[0]);
  } else {
    const match = str.match(regex);
    found = match ? [match[0]] : [];
  }

  // результат
  testResult.textContent = found.length ? found.join(", ") : "no match";

  // зміна кольору на зелений (підсвітка)
  const highlighted = str.replace(regex, (match) => {
    return `<span class="highlight">${match}</span>`;
  });

  stringToTest.innerHTML = highlighted;
});
