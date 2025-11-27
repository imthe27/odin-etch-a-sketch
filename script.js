const body = document.querySelector("body");
const container = document.querySelector("#container");
const divbtn = document.createElement("div");
const btn = document.createElement("button");
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let input = '';

function gradualOpacity(t) {
    const currentOpacity = parseFloat(t.style.opacity) || 0;
    const increase = Math.min(currentOpacity + 0.1, 1);
    return increase;
}

function newGrid(square) {
    container.innerHTML = '';
    let basis = `${100/square}%`;
    for (let i = (square*square);i > 0; i--) {
        const div = document.createElement("div");
        div.style.flex = `0 0 ${basis}`;
        div.style.aspectRatio = "1 / 1";
        div.addEventListener("mouseenter", (e) => {
            e.target.style.background = `rgb(${randomBetween(0,255)},
                                             ${randomBetween(0,255)},
                                             ${randomBetween(0,255)})`;
            e.target.style.opacity = gradualOpacity(e.target);
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