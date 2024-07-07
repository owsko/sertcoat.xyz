const fontType = ["'Yarndings 20'"];
const font_sub = document.querySelector(".form");

font_sub.addEventListener("submit", function randomizeFont() {
    let fontEl = document.getElementsByClassName("randomfont");

    var num;
    num = Math.floor(Math.random() * fontType.length);
    for (let i = 0; i < fontEl.length; i++) {
        fontEl[i].style.fontFamily = fontType[num];
    }
});