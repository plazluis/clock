function showTime(){
    //Declaring variables to assign times
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "am";

    //The time will start with am and if greater than 12, make it to pm.
    if(hours == 0){
        hours = 12;
    }
    if(hours == 12){
        session = "pm";
    }
    if(hours > 12){
        hours = hours-12;
        session = "pm";
    }

    //Assign the values to the variables
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    //Displaying the time with the following format below
    var time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);

    //Refreshing to the previous change of themes when running app
    const colorThemes = document.querySelectorAll('[name="theme"]');
    
    const storeTheme = function(theme){
        localStorage.setItem("theme", theme)
    }

    const setTheme = function(){
        const activeTheme = localStorage.getItem("theme");
        colorThemes.forEach((themeOption) => {
            if(themeOption.id === activeTheme){
                themeOption.checked = true;
            }
        })
        document.documentElement.className=theme;
    }

    colorThemes.forEach(themeOption => {
        themeOption.addEventListener('click', () => {
            storeTheme(themeOption.id);
        })
    })

    document.onload = setTheme();
}
showTime();