const funFacts = [
  "The average operating room temperature is kept between 20–23°C.",
  "Surgical instruments are often named after the surgeons who designed them.",
  "In cardiac surgery, the heart is sometimes stopped using cold potassium solution.",
  "Orthopaedics was originally a specialty focused on children’s bone deformities.",
  "The first documented brain surgery was over 7,000 years ago.",
  "A surgical time-out is a critical safety step before every procedure."
];

document.addEventListener("DOMContentLoaded", () => {
  const factElement = document.getElementById("funFact");
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  factElement.textContent = funFacts[randomIndex];

  document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      alert("Search function will scan site content (coming soon)");
    }
  });
});
