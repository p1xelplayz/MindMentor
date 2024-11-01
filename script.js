// Preloader
window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Toggle Menu
function toggleMenu() {
    document.querySelector(".menu-items").classList.toggle("active");
}

// Accordion Toggle
function toggleAccordion(element) {
    const nextElement = element.nextElementSibling;
    nextElement.style.display = nextElement.style.display === "block" ? "none" : "block";
}
