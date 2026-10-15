function processMarks(marks, callback) {
  return marks.map(callback);
}

const marks = [50, 60, 70];
const updatedMarks = processMarks(marks, mark => mark + 5);

console.log(updatedMarks);
