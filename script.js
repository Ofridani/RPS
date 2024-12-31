function getComputerChoice(){
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

function getHumanChoice(){
    let choice = prompt("Enter your choice:\nR for Rock, P for Paper, S for Scissors").toUpperCase();
    while (choice != "R" && choice != "P" && choice != "S"){
        alert("Invalid Choice!");
        choice = prompt("Enter your choice:\nR for Rock, P for Paper, S for Scissors").toUpperCase();
    }
    switch (choice)
    {
        case "R":
            return "Rock";
        case "P":
            return "Paper";
        case "S":
            return "Scissors";
    }
}
