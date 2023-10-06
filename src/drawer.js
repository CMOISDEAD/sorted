const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const draw = (array, active, ctx) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < array.length; i++) {
    ctx.fillRect(i, canvas.height, 1, -array[i] / 2.5);
    ctx.fillStyle = i === active ? "red" : "white";
    if (i === active) {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = "white";
    }
  }
};

export const complete = async (array, ctx) => {
  for (let i = 0; i < array.length; i++) {
    ctx.fillStyle = "green";
    ctx.fillRect(i, canvas.height, 1, -array[i] / 2.5);
    await delay(1);
  }
};
