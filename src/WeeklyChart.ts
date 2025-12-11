import dayjs from "dayjs";

type Point = [number, Date];

export default class WeeklyChart {
  private container: HTMLElement | null;
  private containerWidth: number = 0;
  private containerHeight: number = 0;
  private points: Point[] = [];

  constructor(containerId: string) {
    this.container = document.querySelector(`#${containerId}`);

    if (this.container) {
      this.containerWidth = this.container.clientWidth;
      this.containerHeight = this.container.clientHeight;
    }
  }

  public drawPlot(): void {
    console.log(this.points);

    const startOfTheWeek = dayjs().startOf("week");
    for (let i = 0; i < 7; i++) {
      const pointValue = 100 * Math.random();
      this.points.push([pointValue, startOfTheWeek.add(i, "day").toDate()]);

      this.drawPoint(i, pointValue);
    }
  }

  public addPoint(value: number, date: Date): void {
    this.points.push([value, date]);
    const passedDate = dayjs(date);
    const currentDate = dayjs();

    if (passedDate.isSame(currentDate, "week")) {
      this.drawPoint(passedDate.day(), value);
    }
  }

  private drawPoint(weekday: number, value: number): void {
    const dataPoint = document.createElement("div");

    const bottomDistance = value * (this.containerHeight / 100);

    const dayWidth = this.containerWidth / 7;
    const horizontalOffset = dayWidth / 2;
    const leftDistance = weekday * dayWidth + horizontalOffset;

    dataPoint.className = "absolute rounded outline-4 outline-stone-500";

    dataPoint.style.bottom = `${bottomDistance}px`;
    dataPoint.style.left = `${leftDistance}px`;

    if (this.container) {
      this.container.appendChild(dataPoint);
    }
  }
}
