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


