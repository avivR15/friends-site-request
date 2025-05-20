//שינוי שפה
let currentLang = "en";

function toggleLanguage() {
    currentLang = currentLang === "en" ? "he" : "en";

    const translatables = document.querySelectorAll("[data-en][data-he]");
    translatables.forEach(el => {
        el.textContent = el.dataset[currentLang];
    });

    // עדכון הטקסט של כפתור השפה
    const langBtn = document.querySelector(".langBtn");
    langBtn.textContent = currentLang === "en" ? "עברית" : "English";
}


//החלפה למצב בהירות
function darkModeSwitch() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
