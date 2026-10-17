const start = new Date("2026-01-01");
const end = new Date("2026-01-10");
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const daysBetween = (end - start) / millisecondsPerDay;

console.log(daysBetween);
