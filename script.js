/* this is to create a countdown to a particular day*/ 
//date we are counting down to
const countdowndate = new Date(2024, 5, 3, 11, 30, 0 ).getTime();//june, 3 2024. 11:30am

//setinterval that updates it every 1 second (= 1000 milliseconds)
const timer = setInterval(() => {
    //calculate difference between current time and time we are counting to - this wil help us know when countdown is over
    const current_time = new Date().getTime();
    const difference = countdowndate - current_time;//result is in milliseconds

    const oneday /*in milliseconds*/ = 24 * 60 * 60 * 1000;
    const onehour /*in milliseconds*/ = 60 * 60 * 1000; 
    const onemin /*in milliseconds*/ = 60 * 1000;
    const onesec /*in milliseconds*/ = 1000;   

    //to calculate days(we divide the difference by one day)
    const day = Math.floor(difference / oneday);//i rounded it down to a whole number
    //calculate remainder from days so we can find hours remaining
    let remainder_day = difference % oneday;

    //to calculate hours(we get the remainder from days and divide by one hour)
    const hour = Math.floor(remainder_day / onehour);//i rounded it down to a whole number
    //calculate remainder from hours so we can find minutes remaining
    let remainder_hours = difference % onehour;

    //to calculate minutes(we get the remainder from hours and diide by one minute)
    const min = Math.floor(remainder_hours / onemin);//i rounded it down to a whole number
    //calculate remainder from minutes o we can find seconds remaining
    let remainder_min = difference % onemin;

    //to calculate seconds(we get the remainder from minutes and divide by one second)
    const sec = Math.floor(remainder_min / onesec);//i rounded it down to a whole number

    //display countdown
    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    if(difference < 0/*meaning that countdown is over*/){
    clearInterval(timer);//stop timer
    document.getElementById("countdown_over").innerHTML = "The Countdown is over, tHE WINNER is NMASINACHI UGWOKE😍😍"
}
}, 1000/*this is the interval which is 1000 milliseconds = 1s*/)