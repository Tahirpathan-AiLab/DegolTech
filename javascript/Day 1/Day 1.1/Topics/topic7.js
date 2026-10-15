/*
Topic 7: Variable Shadowing
*/

const city = "Anand";

function showcity() {
    const city =  "Surat" 
    console.log(city)
}

showcity();
console.log(city);