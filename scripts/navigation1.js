document.addEventListener("DOMContentLoaded", () => {
    const hamButton = document.querySelector("#menu") || document.querySelector("#menuBtn");
    const nav = document.querySelector("nav") || document.getElementById("primaryNav");

    if (hamButton && nav) {
        hamButton.addEventListener("click", () => {
            nav.classList.toggle("open");
            hamButton.classList.toggle("open");
        });
    }
});
