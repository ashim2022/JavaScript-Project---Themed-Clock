// script for switch format clock 
const formatSwitchBtn = document.querySelector(".format-switch-btn");
formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("data-format")

    if(formatValue === "12"){
        formatSwitchBtn.setAttribute("data-format", "24")
    }
    else{
        formatSwitchBtn.setAttribute("data-format", "12")
    }
});


// Now lets get current time
function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    // Noe lets set time in AM/PM
    if(hours >= 12){
        period = "PM"; 
    }

    // Set the time in 12hour format
    var formatValue = formatSwitchBtn.getAttribute("data-format")

    if(formatValue === "12"){
        hours = hours > 12 ? hours % 12 : hours;
    }
    


    // we will add 0 for the values which are lower than 10
    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }


    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
}

var updateClock = setInterval(clock, 1000);

//Lets get the date
var today = new Date();
const monthName = today.toLocaleString("default", {month: "short"});
const dayNumber = today.getDate();
const dayName = today.toLocaleString("default", {weekday: "long"});
const year = today.getFullYear();

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".year").innerHTML = year;


// js for dot menu 
const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click", () => {
    dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if(e.target.id !== "active-menu"){
        dotMenu.classList.remove("active");
    }
});

// dark and light theme 
function toggleClass(){
    const body = document.querySelector('body');
    body.classList.toggle('light');
}