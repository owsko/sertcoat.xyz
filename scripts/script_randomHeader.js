let headerEl = document.getElementById("header-h1");
const emoticon = ["༼ ༎ຶ ᆺ ༎ຶ༽", "(,,◕　⋏　◕,,)"];
//"◑____________◑",

function randomEmoticon() {
    let i = Math.floor(Math.random() * emoticon.length);
    headerEl.textContent = emoticon[i];
}

randomEmoticon();

