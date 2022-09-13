const body = document.querySelector("body"); // got the body once, its stored and then just append the value each time

const createSquares = (num = 10) => {
  // Step 1
  for (let i = 1; i <= num; i++) {
    const div = document.createElement("div");
    // can also do div.className = 'square'
    div.style.backgroundColor = randColorRGB();
    div.classList.add("square");
    div.textContent = i;
    console.log(div);
    body.appendChild(div); //gives us all the divs appended to the body
    //   console.log(div.classList.contains("square"));
  }
};

const randColorRGB = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

createSquares(500);
