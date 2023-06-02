function reverseNumber() {
    var number = document.getElementById("inputNumber").value;
    var reversedNumber = parseInt(number.toString().split('').reverse().join(''));
    document.getElementById("result").innerHTML = "Reversed Number: " + reversedNumber;
}