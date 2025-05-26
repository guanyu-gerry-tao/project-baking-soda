const reset_button = document.getElementById("reset_button");
const reduce_progress_button = document.getElementById("progress_num_controller_reduce");
const increase_progress_button = document.getElementById("progress_num_controller_increase");
const previous_button = document.getElementById("previous");
const next_button = document.getElementById("next");
const num_of_dots = document.getElementById("items_num");
const progress_dots = document.querySelector(".progress_dots")

let progresses;
function updateProgressDots() {
    progresses = document.querySelectorAll(".progress_dots .progress");
};
updateProgressDots();


let progressing = 0;

function setProgressClick() {
    previous_button.addEventListener("click", () => {
        console.log("previous clicked!");
        if (progressing > 0) {
            progresses[progressing].lastElementChild.classList.remove("dot_flagged")
            progresses[progressing].firstElementChild.classList.remove("animate_line")
            progressing--;
        }
    })
    next_button.addEventListener("click", () => {
        console.log("next clicked!");
        if (progressing < progresses.length -1) {
            progressing++;
            progresses[progressing].lastElementChild.classList.add("dot_flagged")
            progresses[progressing].firstElementChild.classList.add("animate_line")
        }
    })
}

function setProgressNums() {
    increase_progress_button.addEventListener("click", () => {
        console.log("increase button clicked!");
        if (progresses.length < 7){
            const newProgress = document.createElement("div");
            newProgress.id = progresses.length;
            newProgress.className = "progress";
            const newDash = document.createElement("div");
            newDash.classList.add("dash");
            const newLineBackground = document.createElement("div");
            newLineBackground.classList.add("line_background");
            const newLine = document.createElement("div");
            newLine.classList.add("line")
            const newDot = document.createElement("div");
            newDot.classList.add("dot");
            const newText = document.createTextNode(progresses.length + 1)
            newDot.appendChild(newText);

            newDash.appendChild(newLineBackground);
            newLineBackground.appendChild(newLine);
            newProgress.appendChild(newDash);
            newProgress.appendChild(newDot);

            progress_dots.appendChild(newProgress);
            updateProgressDots()
            num_of_dots.innerText = progresses.length;
        }
    })
    reduce_progress_button.addEventListener("click", () => {
        console.log("reduce button clicked!");
        if (progresses.length > 1){
            const lastProgress = progresses[progresses.length-1];
            lastProgress.remove();
            updateProgressDots();
            if (progressing > progresses.length -1){
                progressing = progresses.length -1;
            }
            num_of_dots.innerText = progresses.length;
        }
    })
}

function setReset() {
    reset_button.addEventListener("click", () => {
        location.reload()
    })
}

setProgressClick()
setProgressNums()
setReset()