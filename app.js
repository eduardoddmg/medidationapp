const btn_long = document.getElementById('btn-long')
const btn_short = document.getElementById('btn-short')

const timer = document.getElementById('timer')

const start_time_btn = document.querySelector(".button-start-time")
const clean_time_btn = document.querySelector('.button-clean-time')

const clean1 = document.querySelector('.clean1')
const clean2 = document.querySelector('.clean2')

const progress_bar = document.querySelector("#progress")

var minutos;
var segundos;
var cron

var increment_progress;
var increment_progress_subtr

btn_long.addEventListener('click', () =>
{
    window.document.body.style.background = "#929fd1"
    btn_long.style.backgroundColor = "black"
    btn_long.style.color = "white"
    btn_short.style.backgroundColor = "white"
    btn_short.style.color = "black"
    timer.innerHTML = "10:00"
    timer.style.fontSize = "160px"
    minutos = 10;
    segundos = 0;
    start_time_btn.style.display = "inline-block"
    clean_time_btn.style.display = "inline-block"
    clean1.style.display = "inline-block"
    clean2.style.display = "none"
    function myFunction(x) {
        if (x.matches) { // If media query matches
          timer.style.fontSize = "60px";
        } 
      }
      
      var x = window.matchMedia("(max-width: 700px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
})


btn_short.addEventListener('click', () =>
{
    window.document.body.style.background = "#5a9ea1"
    timer.innerHTML = "05:00"
    timer.style.fontSize = "160px"
    btn_long.style.backgroundColor = "white"
    btn_long.style.color = "black"
    btn_short.style.backgroundColor = "black"
    btn_short.style.color = "white"
    minutos = 5
    segundos = 0
    start_time_btn.style.display = "inline-block"
    clean_time_btn.style.display = "inline-block"
    clean1.style.display = "none"
    clean2.style.display = "inline-block"
    function myFunction(x) {
        if (x.matches) { // If media query matches
          timer.style.fontSize = "60px";
        } 
      }
      
      var x = window.matchMedia("(max-width: 700px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
})

start_time_btn.addEventListener('click', () =>
{
    cron = setInterval(() => { start_timer(); }, 1000);
})

function start_timer ()
{   
    if (minutos == 0 && segundos == 0)
    {
        timer.innerHTML = "00:00"
    }
    else if (segundos > 0)
    {
        segundos--;
    }
    else if (segundos == 0)
    {
        segundos = 59;
        minutos--;
    }

    var format = (minutos < 10 ? '0' + minutos : minutos) + ":" + (segundos < 10 ? '0' + segundos : segundos);

    timer.innerHTML = format;
    
    
}


clean1.addEventListener('click', () =>
{
    clearInterval(cron)
    timer.innerHTML = "10:00"
    minutos = 10, segundos = 0
})
clean2.addEventListener('click', () =>
{
    clearInterval(cron)
    timer.innerHTML = "05:00"
    minutos = 5, segundos = 0
})

