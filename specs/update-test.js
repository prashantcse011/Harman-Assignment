const checkElementCount = () => {
  if (document.getElementById("root").childElementCount != 5) {
    console.log("Number of elements created is not equal to 5. TEST FAILED !!");
    return false;
  } else {
    console.log("Number of elements created is equal to 5. TEST PASSED");
    return true;
  }
};

const checkElementType = () => {
  const childArray = document.getElementById("root").childNodes;
  let isButton = false;
  for (let i = 0; i < childArray.length; i++) {
    if (childArray[i].nodeName != "BUTTON") {
      isButton = false;
      break;
    } else isButton = true;
  }
  if (isButton === true) {
    console.log("Displayed elements are buttons. TEST PASSED");
    return true;
  } else {
    console.log("Displayed elements are not buttons. TEST FAILED !!");
    return false;
  }
};

const checkElementUpdateStatus = () => {
  if (document.getElementById("root").innerHTML != "") {
    console.log("Root div is successfully updated");
    return true;
  } else {
    console.log("Test Failed! Root div is not updated");
    return false;
  }
};

if (checkElementUpdateStatus() && checkElementCount() && checkElementType()) {
  console.log("All Tests Passed");
} else console.log("Few or All Tests Failed");
