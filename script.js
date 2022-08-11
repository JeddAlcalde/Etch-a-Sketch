const container = document.querySelector(".largeDiv");

for(let i = 0; i < 16; i++){
    let smallBox = document.createElement("div");
    smallBox.classList.add("gridbox");
    smallBox.setAttribute("id", i.toString());
    console.log(i.toString());
    smallBox.textContent = "This is a gridbox";
    
    smallBox.addEventListener("mouseover" ,function(e){
        console.log(smallBox.id);
        smallBox.classList.add("gridbox-hover");
        smallBox.innerText = "hovered";
    })

    container.appendChild(smallBox);
}