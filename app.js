var hr = 0;
var min = 0;
var sec = 0;
var mili = 0;
var timer = false;

function start() {
    timer = true;
    stopwWatch();

}
function stop() {
    timer = false
}
function reset() {
    timer = false;
    hr = 0;
    min = 0
    sec = 0;
    mili = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("mili").innerHTML = "00";

}
function stopwWatch() {
    if (timer == true) {
        mili = mili + 1;
        if (mili == 100) {
            sec = sec + 1;
            mili = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
            mili =0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
            mili = 0;
        }
        var hrSt = hr;
        var minSt = min;
        var secSt = sec;
        var miliSt = mili;
        if(hr<10){
            hrSt = "0" + hrSt;
        }
        if(min<10){
            minSt = "0" + minSt;
        }
        if(sec<10){
            secSt = "0" + secSt;
        }
        if(mili<10){
            miliSt = "0" + miliSt;
        }
        document.getElementById("hr").innerHTML = hrSt;
        document.getElementById("min").innerHTML = minSt;
        document.getElementById("sec").innerHTML = secSt;
        document.getElementById("mili").innerHTML = miliSt;
    }
   
}
setInterval("stopwWatch()", 10);
