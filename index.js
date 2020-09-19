const cores = ["#e58e26", "#b71540", "#0c2461", "#0a3d62", "#079992"];
const mensagens = [
  "Aprecie cada pedacinho seu, você é maravilhosa!",
  "Ao final do dia, podemos aguentar muito mais do que pensamos que podemos.",
  "Existem mulheres fortes e existem mulheres que ainda não descobriram a sua força.",
  "Encontre a si mesma, se ame, se respeite e se cuide.",
  "Não tenha medo de quebrar padrões, seja a sua própria revolução.",
];

const botao = document.getElementById("btn");
const paragrafo = document.getElementById("prg");

function gerarFrase() {
  let numero = Math.floor(Math.random() * mensagens.length);
  paragrafo.textContent = mensagens[numero];
  numero = Math.floor(Math.random() * mensagens.length);
  paragrafo.style.color = cores[numero];
}
botao.addEventListener("click", gerarFrase);
