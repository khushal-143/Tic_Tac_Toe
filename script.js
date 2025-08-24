
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let xScore = document.querySelector("#xScore");
let oScore = document.querySelector("#oScore");
let resetS = document.querySelector("#resetScore");
let x = 0;
let o = 0;
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
  for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
  }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log(pos1, " is the winner.");
                showWinner(pos1);
                pos1 === 'X' ? x++ : o++;
                xScore.innerText = x;
                oScore.innerText = o;
            }
        }
    }
};

resetS.addEventListener("click", () => {
    xScore.innerText = 0;
    oScore.innerText = 0;
})

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);