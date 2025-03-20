let text = document.getElementsByClassName("text")[0]
        let open = document.getElementsByClassName("open")[0]
        let close = document.getElementsByClassName("close")[0]
        let background = document.getElementsByClassName("main")[0]
        open.onclick = function () {
            text.style.display = "block"
            background.style.backGround="gray"
            
        }
        close.onclick = function () {
            text.style.display = "none"
        }
