let submitButton = document.querySelector(".submit");
let eric = document.querySelector(".eric");
let kyle = document.querySelector(".kyle");
let butters = document.querySelector(".butters");
let stan = document.querySelector(".stan");
let title = document.querySelector(".title");
let questions = document.querySelector(".questions");
let startButton = document.querySelector(".start");


window.onload = function() {
  submitButton.style.display = "none";
  questions.style.display = "none";
  eric.style.display = "none";
  kyle.style.display = "none";
  butters.style.display = "none";
  stan.style.display = "none";
}

startButton.onclick = function() {
  title.style.display = "none";
  questions.style.display = "block";
  submitButton.style.display = "block";
}

submitButton.onclick = function() {
  let userInput1 = document.querySelector(".userInput1").value;
  let userInput2 = document.querySelector(".userInput2").value;
  if (userInput1 === "1860" && userInput2 === "submissive") {
    stan.style.display = "block";
    questions.style.display = "none";
    submitButton.style.display = "none";
    document.querySelector(".message").innerHTML = "";
  } else if (userInput1 === "1860" && userInput2 === "dominant") {
    kyle.style.display = "block";
    questions.style.display = "none";
    submitButton.style.display = "none";
    document.querySelector(".message").innerHTML = "";
  } else if (userInput1 != "1860" && userInput2 === "submissive") {
    butters.style.display = "block";
    questions.style.display = "none";
    submitButton.style.display = "none";
    document.querySelector(".message").innerHTML = "";
  } else if (userInput1 != "1860" && userInput2 === "dominant") {
    eric.style.display = "block";
    questions.style.display = "none";
    submitButton.style.display = "none";
    document.querySelector(".message").innerHTML = "";
  } else if (userInput2 !== "submissive" && userInput2 !== "dominant") {
    document.querySelector(".message").innerHTML = "check spelling (everything is in lowercase)"
  };
};