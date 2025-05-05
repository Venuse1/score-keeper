const maxPoints = document.querySelector("#maxValue")
const p1ScoreSpan = document.querySelector("#p1Score")
const p2ScoreSpan = document.querySelector("#p2Score")
const addPointP1 = document.querySelector("#p1Btn")
const addPointP2 = document.querySelector("#p2Btn")
const resetBtn = document.querySelector("#reset")
const confirmMaxPoints = document.querySelector(".confirm")
const winScoreSpan = document.querySelector(".winningScore")

let p1Score = 0
let p2Score = 0
let winningScore = 5
let isGameOver = false


const addP1 = () => {
    if(!isGameOver){
        p1Score++
        p1ScoreSpan.innerText = p1Score
        if(p1Score === winningScore){
            isGameOver = true
            p1ScoreSpan.style.color = "green"
            p2ScoreSpan.style.color = "red"
            addPointP1.disabled = true
            addPointP2.disabled = true
        }
    }else{
        
    }
}
const addP2 = () => {
    if(!isGameOver){
        p2Score++
        p2ScoreSpan.innerText = p2Score
        if(p2Score === winningScore){
            isGameOver = true
            isGameOver = true
            p2ScoreSpan.style.color = "green"
            p1ScoreSpan.style.color = "red"
            addPointP1.disabled = true
            addPointP2.disabled = true
        }
    }else{
        
    }
}

const resetScore = () => {
    p1Score = 0
    p2Score = 0
    p1ScoreSpan.innerText = p1Score
    p2ScoreSpan.innerText = p2Score
    p1ScoreSpan.style.color = "black"
    p2ScoreSpan.style.color = "black"
    addPointP1.disabled = false
    addPointP2.disabled = false
    isGameOver = false
}


addPointP1.addEventListener("click", addP1)
addPointP2.addEventListener("click", addP2)
resetBtn.addEventListener("click", resetScore)
confirmMaxPoints.addEventListener("click", () => {
    if(maxPoints.value === ""){
        return alert("Please enter a number no set new winning score")
    }
    newScore = maxPoints.value
    winningScore = parseInt(newScore)
    winScoreSpan.innerText = winningScore
    maxPoints.value = ""
})