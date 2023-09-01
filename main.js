/*
    WELCOME TO hacker, hacker!
    READ THE INFORMATION IN THE CONSOLE BEFORE PLAYING
    THIS IS THE MAIN CODE FILE AND ANY EDITING WILL PROBABLY BREAK THE GAME... SO DON'T EDIT THIS FILE PLZ THX
    NONE OF THE SOLUTIONS INVOLVE EDITING THIS FILE

    Thanks for playing, and enjoy!
     - eco27
*/

// Adds main event listeners

function add_main_listeners() {
    // Elements

    const intro = document.getElementById("intro")
    const info = document.getElementById("info")

    const play_button = document.getElementById("play_button")
    const info_button = document.getElementById("info_button")
    const info_back = document.getElementById("info_back")

    // Event listeners

    play_button.addEventListener("click", function() {
        intro.parentNode.removeChild(intro)
        info.parentNode.removeChild(info)
        start_game()
    })

    info_button.addEventListener("click", function() {
        intro.style.display = "none"
        info.style.display = "block"
    })

    info_back.addEventListener("click", function() {
        intro.style.display = "block"
        info.style.display = "none"
    })
}

// Runs intro

function run_intro() {
    // Elements

    const title = document.getElementById("main_title")
    const subtitle = document.getElementById("subtitle")
    const play_button = document.getElementById("play_button")
    const info_button = document.getElementById("info_button")
    const credits = document.getElementById("credits")

    // Animations

    setTimeout(function() {
        title.style.display = "block"
        title.innerText = "h"
    }, 100)
    setTimeout(function() {
        title.innerText = "ha"
    }, 200)
    setTimeout(function() {
        title.innerText = "hac"
    }, 300)
    setTimeout(function() {
        title.innerText = "hack"
    }, 400)
    setTimeout(function() {
        title.innerText = "hacke"
    }, 500)
    setTimeout(function() {
        title.innerText = "hacker"
    }, 600)
    setTimeout(function() {
        title.innerText = "hacker"
    }, 700)
    setTimeout(function() {
        title.innerText = "hacker "
    }, 800)
    setTimeout(function() {
        title.innerText = "hacker G"
    }, 900)
    setTimeout(function() {
        title.innerText = "hacker Ga"
    }, 1000)
    setTimeout(function() {
        title.innerText = "hacker Gam"
    }, 1100)
    setTimeout(function() {
        title.innerText = "hacker Game"
    }, 1200)

    setTimeout(function() {
        subtitle.style.display = "block"
    }, 1900)

    setTimeout(function() {
        play_button.style.display = "inline"
    }, 2400)
    setTimeout(function() {
        info_button.style.display = "inline"
    }, 2600)

    setTimeout(function() {
        credits.style.display = "block"
    }, 2800)
}

// Starts game

function start_game() {
    // Elements

    const ingame_data = document.getElementById("ingame_data")

    // Displays ingame_data

    ingame_data.style.display = "block"

    // Starts level 0

    start_level(0)
}

// Starts level

function start_level(level) {
    // Updates and logs game_level

    const game_level = document.getElementById("game_level")
    game_level.innerText = level
    console.log(`level ${level} started`)

    // Displays ingame_data

    const ingame_data = document.getElementById("ingame_data")
    ingame_data.style.display = "block"

    // Appends HTML

    const game = document.getElementById("game")
    get_html(level).then(function(html) {
        // HTML received

        game.innerHTML = html

        // Appends script

        var script = document.createElement("script")
        script.id = `level_${level}_script`
        script.src = `level_${level}.js`
        document.head.appendChild(script)
    }).catch(function() {
        console.log("ERROR: FILE CONTENTS GET REQUEST TIMED OUT")
    })
}

// Gets HTML of level

function get_html(level) {
    return new Promise(function(resolve, reject) {
        // AJAX request

        var req = new XMLHttpRequest()
        req.open("GET", `level_${level}.html`)
        req.send()

        // Rejects if request is not fulfilled in 20 seconds

        var req_timeout = setTimeout(function() {
            reject()
        }, 20000)

        req.onload = function() {
            // Request loaded

            clearTimeout(req_timeout)
            resolve(req.responseText)
        }
    })
}

// Level won

function win(level) {
    // Check legit

    if (this.legit) {
        // Logs completion

        console.log(`level ${level} completed`)

        // Hides ingame_data

        const ingame_data = document.getElementById("ingame_data")
        ingame_data.style.display = "none"

        // Cleans up

        end_level(level)

        // Displays win screen

        var win_screen = document.createElement("div")
        win_screen.style.textAlign = "center"
        win_screen.innerHTML = get_win_screen(config[level].title, config[level].desc)
        document.body.appendChild(win_screen)

        // Adds event listener on the go (intended)

        const confirm_win = document.getElementById("confirm_win")
        if (level == 7) {
            console.log("good job game completed")
            confirm_win.style.display = "none"
        }
        confirm_win.addEventListener("click", function() {
            if (level != 7) {
                // Removes win screen

                win_screen.parentNode.removeChild(win_screen)
                win_screen = null

                // Starts next level

                start_level(level + 1)
            }
        })
    } else {
        console.log("nice try")
    }
}

// Win screen constructor

function get_win_screen(title, desc) {
    return `<div class = "bold" style = "position: relative; top: 100px; font-size: 40px;">${title}</div><div style = "position: relative; top: 140px; font-size: 20px; margin-left: 260px; margin-right: 260px;">${desc}</div><button id = "confirm_win" style = "position: relative; top: 220px; height: 100px; width: 200px; font-size: 16px;">NEXT LEVEL</button>`
}

// "Cleans up" after level completed

function end_level(level) {
    // Gets elements

    const html = document.getElementById(`level_${level}_html`)
    const script = document.getElementById(`level_${level}_script`)

    // Removes elements

    if (html) {
        html.parentNode.removeChild(html)
    }
    if (script) {
        script.parentNode.removeChild(script)
    }
}

// When content is loaded...

document.addEventListener("DOMContentLoaded", function() {
    // Logs console messages

    console.log("welcome to hacker, hacker!")
    console.log("please read the information section before playing")
    console.log("none of the solutions involve editing main.js or style.css so please don't edit those or your game might break!")
    console.log("you can edit some parts of the html file, look for the comment at the beginning of the file for more information")
    console.log("executing commands or scripts in the console is allowed")
    console.log("thanks for playing, and good luck!")
    console.log(" - betches")
    console.log("")

    // Adds main event listeners

    add_main_listeners()

    // Runs intro animation

    run_intro()
})