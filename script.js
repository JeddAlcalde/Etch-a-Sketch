const container = document.querySelector(".largeDiv");

const restart = document.createElement("button");
restart.innerText = "Restart";
restart.addEventListener("click", function(e){
    //prompts user to give a number
    let newGridCount = prompt("How many squares would you like per side? (Less than 100)").parseInt();

    //loop to "erase all grids"
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < newGridCount; i++){
        let smallBox = document.createElement("div");
        smallBox.classList.add("gridbox");
        smallBox.setAttribute("id", newGridCount.toString());
        console.log(i.toString());
        
        smallBox.addEventListener("mouseover" ,function(e){
            console.log(smallBox.id);
            smallBox.classList.add("gridbox-hover");
        })
    
        container.appendChild(smallBox);
    }
})



for(let i = 0; i < 16; i++){
    let smallBox = document.createElement("div");
    smallBox.classList.add("gridbox");
    smallBox.setAttribute("id", i.toString());
    console.log(i.toString());
    
    smallBox.addEventListener("mouseover" ,function(e){
        console.log(smallBox.id);
        smallBox.classList.add("gridbox-hover");
    })

    container.appendChild(smallBox);
}