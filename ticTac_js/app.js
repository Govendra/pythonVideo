var turn = document.getElementById("turn")

var stTurn = Math.random() < 0.5
if (stTurn == true) {
    turn.innerText = "O"
} else {
    turn.innerText = "X"
}


var turnVal = turn.innerText
function filler(a){
    if (a.innerText == "") {
        if (turnVal == "X") {
            a.innerText = "X"
            turnVal = "O"
            turn.innerText = "O"
        } else {
            a.innerText = "O"
            turnVal = "X"
            turn.innerText = "X"
        }
    }
}

document.getElementById("box1").addEventListener("click", function boxFill() { filler(this)})
document.getElementById("box2").addEventListener("click", function boxFill() { filler(this)})
document.getElementById("box3").addEventListener("click", function boxFill() { filler(this)})
document.getElementById("box4").addEventListener("click", function boxFill() { filler(this)})
document.getElementById("box5").addEventListener("click", function boxFill() { filler(this)})
document.getElementById("box6").addEventListener("click", function boxFill() { filler(this)})
document.getElementById("box7").addEventListener("click", function boxFill() { filler(this)})
document.getElementById("box8").addEventListener("click", function boxFill() { filler(this)})
document.getElementById("box9").addEventListener("click", function boxFill() { filler(this)})

function winner(a, b) {
    document.getElementById("winner").setAttribute("style", "display:flex")
    document.getElementById("winnerName").innerText = a
    document.getElementById("isIsWinner").innerText = b
}

document.getElementById("okBtn").addEventListener("click", function () {
    location.reload()
})

document.getElementById("board").addEventListener("click", function () {
    arr = [
        [box1.innerText, box2.innerText, box3.innerText],
        [box4.innerText, box5.innerText, box6.innerText],
        [box7.innerText, box8.innerText, box9.innerText]
    ]
    for (let i = 0; i <= 2; i++) {
        s1 = ""
        s2 = ""
        for (let j = 0; j <= 2; j++) {
            s1 += arr[i][j]
            s2 += arr[j][i]
        }
        if (s1 == "XXX" || s2 == "XXX") {
            winner("X", "is Winner")
            return
        } else if (s1 == "OOO" || s2 == "OOO") {
            winner("O", "is winner")
            return
        }
    }
    s3 = ""
    s4 = ""
    for (let i = 0; i <= 2; i++) {
        s3 += arr[i][i]
        s4 += arr[i][2 - i]
    }
    if (s3 == "XXX" || s4 == "XXX") {
        winner("X", "is Winner")
        return
    } else if (s3 == "OOO" || s4 == "OOO") {
        winner("O", "is Winner")
        return
    }

    flage = true
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (arr[i][j] == "") {
                flage = false
                break
            }
        }
        if (flage == false) {
            break
        }
    }
    if (flage == true) {
        winner("Tie", "(-_-)")
        return
    }
})