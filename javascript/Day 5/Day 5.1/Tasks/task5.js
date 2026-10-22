function getProfileMessage(user = {}) {
  const name = user.name ?? "Unknown user";
  const city = user.address?.city ?? "Unknown city";

  return `${name} lives in ${city}.`;
}

console.log(getProfileMessage({ name: "Asha", address: { city: "Anand" } }));
console.log(getProfileMessage({ address: {} }));
console.log(getProfileMessage());
