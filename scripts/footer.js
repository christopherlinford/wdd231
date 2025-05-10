document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year") || document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const modSpan = document.getElementById("lastModified");
    if (modSpan) {
        modSpan.textContent = `Last Modified: ${document.lastModified}`;
    }
});
