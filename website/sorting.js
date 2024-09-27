const generateBtn = document.querySelector("#generateBtn");
const background = document.querySelector("#background");
const sortBtn = document.querySelector("#sortBtn");


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomColor() {
  // Zufällige RGB-Werte erzeugen (jeweils zwischen 0 und 255)
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // RGB-Farbwert als String zurückgeben
  return `rgb(${r}, ${g}, ${b})`;
}

function removeAllBars() {
  const bars = background.querySelectorAll(".bar");

  bars.forEach((bar) => bar.remove());
}

generateBtn.addEventListener("click", () => {
  removeAllBars();

  let size = document.querySelector("#size").value;
  size = parseInt(size, 10);
  console.log(size);

  if (size != 0 && size < 51) {
    size = size;
  } else {
    size = Math.floor(Math.random() * 50);
  }

  for (let i = 0; i < size; i++) {
    const newBar = document.createElement("div");

    newBar.classList.add("bar");

    newBar.style.backgroundColor = getRandomColor();
    newBar.style.height = Math.floor(Math.random() * 500) + "px";

    background.appendChild(newBar);
  }
});

sortBtn.addEventListener("click", async () => {

    const barsArray = Array.from(background.children);

    const length = barsArray.length;

    for(let i = 0; i < length; i++){
        for(let j = 0; j < length - 1; j++){

            const height1 = parseInt(barsArray[j].style.height);
            const height2 = parseInt(barsArray[j + 1].style.height);


            if(height1 > height2){
                const temp = barsArray[j];
                barsArray[j] = barsArray[j + 1];
                barsArray[j + 1] = temp;
            }

            background.replaceChildren(...barsArray);

            await sleep(10);
        }        
    }

    


});
