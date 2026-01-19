const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    // Cerrar los demás
    document.querySelectorAll(".accordion-item").forEach(other => {
      if (other !== item) {
        other.classList.remove("active");
      }
    });

    // Abrir / cerrar el actual
    item.classList.toggle("active");
  });
});
