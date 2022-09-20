import data from "../data.json" assert { type: "json" };

let dailyArray = data.map((item) => item.timeframes.daily);
let weeklyArray = data.map((item) => item.timeframes.weekly);
let monthlyArray = data.map((item) => item.timeframes.monthly);

let bgColors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

const dailyBtn = document.querySelector("#daily");
const weeklyBtn = document.querySelector("#weekly");
const monthlyBtn = document.querySelector("#monthly");
const secondSection = document.querySelector(".second-section");

dailyBtn.addEventListener("click", () => {
  renderCard(dailyArray);
});

weeklyBtn.addEventListener("click", () => {
  renderCard(weeklyArray);
});

monthlyBtn.addEventListener("click", () => {
  renderCard(monthlyArray);
});

function renderCard(array) {
  secondSection.innerHTML = "";

  array.forEach((element, index) => {
    secondSection.innerHTML += `
        <div class="card">
            <div class="card__background" style="background-color: ${
              bgColors[index]
            } ">
            <img class="card__image" src="./images/icon-${data[index].title
              .split(" ")
              .join("")
              .toLowerCase()}.svg" alt="${data[index].title}" />
            </div>
            <div class="card__details">
            <div class="card__activity">
                <p class="card__title">${data[index].title}</p>
                <img src="./images/icon-ellipsis.svg" alt="three dots" />
            </div>
            <div class="card__time">
                <p class="card__hour">${element.current}hs</p>
                <p class="card__previous">Previous - ${element.previous}hs</p>
            </div>
            </div>
        </div>
        `;
  });
}
