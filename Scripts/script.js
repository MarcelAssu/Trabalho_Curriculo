document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".formulario-contato form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const mensagem = form.querySelector("textarea").value.trim();

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      console.log("Mensagem enviada:");
      console.log("Nome:", nome);
      console.log("Email:", email);
      console.log("Mensagem:", mensagem);

      alert("Mensagem enviada com sucesso! 😊");

      form.reset(); // Limpa os campos
    });
  });
