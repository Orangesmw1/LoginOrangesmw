listRegisterAccount = JSON.parse(localStorage.getItem("listRegisterAccount"));

var inputUserNameLogin = document.querySelector("#inputUserNameLogin");
var inputPasswordLogin = document.querySelector("#inputPasswordLogin");

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
                window.location = "../index3.html";
            } else {
                alert("Wrong Password");
            }
        } 
    }
}

function switchRegisterPage() {
    window.location = "../index2.html";
}