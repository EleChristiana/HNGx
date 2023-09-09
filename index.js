function updateUTCTime(){

    const UTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentDayElement = document.querySelector('[data-testid="currentDayofTheWeek"]');

    const currentTime = new Date().toTimeString();
    const day = new Date().getDay()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const actualDay = days[day]

    UTCTimeElement.textContent = currentTime;
    currentDayElement.textContent = actualDay


 
}

updateUTCTime();

setInterval(updateUTCTime, 1000);