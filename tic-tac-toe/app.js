let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // true = O's turn, false = X's turn

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

// 🔁 Reset Game
const resetGame = () => {
  turnO = true;
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
    box.removeAttribute("data-player");
  }
  msgContainer.classList.add("hide");
};

// 🎮 Handle Box Clicks
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // O’s turn
      box.innerHTML = '<img src="novita-19.png" alt="O" class="symbol">';
      box.setAttribute("data-player", "Nobita");
      turnO = false;
    } else {
      // X’s turn
      box.innerHTML = '<img src="dora.png" alt="X" class="symbol">';
      box.setAttribute("data-player", "Doreamon");
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

// 🏆 Show Winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  for (let box of boxes) {
    box.disabled = true;
  }
};

// ✅ Check Winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].getAttribute("data-player");
    let pos2 = boxes[pattern[1]].getAttribute("data-player");
    let pos3 = boxes[pattern[2]].getAttribute("data-player");

    if (pos1 && pos2 && pos3) {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

// 🔘 Button Events
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
