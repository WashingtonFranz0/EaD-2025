document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const mensagem = document.getElementById("mensagem");

    if (!name || !email || !message) {
        mensagem.textContent = "Todos os campos são obrigatórios!";
        mensagem.style.color = "red";
        return;
    }

    const nameRegex = /^[A-Za-zÀ-ÿ]+$/;
    if (!nameRegex.test(name)) {
      mensagem.textContent = "O nome deve conter apenas letras!";
      mensagem.style.color = "red";
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        mensagem.textContent = "Informe um e-mail válido";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Mensagem enviada com sucesso!";
    mensagem.style.color = "green";

});