// Accordion
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const video = item.querySelector("video");

    document.querySelectorAll(".accordion-item").forEach(other => {
      if (other !== item) {
        other.classList.remove("active");
        const v = other.querySelector("video");
        if (v) v.pause();
      }
    });

    item.classList.toggle("active");

    if (item.classList.contains("active") && video) {
      video.play();
    } else if (video) {
      video.pause();
    }
  });
});


// Traducción
const btn = document.getElementById("lang-toggle");
let currentLang = "es";

btn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  btn.textContent = currentLang === "es" ? "EN" : "ES";

  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});
