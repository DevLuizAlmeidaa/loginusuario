document.addEventListener("DOMContentLoaded", function () {
  // Função para alternar a visibilidade da senha
  function togglePasswordVisibility(inputField, button) {
    if (inputField.type === "password") {
      inputField.type = "text"
      button.innerHTML =
        '<span class="material-icon material-symbols-outlined" style="cursor: pointer;">visibility</span>'
    } else {
      inputField.type = "password"
      button.innerHTML =
        '<span class="material-icon material-symbols-outlined" style="cursor: pointer;">visibility_off</span>'
    }
  }

  // Adiciona evento de clique aos botões de mostrar/esconder senha na tela de registro
  var togglePasswordButtonRegister = document.getElementById(
    "togglePasswordButtonRegister"
  )
  var passwordInputRegister = document.getElementById("passwordRegister")
  var confirmPasswordInputRegister = document.getElementById(
    "confirmPasswordRegister"
  )

  if (
    togglePasswordButtonRegister &&
    passwordInputRegister &&
    confirmPasswordInputRegister
  ) {
    togglePasswordButtonRegister.addEventListener("click", function () {
      togglePasswordVisibility(
        passwordInputRegister,
        togglePasswordButtonRegister
      )
    })

    // Como a tela de registro possui duas senhas para verificar, vamos lidar com ambos os campos
    var toggleConfirmPasswordButtonRegister = document.getElementById(
      "toggleConfirmPasswordButtonRegister"
    )

    toggleConfirmPasswordButtonRegister.addEventListener("click", function () {
      togglePasswordVisibility(
        confirmPasswordInputRegister,
        toggleConfirmPasswordButtonRegister
      )
    })
  }

  // Função auxiliar para validar o formato do email
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  // Função principal de validação do formulário de registro
  function validateRegisterForm() {
    var email = document.getElementById("emailRegister").value
    var password = document.getElementById("passwordRegister").value
    var confirmPassword = document.getElementById(
      "confirmPasswordRegister"
    ).value

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
    // Aqui você pode redirecionar para a tela de login ou outra página
    window.location.href = "index.html"

    // Restante da sua lógica de envio do formulário
    return true
  }

  // Adiciona evento de clique ao botão de criar conta na tela de registro
  var createAccountButton = document.getElementById("createAccountButton")
  if (createAccountButton) {
    createAccountButton.addEventListener("click", function (event) {
      event.preventDefault() // Impede o envio do formulário por padrão
      validateRegisterForm() // Chama a função de validação do formulário
    })
  }

  // Adiciona evento de clique ao campo de email para mostrar emails salvos
  var emailInputRegister = document.getElementById("emailRegister")
  if (emailInputRegister) {
    emailInputRegister.addEventListener("click", function () {
      // Aqui você pode implementar a lógica para mostrar os emails salvos
      console.log("Mostrar emails salvos")
    })
  }
})
