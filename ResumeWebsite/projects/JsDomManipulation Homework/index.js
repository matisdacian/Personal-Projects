var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
const resultText = document.getElementById("#result");
var choices = ["rock", "paper", "scissors"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "images/user/" + choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = "images/user/" + you + ".png";

    //random for oppponent
    opponent = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = "images/computer/" + opponent + ".png";

    //check for winner
    if (you == opponent) {
        yourScore += 0;
        opponentScore += 0;
        document.querySelector('#result').textContent = "It is a draw!"
    }
    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
                document.querySelector('#result').textContent = "You win!"
            }
            else if (opponent == "paper") {
                opponentScore += 1;
                document.querySelector('#result').textContent = "Computer wins!"
            }
        }
        else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
                document.querySelector('#result').textContent = "You win!"
            }
            else if (opponent == "rock") {
                opponentScore += 1;
                document.querySelector('#result').textContent = "Computer wins!"
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
                document.querySelector('#result').textContent = "You win!"
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
                document.querySelector('#result').textContent = "Computer wins!"
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}