const gameChoices = ["Lapis","Papyrus", "Scalpellus" ];
let text = ""
let h2Game = document.querySelector(".choices")
let humanChoice = ""


function getRandomIndex(){
  let randomNum = Math.floor(Math.random() * 3);
  return randomNum
}


function compareChoices(choice){
   let players ={
  human: gameChoices[getRandomIndex()],
  comp: gameChoices[getRandomIndex()]
}; 
  if (choice === "Lapis"){
    players.human = choice
  }else if (choice === "Papyrus"){
    players.human = choice
  }else if (choice === "Scalpellus"){
    players.human = choice
  } 

  text = ""
  let player = players.human;
  let computer = players.comp;
  h2Game.innerHTML= "Human chose " + players.human + ". Computer chose " + players.comp + "."
  if(player === computer){
    text += "its a tie";
  }
    else if(player === "Lapis"){
        if(computer === "Papyrus"){
        text += "comp wins: papy(paper) beats lapis(rock)";
        
        }else if(computer === "Scalpellus"){
        text += "human wins: lapis(rock) beats scalp(scissors)";
          
      }
    }
    else if(player === "Papyrus"){
        if(computer === "Lapis"){
          text += "papy(paper) beats lapis(rock), human wins";
            
        } 
        else if(computer === "Scalpellus"){
          text +="computer wins: scalp(scissors) beats papy(paper)";
          
         }
    }
    else if(player === "Scalpellus"){
      if(computer === "Lapis"){
        text += "comp wins: lapis(rock) beats scalp(scissors)"
         
      }
      else if(computer === "Papyrus"){
        text += "human wins: scalp(scissors) beats papy(paper)";
         
      }
      
    }
  document.querySelector(".game-outcome").innerHTML = text;
}

// plugging in objects to function
document.querySelector(".play-btn").addEventListener("click", compareChoices)
document.querySelector(".rock").addEventListener("click", ()=>{
  compareChoices("Lapis")
})
document.querySelector(".paper").addEventListener("click", ()=>{
  compareChoices("Papyrus")
})
document.querySelector(".scissors").addEventListener("click", ()=>{
  compareChoices("Scalpellus")
})
