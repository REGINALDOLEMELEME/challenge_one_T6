function verificarSegredo() {
    // Obtém o valor digitado na textarea
    var textoDigitado = document.getElementById("textoInput").value;

    // Verifica se a palavra "segredo" está presente no texto após a última ocorrência
    if (textoDigitado.toLowerCase().indexOf("segredo", ultimaOcorrencia) !== -1) {
        // Atualiza a posição da última ocorrência
        ultimaOcorrencia = textoDigitado.toLowerCase().indexOf("segredo", ultimaOcorrencia) + 1;

        // Cria uma nova tag <p> com a mensagem
        var novaTagP = document.createElement("p");
        novaTagP.textContent = "A palavra secreta foi digitada novamente";

        // Adiciona a nova tag <p> ao resultadoDiv
        document.getElementById("resultadoDiv").appendChild(novaTagP);
    }
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