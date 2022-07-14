document.getElementById('user').setAttribute('flagFocus', "false")
document.getElementById('pass').setAttribute('flagFocus', "false")
document.getElementById('user').addEventListener('focus', focus)
document.getElementById('pass').addEventListener('focus', focus)




//============================================================================================
function focus() {
    console.log('shit');
    if (this.getAttribute('flagFocus') === "false") {
        this.value = "";
        this.style.color = "black";
    }
    this.setAttribute('flagFocus', "ture");
};