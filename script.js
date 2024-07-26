const container = document.querySelector("#container");



for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "grid");
    div.addEventListener("mouseenter", (e) => {
        e.target.style.background = "blue";
    })
    container.appendChild(div)
}