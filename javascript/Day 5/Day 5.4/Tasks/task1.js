function getUserCity(user = {}) {
  return user.address?.city ?? "Unknown city";
}

console.log(getUserCity({ address: { city: "Anand" } }));
console.log(getUserCity({}));
