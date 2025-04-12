let setmin
let setsec
let min = 0
let sec = 0
let goukesec = 0
let inpmin
let inpsec
let start = false
let timersound
let nokori
//let matick


window.onload=function(){
setmin = document.getElementById("setmin")
setsec = document.getElementById("setsec")
inpmin = document.getElementById("inpmin")
inpsec = document.getElementById("inpsec")
timersound = document.getElementById("timer_sound")
nokori = document.getElementById("nokori")

//inpmin.addEventListener("input", () => {
//    saibyouga();
//  })
//  inpsec.addEventListener("input", () => {
//    saibyouga();
//  })
}


function inp_saibyouga() {
    if (parseInt(inpmin.value)) {
        min = parseInt(inpmin.value)
        inpmin.value = NaN
    }
    if (parseInt(inpsec.value)) {
    if (parseInt(inpsec.value) < 60) {
    sec = parseInt(inpsec.value)
    inpsec.value = NaN    
} else {
     min =  Math.trunc(parseInt(inpsec.value) / 60)
     sec = parseInt(inpsec.value) % 60
     inpsec.value = NaN    
}
    }
    setmin.textContent = min
    setsec.textContent = sec
}
function startstop() {
goukesec = parseInt(min*60+sec)
 if (start == false) {
    if (goukesec == NaN) {
        alert("エラー")
        return;
    }
    //matick = goukesec*1000
    start = true
    sec_timer()
 } else {
    if (start == true) {
        start = false
        timersound.pause();
        timersound.currentTime = 0
        nokori.textContent = `開始してください`
        goukesec = NaN
        console.log("stop")
    }
 }
}
function sec_timer() {
    if (goukesec == 0 || goukesec == NaN) {
        timersound.play();
        nokori.textContent = `終了しました!!!`
        nokori.style.color = "red"
    } else {
        nokori.style.color = "black"
        goukesec--
        const nokori_min =  Math.trunc(goukesec / 60)
        const nokori_sec = goukesec % 60
        nokori.textContent = `${nokori_min}分${nokori_sec}秒`
    }
    if (start == true){
    setTimeout(sec_timer,1000)
}
}
