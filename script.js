// const square = document.createElement("div");
// const container = document.querySelector(".container");
// container.appendChild(square);
// square.classList.add("square");
let mode = "bw-mode";

function turnBwOn() {
  mode = "bw-mode";
}

function turnColorOn() {
  mode = "color-mode";
}

const container = document.querySelector(".container");
function makeSquares(number) {
  for (let i = 0; i < number; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
    square.classList.add(`${i}`);
    // square.classList.add(`square`);
  }
}

makeSquares(256);

// let target = document.querySelector(".square");
// target.addEventListener("mouseover", turnBlack);

function turnBlack() {
  this.classList.add("blacked-out");
  // this.setAttribute("style", "background-color:black");
}

function randomColor() {
  this.classList.add(randomColorSelector);
  // this.setAttribute("style", "background-color:black");
}

squareList = container.querySelectorAll("div");
squareList.forEach((square) => square.addEventListener("mouseover", turnBlack));

// const divs = document.querySelectorAll(".square");
// divs.forEach((div) => square.addEventListener("mouseover", addBlack));
// console.log(divs);
// // const target = document.querySelector("container.square");
// // let target = document.querySelector(".square");
// // target.forEach((square) => square.addEventListener("mouseover", turnBlack));
// container.addEventListener("mouseover", turnBlack);
// // const targets = document.querySelectorAll(`.square`);
// // targets.forEach((target) => target.addEventListener("mouseover", turnBlack));
// // // target.setAttribute("style", "background-color:black");
// // console.log(e);
// // });
function askGrid() {
  let gridAnswer = prompt("What size is the new grid? max of 64");
  if (gridAnswer < 64) {
    deleteElements();
    gridsquares = gridAnswer * gridAnswer;
    makeSquares(gridsquares);
    squareList = container.querySelectorAll("div");
    squareList.forEach((square) => {
      square.setAttribute("style", `width: ${400 / gridAnswer - 2}px`);
    });
    squareList.forEach((square) => {
      square.addEventListener("mouseover", turnBlack);
    });
  } else alert("Please enter another number below or 64");
}

const resetButton = document.querySelector(".buttonreset");
resetButton.addEventListener("click", askGrid);

function deleteElements() {
  squareList.forEach((square) => square.remove());
}

function randomColorSelector() {
  let selector = Math.floor(Math.random() * 8);
  let randomColor = "black";
  switch (selector) {
    case 0:
      randomColor = "redded";
      break;
    case 1:
      randomColor = "blued";
      break;
    case 2:
      randomColor = "yellowed";
      break;
    case 3:
      randomColor = "greened";
      break;
    case 4:
      randomColor = "oranged";
      break;
    case 5:
      randomColor = "pinked";
      break;
    case 6:
      randomColor = "browned";
      break;
    case 7:
      randomColor = "purpled";
      break;
  }
  return randomColor;
}
// square.setAttribute("style", `width: ${400 / gridAnswer - 2}px`);
// square.setAttribute("style", `heigth: ${400 / gridAnswer - 2}px`);
