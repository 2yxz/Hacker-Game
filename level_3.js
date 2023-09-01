/*
    EDITING IN THIS FILE IS ALLOWED
*/

var buttons = document.getElementById("buttons")
var pos = Math.floor(Math.random() * 6420) + 1

var counter = 0
for (var t = 0; t < 500; t += 10) {
    for (var l = 20; l < 1340; l += 10) {
        counter ++

        var button = document.createElement("button")
        button.style.position = "absolute"
        button.style.top = `${t}px`
        button.style.left = `${l}px`

        if (counter == pos) {
            button.id = "win_button"
        }

        buttons.appendChild(button)
    }
}

var win_button = document.getElementById("win_button")
win_button.addEventListener("click", function() {
    win.call({legit: true}, 3)
})

buttons = null
win_button = null
counter = null