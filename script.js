// Strings Handling
function stringLength() {
  var strLen = document.getElementById("strLen").value;
  if (strLen == "") {
    alert("Enter a string value");
  } else {
    console.log(`The length of given string is ${strLen.length}`);
    document.getElementById(
      "strLenR"
    ).innerHTML = `The length of given string is ${strLen.length}`;
  }
}
// Copy one string to another string
function stringCopy() {
  var strCopy1 = document.getElementById("strCopy1").value;
  var strCopy2 = document.getElementById("strCopy2").value;
  if (strCopy1 == "" || strCopy2 == "") {
    alert("Enter String Values");
  } else {
    console.log(
      `The Second String before copying is ${strCopy2}.<br> The Second String after copying is ${strCopy1}${strCopy2}`
    );
    document.getElementById(
      "strCopyR"
    ).innerHTML = `The Second String before copying is ${strCopy2}.<br> The Second String after copying is ${strCopy1}${strCopy2}`;
  }
}
// Concatenate two strings
function stringConcatenate() {
  var strConc1 = document.getElementById("strConc1").value;
  var strConc2 = document.getElementById("strConc2").value;
  if (strConc1 == "" || strConc2 == "") {
    alert("Enter String Values");
  } else {
    console.log(`The required String is ${strConc1}${strConc2}`);
    document.getElementById(
      "strConcR"
    ).innerHTML = `The required String is ${strConc1}${strConc2}`;
  }
}
// Compare two strings
function stringCompare() {
  var strComp1 = document.getElementById("strComp1").value;
  var strComp2 = document.getElementById("strComp2").value;
  if (strComp1 == "" || strComp2 == "") {
    alert("Enter String Values");
  } else if (strComp1 == strComp2) {
    console.log(`Both the strings are equal i.e ${strComp1} = ${strComp2}`);
    document.getElementById(
      "strCompR"
    ).innerHTML = `Both the strings are equal i.e ${strComp1} = ${strComp2}`;
  } else {
    console.log(`Both the strings are not equal i.e ${strComp1} = ${strComp2}`);
    document.getElementById(
      "strCompR"
    ).innerHTML = `Both the strings are not equal i.e ${strComp1} ≠ ${strComp2}`;
  }
}
// Lowercase string to uppercase
function stringLCase() {
  var strLCase = document.getElementById("strLCase").value;
  if (strLCase === "" || strLCase == strLCase.match(new RegExp(/^[0-9]+$/))) {
    alert("Enter alphabets");
  } else {
    strLCase = strLCase.toLowerCase();
    console.log(`The required String is ${strLCase}`);
    document.getElementById(
      "strLCaseR"
    ).innerHTML = `The required String is ${strLCase}`;
  }
}
//  Uppercase string to lowercase
function stringUCase() {
  var strUCase = document.getElementById("strUCase").value;
  if (strUCase === "" || strUCase == strUCase.match(new RegExp(/^[0-9]+$/))) {
    alert("Enter alphabets");
  } else {
    strUCase = strUCase.toToggleCase();
    console.log(`The required String is ${strUCase}`);
    document.getElementById(
      "strUCaseR"
    ).innerHTML = `The required String is ${strUCase}`;
  }
}
// Total number of alphabets, digits or special character in a string
function stringADS() {
  var strADS = document.getElementById("strADS").value;
  alphabets = 0;
  digits = 0;
  special = 0;
  if (strADS == "") {
    alert("Enter String Value");
  } else {
    for (let index = 0; index < strADS.length; index++) {
      if (strADS[index].match(/[A-Za-z]/)) {
        alphabets++;
      } else if (strADS[index].match(/[0-9]/)) {
        digits++;
      } else {
        special++;
      }
    }
    console.log(
      `No. of alphabets in ${strADS} = ${alphabets} <br> No. of digits in ${strADS} = ${digits} <br> No. of special characters  in ${strADS} = ${special}`
    );
    document.getElementById(
      "strADSR"
    ).innerHTML = `No. of alphabets in ${strADS} = ${alphabets} <br> No. of digits in ${strADS} = ${digits} <br> No. of special characters  in ${strADS} = ${special}`;
  }
}
// Last occurrence of a character
function stringLastOcc() {
  var locS = document.getElementById("locS").value;
  var locC = document.getElementById("locC").value;
  if (locS == "" || locC == "") {
    alert("Enter String Values");
  } else {
    let occurrenceL = locS.lastIndexOf(locC);
    if (occurrenceL == -1) {
      console.log(`${locC} does not occurs in ${locS}`);
      document.getElementById(
        "locR"
      ).innerHTML = `${locC} does not occurs in ${locS}`;
    } else {
      console.log(`${locC} occurs at ${occurrenceL} index in ${locS}`);
      document.getElementById(
        "locR"
      ).innerHTML = `${locC} occurs at ${occurrenceL} index in ${locS}`;
    }
  }
}
// First occurrence of a character
function stringFirstOcc() {
  var focS = document.getElementById("focS").value;
  var focC = document.getElementById("focC").value;
  if (focS == "" || focC == "") {
    alert("Enter String Values");
  } else {
    let occurrenceF = focS.indexOf(focC);
    if (occurrenceF == -1) {
      console.log(`${focC} does not occur in ${focS}`);
      document.getElementById(
        "focR"
      ).innerHTML = `${focC} does not occur in ${focS}`;
    } else {
      console.log(`${focC} occurs at ${occurrenceF} index in ${focS}`);
      document.getElementById(
        "focR"
      ).innerHTML = `${focC} occurs at ${occurrenceF} index in ${focS}`;
    }
  }
}
// Total number of words in a string.
function numOfWords() {
  var strNum = document.getElementById("strNum").value;
  var countWord = 1;
  if (strNum == "") {
    alert("Enter String value");
  }
  for (let i = 0; i < strNum.length; i++) {
    if (strNum.charAt(i) == " ") {
      countWord = countWord + 1;
    }
  }
  console.log(`Total number of words in a string are ${countWord}`);
  document.getElementById(
    "strNumR"
  ).innerHTML = `Total number of words in a string are ${countWord}`;
}
// Total number of vowels and consonants in a string.
function vowelConsonantNum() {
  var vowCons = document.getElementById("vowCons").value;
  var vowelNum = 0;
  var consonantNum = 0;
  if (vowCons == "") {
    alert("Enter a string value ");
  } else if (vowCons.match(/[a-z]/g)) {
    for (let i = 0; i < vowCons.length; i++) {
      if (vowCons[i].match(/[aeiou]/)) {
        vowelNum++;
      } else if (vowCons[i].match(/[a-z]/)) {
        consonantNum++;
      }
    }
  }
  console.log(
    `Total number of consonants in given string = ${consonantNum} and Total number of vowels in given string = ${vowelNum}`
  );
  document.getElementById(
    "vowConsR"
  ).innerHTML = `Total number of consonants in given string = ${consonantNum} and Total number of vowels in given string = ${vowelNum}`;
}
