const funFacts = [
  "The average operating room temperature is kept between 20–23°C.",
  "Surgical instruments are often named after the surgeons who designed them.",
  "In cardiac surgery, the heart is sometimes stopped using cold potassium solution.",
  "Orthopaedics was originally a specialty focused on children’s bone deformities.",
  "The first documented brain surgery was over 7,000 years ago.",
  "A surgical time-out is a critical safety step before every procedure.", 
  "The first successful human organ transplant was a kidney transplant in 1954 between identical twins.", 
"In 1804, Hanaoka Seishū in Japan performed surgery under general anesthesia—40 years before it was common in the West.",
"The average heart surgery can require over 1,000 individual surgical instruments and supplies.", 
"The 'surgical timeout' is a safety ritual used to confirm patient identity, procedure, and site before surgery begins.", 
"The world’s first face transplant was performed in France in 2005.", 
"Modern electrosurgery was developed by Dr. William T. Bovie in the 1920s—hence the nickname 'the bovie' for the cautery pencil.", 
"Sterile blue drapes and gowns are used because blue is opposite red on the color wheel—making blood stains less distracting.", 
"Surgeons often train with virtual reality and simulation before performing real procedures.", 
"Orthopaedic surgeons were originally called 'bone setters'.", 
"Operating rooms are kept cold to reduce the risk of bacterial growth.", 
"The term 'OR' stands for 'Operating Room', and in some countries it’s often called 'Theatre'.", 
"Many surgical instruments today are still named after their inventors, like the Kelly clamp or DeBakey forceps.",
"The average surgical glove has a shelf life of about 3 years.", 
"Scrub nurses count instruments and accountable items before and after every surgery to ensure nothing is left inside the patient."
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

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  // Inline index of pages (you can add more here)
  const pages = [
    {
      title: "Home",
      url: "index.html",
      content: "Welcome to ScrubScout — your free resource for learning surgical nursing."
    },
    {
      title: "Contact and Privacy Policy",
      url: "contact-and-privacy-policy.html",
      content: "Get in touch. View our privacy policy and disclaimer."
    },
    {
      title: "Cardiac: Ross Procedure",
      url: "specialties/cardiac/ross-procedure.html",
      content: "Ross procedure: aortic valve replacement using the patient's pulmonary valve. Scrub nurse instruments, setup, and technique."
    },
    {
      title: "Orthopaedics: Zimmer Total Hip Replacement",
      url: "specialties/orthopaedics/zimmer-thr.html",
      content: "Zimmer total hip arthroplasty for scrub nurses in Australia — instruments, positioning, step-by-step breakdown."
    },
    
    // Add more pages as needed
  ];
  
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (query.length < 2) return;

    const filtered = pages.filter(page =>
      page.title.toLowerCase().includes(query) || 
      page.content.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      searchResults.innerHTML = "<li>No results found.</li>";
      return;
    }

    filtered.forEach(page => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${page.url}">${page.title}</a>`;
      searchResults.appendChild(li);
    });
  });
});
