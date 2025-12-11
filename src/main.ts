import WeeklyChart from "./WeeklyChart.js";

const chart = new WeeklyChart("plot");
const createPointButton: HTMLDivElement | null =
  document.querySelector("#createPointButton");

if (createPointButton) {
  createPointButton.onclick = (e) => {
    e.preventDefault();
    const pointDate: HTMLInputElement | null =
      document.querySelector("#newPointDate");
    const pointValue: HTMLInputElement | null =
      document.querySelector("#newPointValue");

    if (pointDate && pointValue && pointDate.value && pointValue.value) {
      console.log(pointDate, pointValue);
      chart.addPoint(Number(pointValue.value), new Date(pointDate.value));
    } else {
      console.log("Missing attributes!!");
    }
  };
}

chart.drawPlot();
