const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

function performSearch() {
    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter something to search.");
    } else {
        alert("You searched for: " + searchText);
    }
}

searchButton.addEventListener("click", performSearch);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        performSearch();
    }
});
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
function showCart() {
    alert("🛒 Your cart is currently empty.");
}