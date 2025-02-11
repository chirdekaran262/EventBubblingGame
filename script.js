var score = 0;
var hitNumber;


function buubleForming() {
    let clutter = "";

    for (var i = 1; i <= 126; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function newHit() {
    hitNumber = Math.floor(Math.random() * 10);
    document.querySelector('.hitval').textContent = hitNumber;
}

var timer = 60;
function TimerSet() {
    var t = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('.timer').textContent = timer;
        }
        else {
            clearInterval(t);
            document.querySelector("#pbtm").innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <h1>Game Over</h1>
                <h2>Your Score: <span style="color: red">${score}</span></h2>
                <button onclick="restartGame()" 
                        style="margin-top: 20px; padding: 12px 30px; font-size: 18px; background-color: #4CAF50; color: white; border: none; border-radius: 8px; cursor: pointer; transition: background-color 0.3s ease;">
                    Restart
                </button>
            </div>`;


        }
    }, 1000);
}

function restartGame() {
    location.reload(); // Reloads the page to restart the game
}
function IncrementScore() {
    score += 10;
    document.querySelector('.score').textContent = score;

}

document.querySelector('#pbtm').addEventListener('click', function (dets) {
    var bubbleVal = parseInt(dets.target.textContent);
    if (hitNumber == bubbleVal) {
        IncrementScore();
        buubleForming()
    }
    newHit();
})
newHit();
TimerSet()
buubleForming()
