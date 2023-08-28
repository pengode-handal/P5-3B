// Script nggawe countdown simpel wae

var hariDiv = document.getElementById("days");
var jamDiv = document.getElementById("hours");
var menitDiv = document.getElementById("minutes");
var detikDiv = document.getElementById("seconds");

var selesai = "August 31 2023 08:30:00";
var hariIni = new Date();

function initializeClock(en, st) {
    console.log("Mulai CountDown");
    /*ngecek element yang ada ID "days", "hours", "minutes" and "seconds"*/

    function updateClock(d, e) {
        /*ngitung waktu tersisa*/
        var t = parseInt(e) - parseInt(d);
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        /*nah ini nampilin waktu*/
        hariDiv.innerHTML = ('0' + days).slice(-2);
        jamDiv.innerHTML = ('0' + hours).slice(-2);
        menitDiv.innerHTML = ('0' + minutes).slice(-2);
        detikDiv.innerHTML = ('0' + seconds).slice(-2);

        /*Ngecek nek wes rampung.*/
        if (t <= 0) {

            hariDiv.innerHTML = '00';
            jamDiv.innerHTML = '00';
            menitDiv.innerHTML = '00';
            detikDiv.innerHTML = '00';
            clearInterval(timeinterval);
        }
        if ('00' == hariDiv.innerText == jamDiv.innerText == menitDiv.innerText == detikDiv.innerText) {
            console.log("hewssss")
        }
    }
    /* Nyeting mulai mandek */
    st = Date.parse(st);
    en = Date.parse(en);
    updateClock(st, en);
    timeinterval = setInterval(function() {
        updateClock(st, en);
        en = en - 1000;
    }, 1000);

}



initializeClock(selesai, hariIni);
console.log(hariIni + selesai);