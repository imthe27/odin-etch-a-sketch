const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", i.valueOf());
    container.appendChild(div)
}