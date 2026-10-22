const preferences = { theme: "light", language: "English" };
localStorage.setItem("day5Preferences", JSON.stringify(preferences));

const savedPreferences = JSON.parse(localStorage.getItem("day5Preferences") ?? "{}");

console.log(savedPreferences.theme);
console.log(savedPreferences.language);
