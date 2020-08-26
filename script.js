var btns = document.getElementsByTagName("button");
var cal = document.getElementById("cal");

for (var thisBtn of btns) {
    thisBtn.addEventListener('click', function () {
        if (this.innerHTML == "=")
            cal.value = eval(cal.value);
        else if (this.innerHTML == "C")
            cal.value = "";
        else
            cal.value += this.innerHTML;
    })
}





