// peration 1: first name and last name capitalized
function name_Format() {
  var fn = document.getElementById("first_Name").value;
  var ln = document.getElementById("last_Name").value;
  var CapFn = fn.charAt(0).toUpperCase() + fn.slice(1);
  var CapLn = ln.charAt(0).toUpperCase() + ln.slice(1);
  var result = CapFn + " " + CapLn;
  document.getElementById("display").innerText = "Result:" + " " + result;
}

// operation 2:word to replace and the new word
function replace_Word() {
  var str1 = document.getElementById("input_String").value;
  var replaceWord = document.getElementById("replace_Word").value;
  var newWord = document.getElementById("new_Word").value;

  var str2 = str1.replaceAll(replaceWord, newWord);
  document.getElementById("final_String").innerText = "Result:" + " " + str2;
}

// operation 3:word with reversed characters
function reverseStr(str) {
  var splitStr = str.split("");
  var reverse = splitStr.reverse();
  var join = reverse.join("");
  return join;
}

function reverse_Word() {
  var inputStr = document.getElementById("input_Word").value;
  var reversedStr = reverseStr(inputStr);
  document.getElementById("reversed_Word").innerText =
    "Result:" + " " + reversedStr;
}

// operation 4: rounding off the number and display
function round_Num() {
  var input_Num = parseFloat(document.getElementById("input_Number").value);
  var decimal_Num = parseInt(document.getElementById("dec_Digits").value);
  var rounded_Num = input_Num.toFixed(decimal_Num);
  document.getElementById("rounded_Num").innerText = "Result: " + rounded_Num;
}

// operation 5: display current day and time
function Day_Time() {
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

  document.getElementById("displayDate_Time").innerText = displayString;
}

Day_Time();
