const preferences = {
  theme: "dark",
  language: "en"
};

localStorage.setItem("preferences", JSON.stringify(preferences));

const savedPreferences = JSON.parse(localStorage.getItem("preferences") ?? "{}");

console.log(savedPreferences.theme);
console.log(savedPreferences.language);
