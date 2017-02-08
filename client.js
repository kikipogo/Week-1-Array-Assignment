//Declare stringList array
var stringList = ["ASDF", "BLAH", "Oh! ", "Hi ", "There!"];

//create function numStrings that takes parameters (list, i)
function numStrings(list, i){

//create newString variable
  var newString = "";

//incrementing length of list starting at index
  for (i; i < list.length; i++) {
    //adding substring to newString
    newString += list[i];
  }
  return newString;
}

//Console log returned string from the numString function
console.log(numStrings(stringList, 3));
console.log(numStrings(stringList, 2));
