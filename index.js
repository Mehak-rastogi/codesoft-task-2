let inp = document.querySelector("input");
let allbtns = document.querySelectorAll("button");

for (const btn of allbtns) {
  btn.addEventListener("click", function (event) {
    // for showing color when btn is clicked
    btn.classList.add("addcolor");
    setTimeout(function () {
      btn.classList.remove("addcolor");
    }, 300);
    // to know which button is targeted
    let target = event.target;
    console.log(event.target.innerHTML);

    // Check if the button clicked is the "=" button
    if (event.target.innerHTML === "=") {
      inp.value = eval(inp.value);
    }
    //  check if clear is clicked
    else if (event.target.innerHTML === "Clear") {
      inp.value = " ";
    } else {
      inp.value += event.target.innerHTML;
    }
  });
}
