const game = function() {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", function() {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = function() {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".playerHand");
    const cpuHand = document.querySelector(".cpuHand");
    const hands = document.querySelectorAll(".hands img");
    const optionss = document.querySelector(".options");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    //Computer options
    const cpuOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer option
        const cpuNumber = Math.floor(Math.random() * 3);
        const cpuChoice = cpuOptions[cpuNumber];
        optionss.classList.add("fadeOut");
        //Set Delay
        setTimeout(() => {
          //compare
          compareHands(this.textContent, cpuChoice);
          updateScore();

          //Update images
          if (this.textContent === "rock") {
            playerHand.src = "images/rock.png";
          } else if (this.textContent === "scissors") {
            playerHand.src = "images/scissors.png";
          } else {
            playerHand.src = "images/paper.png";
          }
          if (cpuChoice === "rock") {
            cpuHand.src = "images/rock.png";
          } else if (cpuChoice === "scissors") {
            cpuHand.src = "images/scissors.png";
          } else {
            cpuHand.src = "images/paper.png";
          }
          //FadeIn the option keys
          optionss.classList.remove("fadeOut");
        }, 2000);

        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        cpuHand.style.animation = "shakeCpu 2s ease";
      });
    });
  };

  const updateScore = function() {
    const playerScore = document.querySelector(".playerScore p");
    const cpuScore = document.querySelector(".cpuScore p");
    playerScore.textContent = pScore;
    cpuScore.textContent = cScore;
  };

  const compareHands = function(pChoice, cpuChoice) {
    const winner = document.querySelector(".winner");

    if (pChoice === cpuChoice) {
      winner.textContent = "Tie!";
      return;
    }
    if (pChoice === "rock") {
      if (cpuChoice === "scissors") {
        winner.textContent = "You win!";
        pScore++;
        return;
      } else {
        winner.textContent = "You lose...";
        cScore++;
        return;
      }
    }
    if (pChoice === "paper") {
      if (cpuChoice === "rock") {
        winner.textContent = "You win!";
        pScore++;
        return;
      } else {
        winner.textContent = "You lose...";
        cScore++;
        return;
      }
    }
    if (pChoice === "scissors") {
      if (cpuChoice === "paper") {
        winner.textContent = "You win!";
        pScore++;
        return;
      } else {
        winner.textContent = "You lose...";
        cScore++;
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
