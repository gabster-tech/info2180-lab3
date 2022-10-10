"use strict"

/*allows immediate execution of js after page is loaded,
when the page loads a 3x3 grid game board should be diaplyed*/

window.onload = function(){
  //empty array to keep track of the state of the game
  var board = [];
  var clicks = 9;
  
  //stores a list of all the divs inside a container with the id "board"
  let tiles = document.querySelectorAll("#board div");

  //sets the class of the divs to square
  for(let tile = 0; tile <= 8; tile++){
      tiles[tile].setAttribute("class", "square")
  }
  
//adds an X or O to a square alternatively when clicked
  for(let tile = 0; tile <= 8; tile++){
      var xo_func = function() {
          if(clicks%2==1 && tiles[tile].innerHTML==""){

              tiles[tile].setAttribute("class","square O");
              tiles[tile].innerHTML="O";
              board[tile] = "O"
              clicks--;
          }

          if(clicks%2==0 && tiles[tile].innerHTML==""){

              tiles[tile].setAttribute("class","square X");
              tiles[tile].innerHTML="X";
              board[tile] = "X"
              clicks--;
          }

      }
      tiles[tile].addEventListener('click',xo_func); 
      
      //adds hover when mouseover
        tiles[tile].addEventListener('mouseover', function (){   
            tiles[tile].classList.add("hover")
        });

        //removes hover when mouseleave
        tiles[tile].addEventListener('mouseleave', function (){   
            tiles[tile].classList.remove("hover")
        });
}
}
