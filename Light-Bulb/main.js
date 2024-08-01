const switchBtn = document.querySelector(".switch");
const body = document.body;

switchBtn.addEventListener('click', function() {
    body.classList.toggle("on");
});