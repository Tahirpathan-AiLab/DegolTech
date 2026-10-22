const score = 0;
const username = "";
const missingValue = null;

console.log(score || 100);
console.log(score ?? 100);
console.log(username || "Guest");
console.log(username ?? "Guest");
console.log(missingValue ?? "Not available");
