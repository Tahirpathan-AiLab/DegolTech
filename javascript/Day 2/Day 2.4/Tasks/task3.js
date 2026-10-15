// Section C: Debugging
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());

const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);
console.log(doubled);

const students = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Ravi" }
];

const student = students.find(student => student.id === 2);
console.log(student);
