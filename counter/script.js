const nums = document.querySelectorAll(".nums span")
const button = document.getElementById("replay")

function setAnimationListener() {
    nums.forEach((num) => {
        num.addEventListener("animationend", (e) =>{
            if (e.animationName === "goIn") { // when In animation end,
                num.classList.remove("num_in");
                num.classList.add("num_out");   // set it out. Works for the last item
            }else if(e.animationName === "goOut"){
                num.classList.remove("num_out");  // when Out animation end, set it to null
                if (num.nextElementSibling){
                    num.nextElementSibling.classList.add("num_in")
                }
            }
        })
    })
}

function resetAnimation() {
    nums[0].classList.add("num_in");
}

button.addEventListener("click", () => {
    resetAnimation();
})

setAnimationListener();