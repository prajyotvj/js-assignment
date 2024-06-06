// operation 1
function formatName() {
  var fn = document.getElementById("firstName").value;
  var ln = document.getElementById("lastName").value;

  var CapFirstName = fn.charAt(0).toUpperCase() + fn.slice(1);
  var CapLastName = ln.charAt(0).toUpperCase() + ln.slice(1);

  var result = CapFirstName + " " + CapLastName;
  document.getElementById("display").innerText = "Result:" + " " + result;
}

// operation 2
function replaceWord() {
  var str1 = document.getElementById("inputString").value;
  var replaceWord = document.getElementById("replaceWord").value;
  var newWord = document.getElementById("newWord").value;

  var str2 = str1.replaceAll(replaceWord, newWord);
  document.getElementById("finalString").innerText = "Result:" + " " + str2;
}

// operation 3
function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function reverseWord() {
  var inputString = document.getElementById("inputWord").value;
  var reversedString = reverseString(inputString);
  document.getElementById("reversedWord").innerText =
   "Result:" + " " + reversedString;
}

// operation 4
function roundNumber() {
  var inputNumber = parseFloat(document.getElementById("inputNumber").value);
  var decimalDigits = parseInt(document.getElementById("decimalDigits").value);
  var roundedNumber = inputNumber.toFixed(decimalDigits);
  document.getElementById("roundedNum").innerText = "Result: " + roundedNumber;
}

// operation 5
function getCurrentDayAndTime() {
  const d = new Date();
  var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = day[d.getDay()];
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  var format =
    hours +
    " " +
    ampm +
    " : " +
    (minutes < 10 ? "0" : "") +
    minutes +
    " : " +
    seconds;

  var displayString = "Today is : " + day + ". Current time is : " + format;

  document.getElementById("currentDateTime").innerText = displayString;
}

getCurrentDayAndTime();
