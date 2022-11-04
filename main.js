listRegisterAccount = JSON.parse(localStorage.getItem("listRegisterAccount"));

var inputUserNameLogin = document.querySelector("#inputUserNameLogin");
var inputPasswordLogin = document.querySelector("#inputPasswordLogin");
var showPassword = document.querySelector(".showPassword")
var hidePassword = document.querySelector(".hidePassword");
var blockEyes = document.querySelector("#block-eyes");

function login() {
    listRegisterAccount = JSON.parse(localStorage.getItem("listRegisterAccount"));

    var userNameLogin = inputUserNameLogin.value;
    var userPassLogin = inputPasswordLogin.value;

    if(userNameLogin) {
        var objUserLogin = listRegisterAccount.find(elmentUserName => elmentUserName.getNameUser.indexOf(userNameLogin) !== -1);

        if(objUserLogin === undefined) {
            alert("Account does not exist. Please register");
        } else if(userNameLogin === objUserLogin.getNameUser) {
            if(userPassLogin === objUserLogin.getPassUser) {
                window.location = "https://orangesmw1.github.io/DisplayOrangesmw/";
            } else {
                alert("Wrong Password");
            }
        } 
    }
}

hidePassword.style = `
    display: none;

`

function eyesShowPassword() {
    if(inputPasswordLogin.type === "password") {
        inputPasswordLogin.type = "text";

        hidePassword.style = `
            display: block;
        `
        showPassword.style = `
            display: none;
        `
    } 
}

function eyesHidePassword() {
    if(inputPasswordLogin.type === "text") {
        inputPasswordLogin.type = "password";
        hidePassword.style = `
            display: none; 
        `
        showPassword.style = `
            display: block;
        `
    }
}


