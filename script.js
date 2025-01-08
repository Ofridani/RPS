class Game{

    constructor(){
        this.humanScore = 0;
        this.computerScore = 0;
        this.rounds = 0;
        this.finished = false;
        this.bindButtons();

        this.humanScoreElement = document.querySelector("#humanScore");
        this.computerScoreElement = document.querySelector("#computerScore");
        this.computerChoiceElement = document.querySelector("#computerChoice");
    }

    bindButtons(){
        const btns = document.querySelectorAll("button");
        btns.forEach((btn) => btn.addEventListener("click", () => game.playRound(btn.id)));
    }
    
    getComputerChoice(){
        const choice = Math.floor(Math.random() * 3);
        switch (choice)
        {
            case 0:
                return "Rock";
            case 1:
                return "Paper";
            case 2:
                return "Scissors";
        }
    }

    updateBoard(computerChoice){
        this.humanScoreElement.textContent = `You: ${this.humanScore}`;
        this.computerScoreElement.textContent = `Computer: ${this.computerScore}`;
        this.computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;
        if (this.rounds >= 5){
            const container = document.querySelector(".container");
            const winnerElement = document.createElement("div");
            winnerElement.textContent = this.humanScore > this.computerScore ? "You win!" : "You lose!";
            container.appendChild(winnerElement);
            this.finished = true;
        }
    }

    playRound(humanChoice){
        if (this.finished){
            return;
        }
        let computerChoice = this.getComputerChoice();
        this.rounds++;
        if (humanChoice === computerChoice){
            this.updateBoard(computerChoice);
            return;
        }
        switch(humanChoice[0]+computerChoice[0]){
            case ("RS"):
            case ("PR"):
            case ("SP"):
            {
                this.humanScore++;
                break;
            }
            default:
            {
                this.computerScore++;
            }
        }
        this.updateBoard(computerChoice);
    }
}

const game = new Game();
