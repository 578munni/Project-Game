let boxes = document.querySelectorAll(".box");
let reBtn = document.getElementById("reset-btn");

let turn0 = true;
 const win = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [3,4,5],
  [6,7,8],
  [2,5,8],
  [2,5,8],
 ];

 boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "x";
      turn0 = true;
    }
  });
 });