const body = document.querySelector("body");
const container = document.querySelector("#container");
const divbtn = document.createElement("div");
const btn = document.createElement("button");
let input = '';

function newGrid(square) {
    container.innerHTML = '';
    let basis = `${100/square}%`;
    for (let i = (square*square);i > 0; i--) {
        const div = document.createElement("div");
        div.style.flex = `0 0 ${basis}`;
        div.style.aspectRatio = "1 / 1";
        div.addEventListener("mouseenter", (e) => {
            e.target.style.background = "blue";
        })
        container.appendChild(div)
    }
}

btn.textContent = "New Grid";
btn.addEventListener("click", () => {
    input = prompt("Type the desired size:", "16");
    newGrid(input);
})
divbtn.appendChild(btn);
body.insertBefore(divbtn, body.firstChild);
newGrid(16);