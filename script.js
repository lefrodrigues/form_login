const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("button_sigin");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value == "") {
    email.classList.add("errorInput");
  } else {
    email.classList.remove("errorInput");
  }

  if (password.value == "") {
    password.classList.add("errorInput");
  } else {
    password.classList.remove("errorInput");
  }

  if (
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1 ||
    email.value.indexOf(".") - email.value.indexOf("@") == 1
  ) {
    email.classList.add("errorInput");
  } else {
    email.classList.remove("errorInput");
  }

  if (password.value.lenght <= 5) {
    password.classList.add("errorInput");
  } else {
    password.classList.remove("errorInput");
  }
});
