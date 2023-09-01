/*
    EDITING IN THIS FILE IS ALLOWED
*/

var button = document.getElementById("win_button")

button.addEventListener("click", function() {
    win.call({legit: true}, 0)
})

button = null