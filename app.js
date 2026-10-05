let count = 0;

const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.addEventListener("click", function () {
    count++;
    number.textContent = count;
});

decrease.addEventListener("click", function () {
    if (count > 0) {
        count--;
        number.textContent = count;
    }
});