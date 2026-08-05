// ==========================================
// MAIN
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio Loaded 🚀");

    if (typeof startTyping === "function") {
        startTyping();
    }

    if (typeof initScrollAnimation === "function") {
        initScrollAnimation();
    }

    if (typeof initSidebar === "function") {
        initSidebar();
    }

    if (typeof initSearch === "function") {
        initSearch();
    }

    if (typeof initCounter === "function") {
        initCounter();
    }

    if (typeof initTheme === "function") {
        initTheme();
    }

    if (typeof initMouseGlow === "function") {
        initMouseGlow();
    }

});