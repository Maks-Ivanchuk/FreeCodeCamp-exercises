const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

gallery.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    lightboxImage.src = e.target.src.replace("-thumbnail", "");
    lightboxImage.alt = e.target.alt;
    lightbox.style.display = "flex";
  }
});

closeBtn.addEventListener("click", (e) => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target == lightbox) lightbox.style.display = "none";
});
