// 변수는 let 키워드로 선언합니다.
let bool = true;
let num = 100;
let str = "abc";
console.log(bool, num, str);
debugger;

// 변수는 값을 재할당하기 위해 사용합니다.
num = -10;
str = "def";
console.log(bool, num, str);
debugger;

// let 선언문보다 먼저 변수에 접근할 수 없습니다. (var는 가능)
console.log(a, b, c);
debugger;

// 선언문은 ,로 연결할 수 있습니다.
var a = 1,
  b = 2,
  c = 3;
console.log(a, b, c);
debugger;
