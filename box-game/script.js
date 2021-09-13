"use strict";

const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
var i = 0;

function incNumber() {
  if (i < 10) {
    i++;
  } else if ((i = 10)) {
    i = 0;
  }
  document.querySelector(`.box-${i}`).classList.remove("hidden");
}
function decNumber() {
  if (i < 10) {
    i++;
  } else if ((i = 10)) {
    i = 0;
  }
  document.querySelector(`.box-${i}`).classList.add("hidden");
}
