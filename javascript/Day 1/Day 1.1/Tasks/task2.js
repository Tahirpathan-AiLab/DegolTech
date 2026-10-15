const studentName = "Tahir";
const age = 22;
let taskCount = 1;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Initial Task Count:", taskCount);

taskCount++;
console.log("After first update:", taskCount);

taskCount++;
console.log("After second update:", taskCount);


/**
  Why I chose const and let?
    const → used for values that should not be reassigned, such as studentName and age.
    let → used for values that need to change, such as taskCount.
*/