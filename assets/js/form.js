let startTime;
const form = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");

if (form) {
  form.addEventListener("focusin", () => {
    if (!startTime) {
      startTime = Date.now();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const timeSpent = Math.floor((Date.now() - startTime) / 1000);

    confirmation.textContent = `Application submitted successfully! Time spent: ${timeSpent} seconds.`;
    confirmation.classList.remove("hidden");

    form.reset();
    startTime = null;
  });
}
