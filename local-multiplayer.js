// ANIMATION SECTION

let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1}});

tl.to(".title-text", {'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, opacity: 1, duration: 3})
// LOCAL MULTIPLAYER ANIMATIONS

tl.to(".grid", {'clip-path': 'circle(111.8% at 50% 0%)', y : 0, opacity: 1, duration: 3}, 0)
tl.to(".grid-container", {'clip-path': 'circle(111.8% at 50% 0%)', y : 0, opacity: 1, duration: 3}, 0)
tl.to(".current-turn-container", {y: 0, opacity: 1, duration: 3}, 0)
tl.to(".go-back-container", {y: 0, opacity: 1, duration: 3.3}, 0)

// GRID AND CURRENT PLAYER SECTION FOR LOCAL MULTIPLAYER
let availableSelection = ["X", "O"];
let currentSelection = availableSelection[0];

let optionsOne = document.querySelector(".options-one");
let optionsTwo = document.querySelector(".options-two");

// USERNAMES 

let playerOne = document.querySelector(".user-input-one");
let playerTwo = document.querySelector(".user-input-two");
let userNameArray = [];

new URLSearchParams(window.location.search).forEach((value) => {
    userNameArray.push(value);
    console.log(userNameArray);
})

playerOne.innerHTML = userNameArray[0];
playerTwo.innerHTML = userNameArray[1];


optionsTwo.style.background = "#2A0944";

let grid = document.querySelectorAll(".grid");

grid.forEach(testFunction);

function testFunction(gridItem){
    gridItem.addEventListener("click", (e) => {
        let gridID = e.target.id;

        console.log(e);

        let currentGrid = document.getElementById(gridID);
        console.log(currentGrid);
        currentGrid.innerHTML = currentSelection;
        currentGrid.disabled = true;

        if (currentSelection == availableSelection[0]){
            currentSelection = availableSelection[1];
            optionsOne.style.background = "#2A0944";
            optionsTwo.style.background = "#A12568";
        }
        else if (currentSelection == availableSelection[1]){
            currentSelection = availableSelection[0];
            optionsTwo.style.background = "#2A0944";
            optionsOne.style.background = "#A12568";
        }

        checkForValue(currentGrid);
    })
}

// CHECKING FOR A WINNER

function checkForValue(currentGrid){

    let one = document.getElementById("one").innerHTML;
    let two = document.getElementById("two").innerHTML;
    let three = document.getElementById("three").innerHTML;
    let four = document.getElementById("four").innerHTML;
    let five = document.getElementById("five").innerHTML;
    let six = document.getElementById("six").innerHTML;
    let seven = document.getElementById("seven").innerHTML;
    let eight = document.getElementById("eight").innerHTML;
    let nine = document.getElementById("nine").innerHTML;

    let winnerNameSpan = document.querySelector(".winner-span");
    let tieDisplay = document.querySelector(".winner-display");

    let inputChoice = currentGrid.innerText;
    console.log(inputChoice);

    if (inputChoice == "X"){
        // ROW 1
        //  DIAGONAL
        if (one == "X" && five == "X" && nine == "X"){
            winnerNameSpan.innerHTML = userNameArray[0];
            displayResultContainer();
        }
        
        else if (three == "X" && five == "X" && seven == "X"){
            winnerNameSpan.innerHTML = userNameArray[0];
            displayResultContainer();
        }

        // RIGHT
        else if (one == "X" && two == "X" && three == "X"){
            winnerNameSpan.innerHTML = userNameArray[0];
            displayResultContainer();
        }
        // DOWN
        else if (one == "X" && four == "X" && seven == "X"){
            winnerNameSpan.innerHTML = userNameArray[0];
            displayResultContainer();
        }

        // ROW 2
        // STRAIGHT
        else if (four == "X" && five == "X" && six == "X"){
            winnerNameSpan.innerHTML = userNameArray[0];
            displayResultContainer();
        }

        // ROW 3
        // STRAIGHT
        else if (seven == "X" && eight == "X" && nine == "X"){
            winnerNameSpan.innerHTML = userNameArray[0];
            displayResultContainer();
        }

        // COLUMN 2 
        else if (two == "X" && five == "X" && eight == "X"){
            winnerNameSpan.innerHTML = userNameArray[0];
            displayResultContainer();
        }

        // COLUMN 3
        else if (three == "X" && six == "X" && nine == "X"){
            winnerNameSpan.innerHTML = userNameArray[0];
            displayResultContainer();
        }


    }

    if (inputChoice == "O"){
        // ROW 1
        //  DIAGONAL
        if (one == "O" && five == "O" && nine == "O"){
            winnerNameSpan.innerHTML = userNameArray[1];
            displayResultContainer();
        }

        else if (three == "O" && five == "O" && seven == "O"){
            winnerNameSpan.innerHTML = userNameArray[1];
            displayResultContainer();
        }


        // RIGHT
        else if (one == "O" && two == "O" && three == "O"){
            winnerNameSpan.innerHTML = userNameArray[1];
            displayResultContainer();
        }
        // DOWN
        else if (one == "O" && four == "O" && seven == "O"){
            winnerNameSpan.innerHTML = userNameArray[1];
            displayResultContainer();
        }

        // ROW 2
        // STRAIGHT
        else if (four == "O" && five == "O" && six == "O"){
            winnerNameSpan.innerHTML = userNameArray[1];
            displayResultContainer();
        }

        // ROW 3
        // STRAIGHT
        else if (seven == "O" && eight == "O" && nine == "O"){
            winnerNameSpan.innerHTML = userNameArray[1];
            displayResultContainer();
        }

        // COLUMN 2 
        else if (two == "O" && five == "O" && eight == "O"){
            winnerNameSpan.innerHTML = userNameArray[1];
            displayResultContainer();
        }

        // COLUMN 3
        else if (three == "O" && six == "O" && nine == "O"){
            winnerNameSpan.innerHTML = userNameArray[1];
            displayResultContainer();
        }
    }

    if ( (one == "X" || one == "O") &&
        (two == "X" || two == "O") &&
        (three == "X" || three == "O") &&
        (four == "X" || four == "O") &&
        (five == "X" || five == "O") &&
        (six == "X" || six == "O") &&
        (seven == "X" || seven == "O") &&
        (eight == "X" || eight == "O") &&
        (nine == "X" || nine == "O")) {
            tieDisplay.innerHTML = "It's a tie!";
            displayResultContainer();
    }
}

function displayResultContainer() {
    let resultContainerFinal = document.querySelector(".result-container");
    resultContainerFinal.style.display = "flex";
}