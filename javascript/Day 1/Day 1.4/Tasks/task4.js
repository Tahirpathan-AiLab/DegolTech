function introduceStudent(name, age, course) {
  return "Hello, I am " + name + ", I am " + age + " years old, and I am learning " + course + ".";
}

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  }

  return "Odd";
}

function calculateDiscount(price, percentage) {
  if (price < 0 || percentage < 0 || percentage > 100) {
    return null;
  }

  return price - price * percentage / 100;
}

function getGrade(marks) {
  if (typeof marks !== "number" || marks < 0 || marks > 100) {
    return "Invalid marks";
  }
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 50) return "C";
  return "Fail";
}

function findStudent(studentList, name) {
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].name === name) {
      return studentList[i];
    }
  }

  return undefined;
}

const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 }
];

console.log(introduceStudent("Asha", 21, "MERN Stack"));
console.log(checkEvenOdd(4), checkEvenOdd(7), checkEvenOdd(0));
console.log(calculateDiscount(1000, 10), calculateDiscount(1000, 120));
console.log(getGrade(49), getGrade(50), getGrade(75), getGrade(90), getGrade(100));
console.log(findStudent(students, "Ravi"));
