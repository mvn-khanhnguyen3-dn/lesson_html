// map
var array1 = [1,2,3,4];
var map1 = array1.map(function(x){
  return x * 2;
});
console.log(map1);
// filter
var array2 = [3,4,5,6];
var filter1 = array2.filter(function(value){
  if(value === 3){
    return false;
  }
  else return true;
});
console.log(filter1);
// reduce
var numbers = [10,20,30,40];
var total = numbers.reduce(function(total,currentValue){
  return total +  currentValue;
});
console.log(total);
// find
var ages = [10,15,20,25];
function checkAge(age){
  return age > 20
}
var age = ages.find(checkAge);
console.log(age);
// some
var array3 = [10,20,30,40];
var checkArray3 = function(value){
  return value % 2;
}
console.log(array3.some(checkArray3));

// Give an example for add a new element to an array[] (at the end)
var array5 = [1,2,3,4,5];
array5.push(6);
console.log(array5);
// Give an example for add a new element to an array[] (at the beginning)
var array6 = [1,2,3,4,5];
array6.unshift(6);
console.log(array6);
// Give an example for removing an element in array[]
var array7 = [10,11,12,13,14,15];
array7.pop();
// array7.shift();
// array7.splice(1,2);
console.log(array7);

// ### Playground
// 1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
var a = 5;
var b = 10;
console.log(a + b); 
// ----------------------
var a = 5;
var b = 5;
if( a === b){
  console.log((a + b)* 3);
}
// 2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function diff_num(x){
  if(x <= 19){
    return (19 - x);
  }else return (x - 19)* 3;
}
console.log(diff_num(12));
// console.log(diff_num(19));
// console.log(diff_num(22));
// 3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
function changeInput(input){
  var index = input.indexOf("*");
  var count = 0;
  var output = [];
  if(index >= 0){
    for(var i = 0; i <= 9; i++){
      reoutput = input.replace("*",i);
      if(parseInt(reoutput) % 3 == 0){
        output[count] = input.replace("*",i);
        count ++;
      }
    }
  }
  else {
    console.log("err");
  }
  console.log(output);
}
changeInput('1234567890*');
// A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
function changeInput2(input){
  var index = input.indexOf("*");
  var count = 0;
  var output = [];
  if(index >= 0){
    for(var i = 0; i <= 9; i++){
      reoutput = input.replace("*",i);
      if(parseInt(reoutput) % 6 == 0){
        output[count] = input.replace("*",i);
        count ++;
      }
    }
  }
  else {
    console.log("err");
  }
  console.log(output);
}
changeInput2('1234567890*');