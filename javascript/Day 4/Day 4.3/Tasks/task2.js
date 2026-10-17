const firstDate = new Date("2026-03-01");
const secondDate = new Date("2026-03-08");
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const daysBetween = (secondDate - firstDate) / millisecondsPerDay;

console.log(daysBetween);
