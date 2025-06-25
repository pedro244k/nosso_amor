
function atualizarContador() {
  const dataInicial = new Date("2024-12-28");
  const agora = new Date();

  let anos = agora.getFullYear() - dataInicial.getFullYear();
  let meses = agora.getMonth() - dataInicial.getMonth();
  let dias = agora.getDate() - dataInicial.getDate();

  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  document.getElementById("time-counter").innerText =
    `${anos} ano(s), ${meses} mês(es), ${dias} dia(s)`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
