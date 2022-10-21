let score = localStorage.getItem("score");
let SCORE = document.getElementById("score");

SCORE.textContent = score

let userId = localStorage.getItem("userId");
let user = document.querySelector("#user")

user.textContent = userId