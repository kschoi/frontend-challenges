/**
 * localStorage
 *
 * 로컬스토리지의 데이터는 기본적으로 영구적으로 저장되지만, 브라우저와 모바일 환경에 따라 다릅니다. 5MB의 용량 제한이 있습니다.
 * 데이터는 문자열로 저장됩니다.
 **/
// -----------------------------------------------------------------------------------
// 실습1 - 로컬스토리지 데이터 저장/가져오기/삭제하기
localStorage.setItem("key", "value");
let data = localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();
