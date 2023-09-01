/*
    EDITING IN THIS FILE IS ALLOWED
*/

var money = 3

var money_display = document.getElementById("money_display")

var update_money = setInterval(function() {
    money_display.innerText = `MONEY: $${money}`
    if (money >= 1337) {
        clearInterval(update_money)
        update_money = null
        money_display = null
        enable_buy()
    }
}, 250)

function enable_buy() {
    var buy_container = document.getElementById("buy_container")
    buy_container.innerText = ""

    var buy_button = document.createElement("button")
    buy_button.id = "buy"
    buy_button.style.height = "40px"
    buy_button.style.width = "60px"
    buy_button.innerText = "buy"

    buy_container.appendChild(buy_button)

    buy_button.addEventListener("click", function() {
        money = null
        win.call({legit: true}, 2)
    })
}