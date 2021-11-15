// 오브젝트 리터럴 표기법을 사용하여 오브젝트를 생성하고 student 변수에 할당합니다.
const student = {
  // name 키값에 string 데이터타입 값을 할당합니다.
  name: "chloe",

  // study 키값에 함수 리터럴을 할당합니다. (메서드)
  study: function (subject) {
    console.log(`${subject} 과목을 공부합니다.`);
  },
};

// 오브젝트 Create
student.age = 100;
student["job"] = "frontend engineer";

// 오브젝트 Read (. 연산자, 대괄호 연산자)
console.log(student.name);
console.log(student["age"]);

// 오브젝트 Update
student["name"] = "경선";
student.study = function () {
  console.log("공부해요.");
};

// 오브젝트 Delete
delete student.age;
delete student["job"];

console.group();
for (const key in student) {
  const val = student[key];
  console.log(key, val);
}
console.groupEnd();

console.group();
const objectKeys = Object.keys(student);
console.log(objectKeys.length);
console.groupEnd();
