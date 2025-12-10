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
      const point = this.createPoint(
        100 * Math.random(),
        startOfTheWeek.add(i, "day").toDate(),
      );

      const dataPoint = document.createElement("div");

      const topDistance =
        this.containerHeight - point[0] * (this.containerHeight / 100);

      const dayWidth = this.containerWidth / 7;
      const horizontalOffset = dayWidth / 2;
      const leftDistance = i * dayWidth + horizontalOffset;

      dataPoint.className = "absolute rounded outline-4 outline-stone-500";

      dataPoint.style.top = `${topDistance}px`;
      dataPoint.style.left = `${leftDistance}px`;

      if (this.container) {
        this.container.appendChild(dataPoint);
      }
    }
  }

  private createPoint(value: number, date: Date): Point {
    const point: Point = [value, date];
    this.points.push(point);
    return point;
  }
}
