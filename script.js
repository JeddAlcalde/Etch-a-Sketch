let container = document.querySelector(".largeDiv");

for(let i = 0; i < 16; i++){
    let smallBox = document.createElement("div");
    smallBox.classList.add("gridbox");
    smallBox.setAttribute("id", i.toString());
    smallBox.textContent = "This is a gridbox";
    container.appendChild(smallBox);
}

let gridList = document.querySelectorAll("gridbox");

gridList.forEach(gridSquare => {
    gridSquare.addEventListener("mouseover", function(e){
        console.log(gridSquare.id)
        gridSquare.classList.add("gridbox-hover");
        gridSquare.innerText = "Hovered";
    })
});