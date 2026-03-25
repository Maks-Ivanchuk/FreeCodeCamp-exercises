const themes = [
  {
    name: "light",
    message: "Light theme is on!",
  },
  {
    name: "yellow",
    message: "Yellow theme is on!",
  },
  {
    name: "blue",
    message: "Blue theme is on!",
  },
  {
    name: "dark",
    message: "Dark theme is on!",
  },
];

const button = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");

button.addEventListener("click", () => {
  if (button.getAttribute("aria-expanded") === "false") {
    button.setAttribute("aria-expanded", "true");
    themeDropdown.removeAttribute("hidden");
  } else {
    button.setAttribute("aria-expanded", "false");
    themeDropdown.setAttribute("hidden", "");
  }
});

const statusTheme = document.querySelector('[aria-live="polite"]');
const body = document.querySelector("body");

themeDropdown.addEventListener("click", (e) => {
  let themeName = e.target.textContent.toLowerCase();

  themes.forEach((theme) => {
    if (theme.name === themeName) {
      body.className = `theme-${theme.name}`;
      statusTheme.textContent = `${theme.message}`;
    }
  });

  button.setAttribute("aria-expanded", "false");
  themeDropdown.setAttribute("hidden", "");
});
