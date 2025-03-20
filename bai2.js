
document.getElementById("mode").onclick = function () {
    let background = document.getElementsByClassName("back-ground")[0]; // Lấy phần tử đầu tiên

    // Kiểm tra màu nền hiện tại
    if (background.style.backgroundColor === 'white') {
        // Nếu màu nền là trắng hoặc chưa được thiết lập, chuyển sang đen
        background.style.backgroundColor = "black";
        background.style.color = "white";
    } else {
        // Nếu màu nền không phải trắng, chuyển sang trắng
        background.style.backgroundColor = "white";
        background.style.color = "black";
    }
}