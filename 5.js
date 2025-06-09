import { wordList } from "./words5.js"
let words = wordList
const originalWords = wordList.length

const hintButton = document.getElementById('hint')
const answerButton = document.getElementById('answer')
const nextButton1 = document.getElementById('next1')
const nextButton2 = document.getElementById('next2')
const char = document.getElementById('char')
const ans = document.getElementById('ans')
const counter = document.getElementById('counter')
let i = 0
let hintOX = 0
hintButton.addEventListener("click", () =>{hint()})
answerButton.addEventListener("click", () =>{answer()})
nextButton1.addEventListener("click", () =>{next1()})
nextButton2.addEventListener("click", () =>{next2()})
document.addEventListener("keydown", (e) =>{
    if (e.keyCode == 32) {
        answer();
    } else if (e.keyCode == 13) {
        next();
    } else if (e.keyCode == 72) {
        hint();
    }
})

function run() {
    ans.textContent = "ㅤ"
    counter.textContent = `${originalWords - words.length}/${originalWords}`
    nextButton1.style.visibility = "hidden"
    nextButton2.style.visibility = "hidden"
    i = Math.floor(Math.random() * words.length)
    hintOX = 0;
    char.textContent = words[i].char
}
run()

function hint() {
    if (hintOX == 0) {
        ans.textContent = `____ ${words[i].sound}`
        hintOX = 1
    }
}

function answer() {
    ans.textContent = `${words[i].mean} ${words[i].sound}`
    hintOX = 1
    nextButton1.style.visibility = "visible"
    nextButton2.style.visibility = "visible"
}

function next1() {
    if (words.length > 1) {
        words.splice(i, 1)
        run()
    } else {
        ans.textContent = "ㅤ"
        counter.textContent = `${originalWords}/${originalWords}`
        nextButton1.style.visibility = "hidden"
        nextButton2.style.visibility = "hidden"
        answerButton.style.visibility = "hidden"
        hintButton.style.visibility = "hidden"
        char.textContent = "끝"
    }
}

function next2() {
    run()
}