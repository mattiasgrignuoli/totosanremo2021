const deadLine = "March 2 2021 19:00 GMT+0100"
function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total/1000) % 60);
    const minutes = Math.floor((total/1000/60) % 60);
    const hours = Math.floor((total/(1000*60*60)) % 24);
    const days = Math.floor(total/(1000*60*60*24));
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days + " Giorni, ";
      hoursSpan.innerHTML =('0' + t.hours).slice(-2) + " Ore, ";
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + " Minuti e " ;
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2) + " secondi!";
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  initializeClock('time', deadLine);