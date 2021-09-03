var averageTemp = [];

// 1일째
averageTemp[0] = [];
averageTemp[0][0] = 18;
averageTemp[0][1] = 19;
averageTemp[0][2] = 22;
averageTemp[0][3] = 24;
averageTemp[0][4] = 21;
averageTemp[0][5] = 19;

// 2일째
averageTemp[1] = [];
averageTemp[1][0] = 19;
averageTemp[1][1] = 19;
averageTemp[1][2] = 23;
averageTemp[1][3] = 23;
averageTemp[1][4] = 22;
averageTemp[1][5] = 20;

function printMatrix(myMatrix) {
  let str = "";
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      str += `${myMatrix[i][j]} `;
    }
    str += "\n";
  }
  console.log(str);
}

printMatrix(averageTemp);
