// ข้อที่ 2
function intToChar(num) {
    var str = '';
    while (num > 0) {
      str = String.fromCharCode((num - 1) % 26 + 65) + str;
      num = Math.floor((num - 1) / 26);
    }
    return str;
  }
  console.log(intToChar(1));




