const validate = (obj) => {
  obj.parentElement.classList.add("hide-border");
  obj.nextElementSibling.classList.add("hide-asterisk");
};

const resetIfEmpty = (obj) => {
  if (obj.value === "") {
    obj.parentElement.classList.remove("hide-border");
    obj.nextElementSibling.classList.remove("hide-asterisk");
  }

  if (obj.type === "email") {
    if (!obj.value || obj.value.split("").indexOf("@") === -1) {
      obj.parentElement.classList.remove("hide-border");
    }
  }
};
