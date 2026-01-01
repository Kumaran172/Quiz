function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  if (name === "" || email === "" || pass === "") {
    alert("Fill all fields!");
  } else {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);
    alert("Signup successful!");
    window.location = "login.html";
  }
}

function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  let savedEmail = localStorage.getItem("userEmail");
  let savedPass = localStorage.getItem("userPass");

  if (email === savedEmail && pass === savedPass) {
    alert("Login successful!");
    window.location = "quiz.html";
  } else {
    alert("Login failed!");
  }
}

function startQuiz() {
  let player = document.getElementById("player").value;
  if (player === "") {
    alert("Enter your name!");
  } else {
    localStorage.setItem("playerName", player);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("start").style.display = "none";
  }
}

function submitQuiz() {
  let score = 0;
  let ans1 = document.getElementById("q1").value;
  let ans2 = document.getElementById("q2").value;

  if (ans1 === "4") score++;
  if (ans2.toLowerCase() === "east") score++;

  let player = localStorage.getItem("playerName");
  let data = localStorage.getItem("scoreBoard");
  let board = data ? JSON.parse(data) : [];

  board.push({ player: player, score: score });
  localStorage.setItem("scoreBoard", JSON.stringify(board));
  window.location = "score.html";
}

function showBoard() {
  let data = localStorage.getItem("scoreBoard");

  if (!data) {
    document.getElementById("board").innerText = "No participants yet!";
    return;
  }

  let arr = JSON.parse(data);
  let text = "";
  for (let i = 0; i < arr.length; i++) {
    text += arr[i].player + " : " + arr[i].score + "\n";
  }

  document.getElementById("board").innerText = text;
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
