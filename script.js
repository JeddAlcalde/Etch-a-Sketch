const container = document.querySelector(".largeDiv");

const restart = document.createElement("button");
restart.innerText = "Restart";
restart.addEventListener("click", function(e) {
    //prompts user to give a number
    let newGridCount = parseInt(prompt("How many squares would you like per side? (Less than 100)"));
    console.log(newGridCount);

    //loop to "erase all grids"
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    newGame(newGridCount);
    container.append(restart);
})

function newGame(gridCount){
    for(let i = 0; i < gridCount; i++){
        let smallBox = document.createElement("div");
        smallBox.classList.add("gridbox");
        smallBox.setAttribute("id", i.toString());
        
        smallBox.addEventListener("mouseover" ,function(e){
            smallBox.classList.add("gridbox-hover");
        })
    
        container.appendChild(smallBox);
    }
}

newGame(448);

container.append(restart);