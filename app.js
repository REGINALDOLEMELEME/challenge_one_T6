
function validarEntradaDoTexto(textarea) {

  let entrada = textarea.value;
  // Não permite a inserção de caracteres especiais e letras maísculas
  entrada = entrada.replace(/[^\w\s]|_/gi, '');
  entrada = entrada.toLowerCase();

  textarea.value = entrada;
}

function criptografarTexto() {


  const secao = document.querySelector('.conteudo__texto_conversor');
  const textarea = document.getElementById('texto-para-converter');

  let texto = textarea.value;

  if (texto !== '') {
    // Substitui as letras de acordo com a regra
    texto = texto.replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');

    exibirMensagem(texto);


  } else {

    ocultarMensagem();
  }



}

function descriptografarTexto() {
  const secao = document.querySelector('.conteudo__texto_conversor');
  const textarea = document.getElementById('texto-para-converter');

  let texto = textarea.value;


  if (texto !== '') {

    texto = texto.replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');

    exibirMensagem(texto);


  } else {

    ocultarMensagem();
  }


}

function exibirMensagem(texto) {

  const textoAtual = document.getElementById('conteudo__texto__conversor__texto');
  const mensagemPrincipal = document.getElementById('conteudo__texto_conversor__mensagem');
  const imagem = document.querySelector('.conteudo__texto__conversor__imagem');
  const mensagemConvertida = document.getElementById("conteudo__texto__conversor__mensagem__traduzida");
  const botaoCopiar = document.getElementById("conteudo__texto__conversor__botao__copiar");

  textoAtual.style.display = 'none';
  mensagemPrincipal.style.display = 'none';
  imagem.style.display = 'none';

  mensagemConvertida.textContent = texto;
  mensagemConvertida.style.display = "block";
  botaoCopiar.style.display = "block";
  botaoCopiar.textContent = "Copiar";
  botaoCopiar.style.backgroundColor = "white";
  botaoCopiar.style.color = "#0A3871";

}

function ocultarMensagem() {

  const textoAtual = document.getElementById('conteudo__texto__conversor__texto');
  const mensagemPrincipal = document.getElementById('conteudo__texto_conversor__mensagem');
  const imagem = document.querySelector('.conteudo__texto__conversor__imagem');
  const mensagemConvertida = document.getElementById("conteudo__texto__conversor__mensagem__traduzida");
  const botaoCopiar = document.getElementById("conteudo__texto__conversor__botao__copiar");

  textoAtual.style.display = 'block';
  mensagemPrincipal.display = 'block';
  imagem.style.display = 'block';

  mensagemConvertida.style.display = "none";
  botaoCopiar.style.display = "none";

}



function copiarConteudo() {

  const mensagemNova = document.getElementById('conteudo__texto__conversor__mensagem__traduzida');
  const botaoCopiar = document.getElementById("conteudo__texto__conversor__botao__copiar")
  var bodyColor = window.getComputedStyle(document.body).backgroundColor;

  const texto = mensagemNova.textContent;

  navigator.clipboard.writeText(texto)
    .then(() => {

      botaoCopiar.textContent = "Copiado";
      bodyColor = bodyColor.replace(/\s/g, '').toLowerCase();
      if (bodyColor === "rgb(229,229,229)") {
      botaoCopiar.style.backgroundColor = "#0A3871";
      }else{
        botaoCopiar.style.backgroundColor = "#008127";
      }
      botaoCopiar.style.color = "#E5E5E5";
    })
    .catch((err) => {
      console.error('Erro ao copiar para a área de transferência:', err);
    });
}

const textarea = document.getElementById('texto-para-converter');

document.addEventListener('DOMContentLoaded', function () {
  textarea.focus();
  textarea.setSelectionRange(0, 0);
});

function mudarLayout() {

  var root = document.documentElement;
  var bodyColor = window.getComputedStyle(document.body).backgroundColor;
  var textoConverter = document.getElementById('texto-para-converter');
  var imagemLogo = document.querySelector('.conteudo__area__logo');
  var imagemExclamacao = document.querySelector('.conteudo__area__mensagem__exclamacao');
  var imagemPrincipal = document.querySelector('.conteudo__texto__conversor__imagem');
  var conteudoTexto = document.querySelector('.conteudo__area_texto');
  var conteudoMensagem = document.getElementById('conteudo__texto_conversor__mensagem'); 
  var conversorTexto = document.getElementById('conteudo__texto__conversor__texto'); 
  var mensagemTraduzida = document.getElementById('conteudo__texto__conversor__mensagem__traduzida');

  bodyColor = bodyColor.replace(/\s/g, '').toLowerCase();

  if (bodyColor === "rgb(229,229,229)") {
      root.style.setProperty('--primary-bg-color', 'black');
      root.style.setProperty('--secondary-bg-color', 'black');
      root.style.setProperty('--tertiary-bg-color', '#008127');
      imagemLogo.setAttribute('src', './assets/my-logo - green.png');
      imagemExclamacao.setAttribute('src', './assets/exclamacao_green.png');
      imagemPrincipal.setAttribute('src', './assets/matrix.gif'); 
      imagemPrincipal.setAttribute('alt', 'imagem com a palavra MATRIX escrita');   
      textoConverter.style.color = "#00E800"; 
      conteudoTexto.style.color = "#E5E5E5";
      conteudoMensagem.style.color = "#00E800"; 
      conversorTexto.style.color = "#00E800"; 
      mensagemTraduzida.style.color = "#00E800"; 

  } else {
      root.style.setProperty('--primary-bg-color', '#E5E5E5');
      root.style.setProperty('--secondary-bg-color', '#E5E5E5');
      root.style.setProperty('--tertiary-bg-color', '#0A3871');
      imagemLogo.setAttribute('src', './assets/my-logo.png');
      imagemExclamacao.setAttribute('src', './assets/exclamacao.png');
      imagemPrincipal.setAttribute('src', './assets/High_quality_products.svg');
      textoConverter.style.color = "#0A3871";
      conteudoTexto.style.color = "#0A3871";
      conteudoMensagem.style.color = "black"; 
      conversorTexto.style.color = "#0A3871"; 
      mensagemTraduzida.style.color = "#0A3871";
      

  }
}