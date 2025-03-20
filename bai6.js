let name = "huanrose@gmail.com";
const password = "123456";

document.getElementById("loginButton").onclick = function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (username === name && password === password) {
        console.log(" great");
    } else {
        console.log("fail");
    }
};