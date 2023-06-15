const base = document.querySelector("#base")
const height = document.querySelector("#height")
const calculateBtn = document.querySelector("#calculate-Btn")
const outputMsg = document.querySelector(".output-msg")

function calculateArea() {
    
    var b = Number(base.value)
    var h = Number(height.value)
    if (b <= 0 || h <= 0) {
        outputMsg.style.display = "block";
        outputMsg.innerText = "Given Argument is not vaild"
    } else {
        outputMsg.style.display = "block";
        const area = 0.5 * b * h;
        outputMsg.innerHTML = "Area of triangle is " + area
    }
}

calculateBtn.addEventListener("click", calculateArea)