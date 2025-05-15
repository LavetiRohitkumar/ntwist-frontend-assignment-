if (confirmation) {
  confirmation.textContent = `Application submitted successfully in ${timeSpent} seconds.`;
  if (selectedRating && selectedRating > 0) {
    confirmation.textContent += ` You rated us ${selectedRating} star${
      selectedRating > 1 ? "s" : ""
    }.`;
  }
  confirmation.classList.remove("hidden");
}
