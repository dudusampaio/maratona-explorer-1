const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Assim como eu voo por sorte, tenho certeza que sim!",
  "Não tenho a menor ideia.",
  "Não conte com isso.",
  "Espero que sim!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Não quero te desencorajar, mas creio que não.",
  "Você pode contar com isso.",
  "Ahahahahahahahahahah",
  "Segure-se firme! Voaremos rumo ao seu objetivo!",
  "Coce minha orelha direita, me ajuda que eu te falo.",
  "Provavelmente, sou Falkor e sei o que digo.",
  "Mais fácil alcançar as fronteiras de Fantasia.",
  "Voe nas nuvens comigo para repensar sobre isso.",
  "Vai em frente.",
  "Com sorte, sim!",
  "Não saia de mansinho por causa da minha resposta, tente novamente.",
  "A esperança aponta que sim.",
  "Melhor assistir ao filme 'A HISTÓRIA SEM FIM' para descobrir.",
  "A esperança está com você.",
  "Precisa de lembranças para aprender.",
  "Assim como Atreyu, persista!",
  "O Oráculo do Sul sabe mais do que eu.",
  "Nunca desista e a boa sorte encontrará você.",
  "Creio que sim! 15.891 quilômetros é tudo o que um dragão voa, eu sei tudo!",
  "A única forma de seguir uma missão é ter um Dragão da Sorte com você!",
  "Não é difícil pra você.",
  "O que vai desejar agora?",
 "Você está em uma missão, continue fazendo perguntas.",


]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Não deixe o 'NADA' vencer, digite a sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 10;

  // sumir a resposta depois de 30 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 4000)
}
