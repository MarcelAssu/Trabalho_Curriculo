// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;
  
      if (nome && email && mensagem) {
        alert(`Obrigado pelo contato, ${nome}! Em breve retornarei sua mensagem.`);
        form.reset();
      } else {
        alert("Por favor, preencha todos os campos do formulário.");
      }
    });
  });
  