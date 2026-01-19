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
