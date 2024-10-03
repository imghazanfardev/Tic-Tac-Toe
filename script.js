let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //playerX, playero

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


let resetbtn =() => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            //player O
            box.innerText = "O";
            turnO = false;
        }
        else {
            //player O
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

let disableBoxes = () => {
     for (let box of boxes) {
        box.disabled = true;
     }
}

let enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
     }
}

let showWinner = (winner) => {
            msg.innerText = `Congratulations Winner is ${winner}`;
            msgContainer.classList.remove("hide");
            disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {

            if (posVal1 === posVal2 && posVal2 === posVal3) {
                showWinner(posVal1);


                var end = Date.now() + (15 * 1000);

                // go Buckeyes!
                var colors = ['#EFCB68', '#ff0054', '#ffff' ];
                
                (function frame() {
                  confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                  });
                  confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                  });
                
                  if (Date.now() < end) {
                    requestAnimationFrame(frame);
                  }
                }());
            }
        }
    }
}

newGameBtn.addEventListener('click', resetbtn);
resetButton.addEventListener('click', resetbtn);