function displayProfile(user = {}) {
  const name = user.name ?? "Unknown";
  const city = user.address?.city ?? "Unknown city";

  return `${name} lives in ${city}.`;
}

console.log(displayProfile({ name: "Ravi", address: { city: "Surat" } }));
console.log(displayProfile());
