window.onload = function(){
    const time = new Date();
    let minutes;
    if(time.getMinutes() < 10) {
        minutes = "0" + time.getMinutes();
    }else {
        minutes = time.getMinutes();
    }
    const komunikat_user_name = localStorage.getItem('user_name');
    const result = document.querySelector("#result");
    result.innerHTML = "<h2>Logged in at: " + time.getHours() + ":" + minutes +  "</h2>";
    result.innerHTML += "<h3>Hello " + komunikat_user_name + "</h3>";
}