const base = document.querySelector("#base")
const perpendicular = document.querySelector("#perpendicular")
const calculateBtn = document.querySelector("#calculate-Btn")
const outputMsg = document.querySelector(".output-msg")

function calcHypotenuse() {
    var b = Number(base.value)
    var p = Number(perpendicular.value)
    var new_b = b * b
    var new_p = p * p
    if (b <=0 || p<=0){
        outputMsg.style.display = "none"
    } else{
        const hypo = Math.sqrt(new_b + new_p)
        const new_hypo = Math.round((hypo + Number.EPSILON) * 100) / 100
        outputMsg.style.display = "block"
        outputMsg.innerHTML = "Hypotenuse of right angle traingle is " + new_hypo

    }
    
}

calculateBtn.addEventListener("click", calcHypotenuse)