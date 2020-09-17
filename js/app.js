class CreateButtons {
  constructor(numOfButtons) {
    this.numberOfButtons = numOfButtons;
  }

  validate() {
    if (isNaN(parseInt(this.numberOfButtons))) {
      return false;
    }

    if (!document.getElementById("root")) {
      return false;
    }

    if (!document.getElementById("output")) {
      return false;
    }

    if (this.numberOfButtons < 0) {
      return false;
    } else return true;
  }

  // Creating method to create buttons with associated event.

  createButtons() {
    // Running a loop to create buttons
    if (this.validate()) {
      for (let i = 0; i < parseInt(this.numberOfButtons); i++) {
        const newButton = document.createElement("button");
        newButton.innerHTML = `Button${i + 1}`;
        newButton.style.color = "white";
        newButton.style.backgroundColor = "grey";
        newButton.onclick = function () {
          document.getElementById(
            "output"
          ).innerHTML = `buttonName: ${this.innerHTML}, Index: ${i}`;
        };
        document.getElementById("root").appendChild(newButton);
      }
    } else console.log("encountered error");
  }
}

const init = new CreateButtons(5);
init.createButtons();
