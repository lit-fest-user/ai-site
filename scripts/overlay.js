const overlay = document.createElement("div")
const overlay_message = document.createElement("h1")

function display_overlay() {
    overlay.className = "overlay"

    overlay_message.className = "overlay_msg"
    overlay_message.innerText = "Click to continue."

    document.body.appendChild(overlay)
    document.body.appendChild(overlay_message)

    wait_for_click()
}

function wait_for_click() {
    document.body.addEventListener("click", function() {
        overlay.remove()
        overlay_message.remove()

        document.body.removeEventListener("click", function() {
            return
        })
    })
}

display_overlay()