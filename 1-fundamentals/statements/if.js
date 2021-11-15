function isAvailable(height) {
  let result;
  if (height >= 120) {
    result = "놀이기구에 탑승할 수 있습니다.";
  } else {
    result = "미안해요! 조금더 큰 다음에 오세요^^";
  }
  return result;
}

console.log(isAvailable(120));
