// Assignment No 9

// Question no # 1

// create new serries of array missing one number and found this number in the array
var series = [1, 2, 3, 5, 6, 7, 8, 9, 10];
var missingNumber = null;
for (var i = 0; i < series.length; i++) {
  if (series[i] !== i + 1) {
    missingNumber = i + 1;
    break;
  }
}
console.log("Missing number in the series:", missingNumber);

// create new serries of array missing some number and found this number in the array
var series = [1, 2, 3, 4, 5, 6, 7, 8, 10];
var missingNumber = [];
for (var i = 0; i < series.length; i++) {
  if (series[i] !== i + 1) {
    missingNumber = i + 1;
    break;
  }
}
console.log("Missing numbers in the series:", missingNumber);
