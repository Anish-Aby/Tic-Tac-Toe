// ANIMATION SECTION

let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1}});

tl.to(".title-text", {'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, opacity: 1, duration: 3})
// LOCAL MULTIPLAYER ANIMATIONS

tl.to(".grid", {'clip-path': 'circle(111.8% at 50% 0%)', y : 0, opacity: 1, duration: 3}, 0)
tl.to(".grid-container", {'clip-path': 'circle(111.8% at 50% 0%)', y : 0, opacity: 1, duration: 3}, 0)
tl.to(".current-turn-container", {y: 0, opacity: 1, duration: 3}, 0)



// GRID AND CURRENT PLAYER SECTION FOR LOCAL MULTIPLAYER
let availableSelection = ["X", "O"];
let currentSelection = availableSelection[0];

let optionsOne = document.querySelector(".options-one");
let optionsTwo = document.querySelector(".options-two");

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

    let inputChoice = currentGrid.innerText;
    console.log(inputChoice);

    if (inputChoice == "X"){
        // ROW 1
        //  DIAGONAL
        if (one == "X" && five == "X" && nine == "X"){
            alert("Player X wins");
        }
        
        else if (three == "X" && five == "X" && seven == "X"){
            alert("Player X wins");
        }

        // RIGHT
        else if (one == "X" && two == "X" && three == "X"){
            alert("Player X wins");
        }
        // DOWN
        else if (one == "X" && four == "X" && seven == "X"){
            alert("Player X wins");
        }

        // ROW 2
        // STRAIGHT
        else if (four == "X" && five == "X" && six == "X"){
            alert("Player X wins");
        }

        // ROW 3
        // STRAIGHT
        else if (seven == "X" && eight == "X" && nine == "X"){
            alert("Player X wins");
        }

        // COLUMN 2 
        else if (two == "X" && five == "X" && eight == "X"){
            alert("Player X wins");
        }

        // COLUMN 3
        else if (three == "X" && six == "X" && nine == "X"){
            alert("Player X wins");
        }


    }

    if (inputChoice == "O"){
        // ROW 1
        //  DIAGONAL
        if (one == "O" && five == "O" && nine == "O"){
            alert("Player O wins");
        }

        else if (three == "O" && five == "O" && seven == "O"){
            alert("Player O wins");
        }


        // RIGHT
        else if (one == "O" && two == "O" && three == "O"){
            alert("Player O wins");
        }
        // DOWN
        else if (one == "O" && four == "O" && seven == "O"){
            alert("Player O wins");
        }

        // ROW 2
        // STRAIGHT
        else if (four == "O" && five == "O" && six == "O"){
            alert("Player O wins");
        }

        // ROW 3
        // STRAIGHT
        else if (seven == "O" && eight == "O" && nine == "O"){
            alert("Player X wins");
        }

        // COLUMN 2 
        else if (two == "O" && five == "O" && eight == "O"){
            alert("Player O wins");
        }

        // COLUMN 3
        else if (three == "O" && six == "O" && nine == "O"){
            alert("Player O wins");
        }
    }
}