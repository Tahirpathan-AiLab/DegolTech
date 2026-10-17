const student = {
  name: "Asha",
  marks: 85,
  showResult: function () {
    console.log(this.name + " scored " + this.marks);
  }
};

student.showResult();
