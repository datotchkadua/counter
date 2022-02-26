let count = 0;

//select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "#06FF00";
    } else if (count < 0) {
      value.style.color = "#DA1212";
    } else {
      value.style.color = "#88E0EF";
    }
    value.textContent = count;
  });
});
