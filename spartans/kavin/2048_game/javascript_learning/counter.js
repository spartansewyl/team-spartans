
const a = document.querySelectorAll(".btns")

a.forEach(function(btns) {
    btns.addEventListener("click",function(e){
        console.log(e.currentTarget.classList);
    })
});