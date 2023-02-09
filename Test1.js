function intToChar(num) {
    var str = '';
    while (num > 0) {
      str = String.fromCharCode((num - 1) % 26 + 65) + str;
      num = Math.floor((num - 1) / 26);
    }
    return str;
  }
  console.log(intToChar(703)); 
  
  
  // sql test 1

  SELECT name,totalSales, RANK() OVER (ORDER BY totalSales DESC) ranks FROM Sales;


  // sql test 2
// Select name, totalSales, Sum(totalSales) OVER (Order By totalSales desc) as Accumulate From sales Order By totalSales desc;




