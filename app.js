
function validarEntradaDoTexto(textarea) {
 
    let entrada = textarea.value;

    entrada = entrada.replace(/[^\w\s]|_/gi, '');  
    entrada = entrada.toLowerCase(); 

     textarea.value = entrada;
  }

  function criptografarTexto() {
    // Obtém a referência da seção
    const secao = document.querySelector('.conteudo__texto_conversor');
  
    // Obtém a referência do textarea
    const textarea = document.getElementById('texto-para-converter');
  
    // Obtém a referência da tag p atual
    const textoAtual = document.getElementById('conteudo__texto__conversor__texto');
    const mensagemPrincipal = document.getElementById('conteudo__texto_conversor__mensagem');
    const imagem = document.querySelector('.conteudo__texto__conversor__imagem');

    // Remove os elementos existentes
    if (textoAtual !== null) {
        secao.removeChild(textoAtual);
      }

    if (mensagemPrincipal !== null) {
        secao.removeChild(mensagemPrincipal);
    }

    if (imagem !== null) {
        secao.removeChild(imagem);
    }
  
    // Obtém o texto do textarea
    let texto = textarea.value;
  
    // Substitui as letras de acordo com a regra
    texto = texto.replace(/e/g, 'enter')
                 .replace(/i/g, 'imes')
                 .replace(/a/g, 'ai')
                 .replace(/o/g, 'ober')
                 .replace(/u/g, 'ufat');
  
    mensagemConvertida = document.getElementById("conteudo__texto__conversor__mensagem__traduzida");
    mensagemConvertida.textContent = texto;
    mensagemConvertida.style.display = "block";
    botaoCopiar = document.getElementById("conteudo__texto__conversor__botao__copiar");
    botaoCopiar.style.display = "block";
    botaoCopiar.textContent = "Copiar";
    botaoCopiar.style.backgroundColor = "white";
    botaoCopiar.style.color = "#0A3871";
  }

  function descriptografarTexto() {
       // Obtém a referência da seção
       const secao = document.querySelector('.conteudo__texto_conversor');
  
       // Obtém a referência do textarea
       const textarea = document.getElementById('texto-para-converter');
     
       // Obtém a referência da tag p atual
       const textoAtual = document.getElementById('conteudo__texto__conversor__texto');
       const mensagemPrincipal = document.getElementById('conteudo__texto_conversor__mensagem');
       const imagem = document.querySelector('.conteudo__texto__conversor__imagem');
   
       // Remove os elementos existentes
       if (textoAtual !== null) {
           secao.removeChild(textoAtual);
         }
   
       if (mensagemPrincipal !== null) {
           secao.removeChild(mensagemPrincipal);
       }
   
       if (imagem !== null) {
           secao.removeChild(imagem);
       }
     
       // Obtém o texto do textarea
       let texto = textarea.value;
     
        // Substitui as letras de acordo com a regra
        texto = texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
     
       mensagemConvertida = document.getElementById("conteudo__texto__conversor__mensagem__traduzida");
       mensagemConvertida.textContent = texto;
       mensagemConvertida.style.display = "block";
       botaoCopiar = document.getElementById("conteudo__texto__conversor__botao__copiar");
       botaoCopiar.style.display = "block";
       botaoCopiar.textContent = "Copiar"; 
       botaoCopiar.style.backgroundColor = "white";
       botaoCopiar.style.color = "#0A3871";
  }

  function copiarConteudo() {
    // Obtém a referência do parágrafo com a mensagem nova
    const mensagemNova = document.getElementById('conteudo__texto__conversor__mensagem__traduzida');
    const botaoCopiar = document.getElementById("conteudo__texto__conversor__botao__copiar")
  
    // Obtém o texto do parágrafo
    const texto = mensagemNova.textContent;
  
    // Utiliza a API navigator.clipboard para copiar o texto para a área de transferência
    navigator.clipboard.writeText(texto)
      .then(() => {
        // Exibe uma mensagem ou executa qualquer outra ação que você desejar
        botaoCopiar.textContent = "Copiado";
        botaoCopiar.style.backgroundColor = "#0A3871";
        botaoCopiar.style.color = "#E5E5E5";
      })
      .catch((err) => {
        console.error('Erro ao copiar para a área de transferência:', err);
      });
  }

   // Obtém a referência do textarea
    const textarea = document.getElementById('texto-para-converter');

    // Adiciona um ouvinte de evento quando o conteúdo da página é totalmente carregado
    document.addEventListener('DOMContentLoaded', function() {
        // Define o foco no textarea
        textarea.focus();
        // Define a seleção do cursor para o início do texto
        textarea.setSelectionRange(0, 0);
    });