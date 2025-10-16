//array
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
  console.log(arr[i]);
}

//forEach
console.log("for Each");
var arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function (val) {
  console.log(val + 1);
});

//Map

console.log("Map");
var arr2 = [1, 2, 3, 4, 5];
arr2.map(function (val) {
  var MapArray = val * 2;
  console.log(MapArray);
});

//filter

console.log("Filter");
var arr3 = [1, 2, 3, 4, 5];
var ans = arr3.filter(function (val) {
  if (val > 3) {
    return true;
  } else {
    return false;
  }
});
console.log(ans);

//find

console.log("find");
arr3.find(function (val) {
  if (val == 12) {
    console.log("Find");
  } else {
    console.log(" Not Find");
  }
});

//indexof

console.log(arr3.indexOf(2));
