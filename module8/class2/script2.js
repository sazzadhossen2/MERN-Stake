

// const changeButton = document.getElementById("cng-btn");

// const changeButtonHandler = () => {
//   const randomColor = `hsl(${Math.ceil(Math.random() * 360)} 100% 50%)`;
//   document.body.style.background = randomColor;
// };

// changeButton.addEventListener("click", changeButtonHandler);


// document.getElementById("theme-change").addEventListener("click",()=>{
// document.body.classList.add("dark-mode");
// });

// document.getElementById("theme-btn").addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });


const display =document.getElementById("display");
const increaseButto =document.getElementById("increase");
const decreaseButto =document.getElementById("decrease");

let count =0;

const updateDisplay=()=>{
display.innerText=count;
};

const increaseButtoDisplay=()=>{
  count++;
  updateDisplay();
};

const decreaseButtoDisplay=()=>{
  count--;
  updateDisplay();
};

increaseButto.addEventListener("click",increaseButtoDisplay);
decreaseButto.addEventListener("click",decreaseButtoDisplay);