let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".win");

let turnX = true;// playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6], 
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnX = true;
    for (box of boxes) {
        box.innerText = "";
    }
    reset_btn.innerText = "Reset Game"
    msgContainer.classList.add("hide")
    enableBoxes()
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const enableBoxes = () =>{
    for (box of boxes){
        box.disabled = false;
    }
}

const disableBoxes = () =>{
    for (box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    win.innerText = `Congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes()
}
const checkWinner = () => {
    for (pattern of winPatterns){
        
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;

        if (pos0val != "" && pos1val != "" && pos2val != ""){
            if (pos0val === pos1val && pos1val === pos2val){
                console.log("winner is", pos0val);
                reset_btn.innerText = "New Game"
                showWinner(pos0val);
            };
        };
    };
};

reset_btn.addEventListener("click", resetGame);


