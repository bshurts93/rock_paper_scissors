var computerChoices = ["rock", "paper", "scissors"];
var computer;
var player;

function rockPaperScissors() {
    var playerScore = 0;
    var computerScore = 0;

    document.getElementById("rock").addEventListener("click", clickBtn);
    document.getElementById("paper").addEventListener("click", clickBtn);
    document.getElementById("scissors").addEventListener("click", clickBtn);

    function clickBtn() {
        // Get string from the name of the button to assign to player values
        var btnValue = (this.innerHTML).toLowerCase();
        player = btnValue;
        // Computer chooses randomly from array
        var rand = Math.floor(Math.random() * 100 % 3);
        computer = computerChoices[rand];
        
        // Print selected moves to the DOM
        document.getElementById("player-move").innerHTML = btnValue;
        document.getElementById("computer-move").innerHTML = computer;

        // Evaluate
        if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
            playerScore++;
            document.getElementById("player-score").innerHTML = playerScore;
            document.getElementById("outcome").innerHTML = "Player Wins!";
        } else if (player === "rock" && computer === "paper" || player === "paper" && computer === "scissors" || player === "scissors" && computer === "rock") {
            computerScore++;
            document.getElementById("computer-score").innerHTML = computerScore;
            document.getElementById("outcome").innerHTML = "Computer Wins!";
        } else {
            document.getElementById("outcome").innerHTML = "It's a Tie!";

        }
    }
}

rockPaperScissors();