const time = document.getElementById("times")
let start = false
let nowallconma = 0
let min
let sec
let conma
window.onload = function() {
    reset()
}
function startorstop() {
    if (start == true) {
        start = false
        console.log("true->false")
    } else {
        if (start == false) {
            start = true
            console.log("false->true")
            count();
        }
    }
}
function count() {
    let text
if (start == false) {
    return;
} 
if (start == true) {
    nowallconma++
    conma = nowallconma % 100
    min =  Math.trunc(parseInt(nowallconma) / 6000)
    sec = Math.trunc(parseInt(nowallconma) / 100)-(min*60)  
        text = `${min}分${sec}秒.${conma}`
    time.textContent = text
    setTimeout(count,10)
}
}
function reset() {
    nowallconma = 0
    conma = 0
    min = 0
    sec = 0
    start = false
    text = `0分0秒.00`
    time.textContent = text
}