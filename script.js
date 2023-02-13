const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("button_sigin");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  // verifica se o email foi preenchido e se é válido
  if (email.value == "" || !isEmailValid(email.value)) {
    alert("O campo email é obrigatório, digite um email válido");
    return;
  }

  // verifica se a senha foi preenchido e se é válida

  if (!validatePassword(password.value, 6)) {
    alert("A senha deve ter no mínimo 6 dígitos");
  }

  form.submit();
});

// Função que valida email
function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

// Função que valida a senha
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    //senha válida
    return true;
  }
  return false;
}
