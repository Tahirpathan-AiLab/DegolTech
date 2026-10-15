/*
Topic 4: Global Scope
A top-level variable can generally be accessed by functions within the same script, subject to module and environment rules.
*/
const institute = "Code Academy";

function showInstitute() {
  console.log(institute);
}

showInstitute(); 