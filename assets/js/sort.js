const sortBtn = document.getElementById("sortBtn");

if (sortBtn) {
  sortBtn.addEventListener("click", () => {
    const list = document.getElementById("namesList");
    if (list) {
      const items = Array.from(list.getElementsByTagName("li"));
      const sortedItems = items.sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
      );
      list.innerHTML = "";
      sortedItems.forEach((item) => list.appendChild(item));
    }
  });
}
