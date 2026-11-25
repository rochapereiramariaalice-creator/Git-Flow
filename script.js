const form = document.getElementById("cadastroForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = Number(document.getElementById("idade").value);
  const perfil = document.getElementById("perfil").value;

  if (nome.length < 2) {
    mensagem.textContent = "Por favor, preencha um nome válido.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    mensagem.textContent = "Por favor, introduza um e-mail válido.";
    return;
  }

  if (!idade || idade < 1) {
    mensagem.textContent = "Informe uma idade válida.";
    return;
  }

  if (!perfil) {
    mensagem.textContent = "Selecione um perfil.";
    return;
  }

  mensagem.textContent = `Cadastro validado para ${nome} (${perfil}).`;
  form.reset();
});
