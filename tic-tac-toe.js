"use strict"

/*allows immediate execution of js after page is loaded,
when the page loads a 3x3 grid game board should be diaplyed*/

window.onload = function(){
  
  //stores a list of all the divs inside a container with the id "board"
  let tiles = document.querySelectorAll("#board div");

  //sets the class of the divs to square
  for(let tile = 0; tile <= 8; tile++){
      tiles[tile].setAttribute("class", "square")
  }

}