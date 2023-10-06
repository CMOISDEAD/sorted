import { randomArray } from "./src/utils";
import { draw } from "./src/drawer";
import { algorithms } from "./src/algorithms";
import "./style.css";

const n = window.innerWidth - 25;
const array = randomArray(n);

document.querySelector("#app").innerHTML = `
  <div class="info">
    <h1 id="title" class="text-4xl font-bold">Sort Algorithms</h1>
    <p class="text-sm"><span class="font-bold">Array size:</span> ${array.length} numbers</p>
  </div>
  <div class="flex gap-4" id="buttons">
    <span class="font-bold">Algorithm buttons:</span>
  </div>
  <canvas id="canvas"/>
`;

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 90;

draw(array, 0, ctx);

algorithms.forEach(({ name, fn }) => {
  const button = document.createElement("button");
  button.innerText = name;
  button.classList.add("hover:underline");
  button.addEventListener("click", async () => {
    document.querySelector("#title").innerText = name;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    await fn(array, ctx);
  });
  document.querySelector("#buttons").appendChild(button);
});
