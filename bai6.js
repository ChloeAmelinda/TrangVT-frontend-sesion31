let name = "huanrose@gmail.com";
let password = "123456";

document.getElementById("loginButton").onclick = function () {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (username === name && password === password) {
        console.log(" great");
    } else {
        console.log("fail");
    }
};