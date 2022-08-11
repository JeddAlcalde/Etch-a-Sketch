let container = document.querySelector(".largeDiv");

for(let i = 0; i < 16; i++){
    let smallBox = document.createElement("div");
    smallBox.classList.add("gridbox");
    smallBox.textContent = "This is a gridbox";
    container.appendChild(smallBox)
}