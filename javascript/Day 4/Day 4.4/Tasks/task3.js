const user = {
  firstName: "Meera",
  lastName: "Shah",
  city: "Ahmedabad",
  active: true
};

const fullName = `${user.firstName} ${user.lastName}`;
const status = user.active ? "Active" : "Inactive";

console.log(`${fullName} lives in ${user.city}. Status: ${status}`);
