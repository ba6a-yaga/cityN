function txtInput(label,input) {
    var de = document.getElementById(label);
    var el = document.getElementById(input);
    if (el !== null && el.value === "") {
        de.classList.remove("full");
    } else {
        de.classList.add("full");
    }
}
function selectInput(label,input) {
    var de = document.getElementById(label);
    var el = document.getElementById(input);
    var strUser = el.options[el.selectedIndex].value;
    console.log(typeof strUser);
    console.log(strUser);
    if (strUser === "0") {
        de.classList.remove("full");
        console.log(strUser+"notfull");
    } else {
        de.classList.add("full");
        console.log(strUser+"full");
    }
}