const user = {
  name: "Neha",
  contact: {
    phone: "9876543210"
  }
};

const missingContactUser = { name: "Ravi" };

console.log(user.contact?.phone);
console.log(missingContactUser.contact?.phone);
