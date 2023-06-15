const angle1 = document.querySelector("#angle-one")
const angle2 = document.querySelector("#angle-two")
const angle3 = document.querySelector("#angle-three")
const calculateBtn = document.querySelector("#calculate-Btn")
const outputMsg = document.querySelector(".output-msg")

function checkTraingle() {
    var a1 = Number(angle1.value)
    var a2 = Number(angle2.value)
    var a3 = Number(angle3.value)
    var a4 = a1 + a2 + a3
    if (a1 > 0 || a2 > 0 || a3 > 0) {
        if (a4 === 180) {
            outputMsg.style.display = "block"
            outputMsg.innerHTML = "YaY!!!...Given angles form Traingle"
        } else {
            outputMsg.style.display = "block"
            outputMsg.innerHTML = "Ahhhh!!!...Given angles doesn't form Traingle"
        }
    } else {
        outputMsg.style.display = "block"
        outputMsg.innerHTML = "Given arguments are not valid"
    }
}

calculateBtn.addEventListener("click", checkTraingle)