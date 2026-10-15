// Lexical scope: a function can use variables from where it was written.
const company = "Digoltech";

function showCompany() {
  console.log(company);
}

showCompany();

// A local variable with the same name is used inside this function.
function showLocalCompany() {
  const company = "My Local Company";
  console.log(company);
}

showLocalCompany();
console.log(company);
