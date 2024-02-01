document.addEventListener("DOMContentLoaded", function () {
  var togglePasswordButton = document.getElementById("togglePasswordButton")
  var passwordInput = document.getElementById("password")

  if (togglePasswordButton && passwordInput) {
    togglePasswordButton.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text"
        togglePasswordButton.innerHTML =
          '<span class="material-icon material-symbols-outlined" style="cursor: pointer;">visibility</span>'
      } else {
        passwordInput.type = "password"
        togglePasswordButton.innerHTML =
          '<span class="material-icon material-symbols-outlined" style="cursor: pointer;">visibility_off</span>'
      }
    })
  }

  // Função principal de validação do formulário
  function validateForm() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confirmPassword = document.getElementById("confirm_password").value

    // Valida o email
    if (!validateEmail(email)) {
      alert("Por favor, insira um endereço de e-mail válido.")
      return false
    }

    // Verifica a correspondência das senhas
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.")
      return false
    }

    // Se todas as validações passarem, o formulário pode ser enviado
    alert("Conta criada com sucesso!")
    // Aqui você pode redirecionar para a tela de login
    window.location.href = "index.html"

    // Restante da sua lógica de envio do formulário
    return true
  }

  // Adiciona evento de clique ao botão de criar conta na tela de registro
  var createAccountButton = document.querySelector(
    ".register-card-form button[type='submit']"
  )
  if (createAccountButton) {
    createAccountButton.addEventListener("click", function (event) {
      event.preventDefault() // Impede o envio do formulário por padrão
      validateForm() // Chama a função de validação do formulário
    })
  }

  // Função auxiliar para validar o formato do email
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
  }
})
