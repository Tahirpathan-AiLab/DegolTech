const student = {
  name: "Ravi",
  marks: 72,
  showResult() {
    return this.name + " scored " + this.marks;
  }
};

console.log(student.showResult());
