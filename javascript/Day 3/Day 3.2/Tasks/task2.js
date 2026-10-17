const course = {
  name: "JavaScript",
  lessons: ["Variables", "Functions", "Objects"],
  showLessons() {
    this.lessons.forEach(lesson => console.log(lesson));
  }
};

course.showLessons();
