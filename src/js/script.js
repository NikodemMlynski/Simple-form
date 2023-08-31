window.onload = function(){
    userData.init();
}

class UserData{
    user_name = null;
    password = null;
    init(){
        const password_html = document.querySelector("#password");
        const user_name_html = document.querySelector("#user");
        password_html.addEventListener("input", () => this.showSubmitButton(password_html, user_name_html))
        user_name_html.addEventListener("input", () => this.showSubmitButton(password_html, user_name_html));
    }
    showSubmitButton(password_html, user_name_html){
        if(password_html.value.length >= 4 && user_name_html.value.length >=4){
            document.querySelector("#btn").style.display = "block";
            this.user_name = user_name_html.value;
            this.password = password_html.value;
            this.addDataToLocalStorage()
            
        }else{
            document.querySelector("#btn").style.display = "none";
        }
    }
    addDataToLocalStorage(){
        localStorage.setItem('user_name', this.user_name);
    }
}
const userData = new UserData();