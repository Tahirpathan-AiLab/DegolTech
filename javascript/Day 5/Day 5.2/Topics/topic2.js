const users = [
  { id: 1, name: "Asha", email: "asha@example.com", active: true },
  { id: 2, name: "Ravi", email: "ravi@example.com", active: false },
  { id: 3, name: "Neha", email: "neha@example.com", active: true }
];

const activeUsers = users
  .filter(user => user.active)
  .map(user => ({ name: user.name, email: user.email }));

console.log(activeUsers);
