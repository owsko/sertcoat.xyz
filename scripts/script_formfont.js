const fontType = ["'Yarndings 20'"];
const font_sub = document.querySelector(".form");
const buttonEl = document.getElementById("btn");

font_sub.addEventListener("submit", function randomizeFont() {
    let fontEl = document.getElementsByClassName("randomfont");

    var num;
    num = Math.floor(Math.random() * fontType.length);
    for (let i = 0; i < fontEl.length; i++) {
        fontEl[i].style.fontFamily = fontType[num];
        fontEl[i].style.borderTopWidth = '0px';
        fontEl[i].style.borderBottomWidth = '0px';
    }
});

buttonEl.addEventListener("mouseover", function changeName() {
    buttonEl.textContent = "SEND";
});

buttonEl.addEventListener("mouseout", function changeName() {
    buttonEl.textContent = "__φ(．．)";
});
