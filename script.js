const colorBtn = document.getElementById("colorBtn");

function getRandomColor() {
    const random = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return random;
}

colorBtn.addEventListener("click", () => {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    document.getElementById("colorCode").textContent = `Current Color: ${color}`;
});