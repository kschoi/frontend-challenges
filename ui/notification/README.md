# 01-notification

## Question

### 요구사항

- 다음 코드의 `new Notification(...)`가 정상적으로 동작하도록 구현해주세요.
- 파라미터의 className 값에 warning, success, error, info을 넘기면 해당 배경컬러로 보이게 해주세요.
- 마크업, 스타일을 어디에서 관리하면 좋을지 고민하여 자유롭게 작성해주세요.

```jsx
// "warning": #828282
// "success": #c6f6d5
// "error": #fed7d7
// "info": #beecf8

new Notification({ html: "<strong>여러분!</strong> 전할 이야기가 있어요.", className: "success" });
```

### 화면 예시

![](./example.gif)

## 학습 포인트

- .scss와 소스맵 이해
- 생성자 함수
- CSS transition
