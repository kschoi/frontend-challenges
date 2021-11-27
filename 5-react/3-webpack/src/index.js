// Step1. vanilla javascript web component
// function component() {
//   const element = document.createElement("div");

//   element.innerHTML = "hello world";
//   /**
//    *
//    * 위 코드 대신 아래 코드를 주석해제하면 어떤 문제가 발생할 수 있을까요?
//    * script 태그를 통해서 lodash를 인클루드하고, 아래 라인에서 필요하지만 의존성을 명쾌하게 정의하지 않았습니다.
//    * 이는 전통적인 웹 개발방식과 같이 자바스크립트 관련 여러 관리 문제를 일으킵니다.
//    * 1. 의존하고 있는 자바스크립트 모듈(이하 의존성)이 외부 라이브러리인지 명확하지 않습니다.
//    * 2. 의존성이 누락되었거나 잘못된 순서로 로드되었다면 애플리케이션이 제대로 동작하지 않을 겁니다.
//    * 3. 의존성이 사용되지 않더라도, 브라우저가 불필요한 코드를 다운로드하는 것을 막을 방법이 없습니다.
//    */
//   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

// Step2. react component (파일 확장자를 jsx로 바꿔보세요.)
import React from "react";
import ReactDOM from "react-dom";

const Component = () => {
  return <div>hello world!</div>;
};

ReactDOM.render(<Component />, document.querySelector("#root"));
// webpack으로 빌드하고 에러를 만나보세요. 무엇이 필요할까요?
