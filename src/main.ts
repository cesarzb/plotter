type Point = [number, Date];

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const data: Point[] = [
  [1, today],
  [2, tomorrow],
];
