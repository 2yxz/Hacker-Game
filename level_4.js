/*
    EDITING IN THIS FILE IS ALLOWED
*/

!function() {
    var times_clicked = 0
    var button = document.getElementById("clicke")
    var clicks = document.getElementById("clicks")

    button.addEventListener("click", function() {
        times_clicked ++
        clicks.innerText = `CLICKS: ${times_clicked} / 10000000`
        if (times_clicked >= 10000000) {
            setTimeout(function() {
                button = null
                clicks = null
                win.call({legit: true}, 4)
            }, 500)
        }
    })
}()