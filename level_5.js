/*
    EDITING IN THIS FILE IS ALLOWED
*/

!function() {
    var password = ""

    var req = new XMLHttpRequest()
    req.open("GET", window.atob("bGV2ZWxfNV9wYXNzd29yZC50eHQ="))
    req.send()

    req.onload = function() {
        password = req.responseText
    }

    var button = document.getElementById("login")

    button.addEventListener("click", function() {
        var password_input = document.getElementById("password_input")
        var login_response = document.getElementById("login_response")
        login_response.innerText = ""

        setTimeout(function() {
            if (password_input.value == password) {
                login_response.innerText = "LOGIN SUCCESS"

                setTimeout(function() {
                    win.call({legit: true}, 5)
                }, 500)
            } else {
                login_response.innerText = "LOGIN FAILED"
            }
        }, 200)
    })

    button = null
}()