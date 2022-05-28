document.addEventListener('DOMContentLoaded',() => {
    var gridvalue = document.getElementById("grid")
    const width = 4
    let squares = []
     function createBoard(){
         for(let i=0;i<width*width;i++){
             square = document.createElement("div")
             square.innerHTML= 0
             gridvalue.appendChild(square)
             squares.push(squares)
         }
     }
     createBoard()
})