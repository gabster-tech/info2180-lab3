"use strict"

/*allows immediate execution of js after page is loaded,
when the page loads a 3x3 grid game board should be diaplyed*/

window.onload = function(){
  //empty array to keep track of the state of the game
  var board = [];
  var clicks = 9;
  var win_combs = [[0, 1, 2], [3, 4, 5],[6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]
  var status = "No winner"
  var restart = document.getElementsByClassName("btn");
  var refresh =  function(){
    location.reload();
  }

  //stores a list of all the divs inside a container with the id "board"
  let tiles = document.querySelectorAll("#board div");

  function checkWinner(){
    for(let t=0; t < 8; t++){
      if(board[win_combs[t][0]] == 'X' && board[win_combs[t][1]] == 'X' && board[win_combs[t][2]] == 'X'){
        return 'X';
      }
      if(board[win_combs[t][0]] == 'O' && board[win_combs[t][1]] == 'O' && board[win_combs[t][2]] == 'O'){
        return 'O';
      }
    }
    return "No winner";
  }

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

        if(checkWinner() == 'O'){
          status = "Congratulations! O is the Winner!";
          document.getElementById("status").innerHTML=status;
          document.getElementById("status").classList.add("you-won");
        }
      }

      if(clicks%2==0 && tiles[tile].innerHTML==""){
        tiles[tile].setAttribute("class","square X");
        tiles[tile].innerHTML="X";
        board[tile] = "X"
        clicks--;

        if(checkWinner() == 'X'){
          status = "Congratulations! X is the Winner!";
          document.getElementById("status").innerHTML=status;
          document.getElementById("status").classList.add("you-won");
        }
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

restart[0].addEventListener('click',refresh);
}