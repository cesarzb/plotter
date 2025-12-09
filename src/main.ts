import dayjs from "dayjs";

type Point = [number, Date];

class WeeklyChart {
  private container: HTMLElement | null;
  private containerWidth: number = 0;
  private containerHeight: number = 0;
  private points: Point[] = [];

  constructor(containerId: string) {
    this.container = document.querySelector(`#${containerId}`);

    if (this.container) {
      this.containerWidth = this.container.clientWidth;
      this.containerHeight = this.container.clientHeight;
      const dayWidth = this.containerWidth / 7;
    }
  }

  public drawPlot(): void {
    this.points.forEach(() => {
      let dataPoint = document.createElement("div");

      dataPoint.className =
        "absolute top-0 left-0 rounded outline-4 outline-stone-500";

      if (this.container) {
        this.container.appendChild(dataPoint);
      }
    });
  }

  private initializePoints() {
    const startOfTheWeek = dayjs().startOf("week");
    for (let i = 0; i < 7; i++) {
      this.points.push([
        100 * Math.random(),
        startOfTheWeek.add(i, "day").toDate(),
      ]);
    }
  }
}

const chart = new WeeklyChart("plot");

chart.drawPlot();
