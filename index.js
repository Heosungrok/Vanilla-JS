const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS); // title의 classlist에 CLICKED_CLASS가 있으면 add 아니면 remove
}

function init () {
    title.addEventListener("click", handleClick);
}
init();