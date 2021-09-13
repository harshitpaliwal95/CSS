"use strict";
let count = 0;
let decrease = document.getElementById("decrease");

decrease.addEventListener("click", myfunction);

function myfunction() {
  count += 1;
  console.log(count);
}
