
//function to update UTC time
function updateUTCTime(){

    const UTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentDayElement = document.querySelector('[data-testid="currentDayofTheWeek"]');

    const currentTime = new Date(). getTime();
    const day = new Date().getDay()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const actualDay = days[day]

    UTCTimeElement.textContent = currentTime;
    currentDayElement.textContent = actualDay


 
}
//call the function to update the initial time
updateUTCTime();

//setInterval to update the time continuously
setInterval(updateUTCTime, 1);