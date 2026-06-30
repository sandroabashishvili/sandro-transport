document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  document.addEventListener(
    "click",
    (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute("href").slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    true,
  );

});
