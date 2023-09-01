/*
    EDITING IN THIS FILE IS ALLOWED
*/

var button = document.getElementById("login")

button.addEventListener("click", function() {
    var password_input = document.getElementById("password_input")
    var login_response = document.getElementById("login_response")
    login_response.innerText = ""

    setTimeout(function() {
        if (password_input.value == "superstrongpassword123") {
            login_response.innerText = "LOGIN SUCCESS"

            setTimeout(function() {
                win.call({legit: true}, 1)
            }, 500)
        } else {
            login_response.innerText = "LOGIN FAILED"
        }
    }, 200)
})

button = null