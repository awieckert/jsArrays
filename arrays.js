console.log("This is a console Log");



var palindrome = function (value){
    var toArray = value.split('').reverse().join('');
    if (value === toArray) {
        alert(value + " is a Palindrome!")
    } else {
        alert(value + " is not a Palindron!");
    }
}

palindrome("racecar");


var animals = ["cat", "goat", "hip, hop"]
var animalzElement = document.getElementById('animalz');
 for(var i = 0; i < animals.length; i++){
    console.log("animal: ", animals[i]);
    animalzElement.innerHTML += '<h5>' + animals[i] + '</h5>';
 }

 var book1 = "Catch 22";
 var book2 = "Slaughterhouse 5";
 var book3 = "Fahrenheit 451";

 var bookSplit = book1.split('');
 var realNumz = [];

 for(var j = 0; j < bookSplit.length; j++){
      if (bookSplit[j]*1) {
            realNumz.push(bookSplit[j]);
      }

 }

 console.log ("answer:", realNumz.join(''));