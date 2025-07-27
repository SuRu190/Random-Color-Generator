const generateBtn = document.getElementById("generateBtn");
const copyHexBtn = document.getElementById("copyHexBtn");
const copyRgbBtn = document.getElementById("copyRgbBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

const colorPreview = document.getElementById("colorPreview");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const copyMsg = document.getElementById("copyMsg");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const hex = `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

  return { hex, rgb: `rgb(${r}, ${g}, ${b})` };
}

function generateColor() {
  const { hex, rgb } = getRandomColor();
  colorPreview.style.background = hex;
  hexValue.textContent = hex;
  rgbValue.textContent = rgb;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  copyMsg.textContent = "Copied!";
  setTimeout(() => (copyMsg.textContent = ""), 1500);
}

generateBtn.addEventListener("click", generateColor);
copyHexBtn.addEventListener("click", () => copyToClipboard(hexValue.textContent));
copyRgbBtn.addEventListener("click", () => copyToClipboard(rgbValue.textContent));

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Generate a random color on page load
generateColor();
