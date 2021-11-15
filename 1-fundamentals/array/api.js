"use strict";

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 1. find
(function () {
  // const result = students.find((student) => student.score === 90);
  // console.log("find:", result);
})();

// 2. filter
(function () {
  // const result = students.filter((student) => student.enrolled === true);
  // console.log(result);
})();

// 3. map
(function () {
  // const result = students.map((student) => student.score);
  // console.log(result);
})();

// 4. some
(function () {
  // const result = students.some((student) => student.score < 50);
  // console.log(result);
})();

// 5. every
(function () {
  // const result = students.every((student) => student.score > 40);
  // console.log(result);
})();

// 6. reduce
(function () {
  // const result = students.reduce((prev, curr) => prev + curr.score, 0);
  // console.log(result / students.length);
})();

// 7. sort
(function () {
  // const result = students
  //   .map((student) => student.score)
  //   .sort((a, b) => a - b)
  //   .join();
  // console.log(result);
})();
