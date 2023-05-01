
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = 'images/background.jpg';

// Bug image
var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
  bugReady = true;
};
bugImage.src = 'images/bug.png';

var bug = {
  x: 0,
  y: 0
};

var score = 0;
var interval = 1000;
var hopBugInterval;

var w = window;
requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame;

function main() {
  draw();
  requestAnimationFrame(main);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  }

  if (bugReady) {
    ctx.drawImage(bugImage, bug.x, bug.y);
  }

  document.getElementById('scoreDisplay').textContent = `Score: ${score}`;
}

function hopBug() {
  bug.x = Math.random() * (canvas.width - bugImage.width);
  bug.y = Math.random() * (canvas.height - bugImage.height);
}

function startGame() {
  clearInterval(hopBugInterval);
  hopBugInterval = setInterval(hopBug, interval);
}

function isBugClicked(mouseX, mouseY) {
  var hitboxPadding = 5; // You can adjust this value for a more generous hitbox
  return (
    mouseX >= (bug.x - hitboxPadding) &&
    mouseX <= (bug.x + bugImage.width + hitboxPadding) &&
    mouseY >= (bug.y - hitboxPadding) &&
    mouseY <= (bug.y + bugImage.height + hitboxPadding)
  );
}

canvas.addEventListener('click', function (e) {
  var rect = canvas.getBoundingClientRect();
  var mouseX = e.clientX - rect.left;
  var mouseY = e.clientY - rect.top;

  if (isBugClicked(mouseX, mouseY)) {
    score++;
    interval -= 50; // Decrease the interval by 50 milliseconds
    startGame();
  }
});

document.getElementById("resetSpeed").addEventListener("click", function () {
  interval = 1000; // Reset the interval to 1000 milliseconds
  startGame();
});

document.getElementById("resetScore").addEventListener("click", function () {
  score = 0; // Reset the score
});

bgImage.onload = function () {
  draw();
};

startGame();
main();
