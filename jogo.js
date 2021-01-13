function iniciaJogo() {
    var url = window.location.search; /* Recupera o que está a partir do "?" Ex:?3 */
    var nivel_jogo = url.replace("?", ""); /* Substituindo o ? por nada */

    /* 1 Fácil = 120 segundos
       2 Normal = 60 segundos
       3 Difícil = 30 segundos */

    var tempo_segundos = 0;

    if (nivel_jogo == 1) {
        tempo_segundos = 120;
    }
    if (nivel_jogo == 2) {
        tempo_segundos = 60;
    }

    if (nivel_jogo == 3) {
        tempo_segundos = 30;
    }

    /* Inserindo os segundos no span */
    document.getElementById('cronometro').innerHTML = tempo_segundos; /*  <!-- Inserindo o cronometro dentro da imagem --> */

    /* Quantidade de balões */
	var qtde_baloes = 20;
	
	cria_baloes(qtde_baloes);


/* Imprimir quantidade de balões inteiros*/
document.getElementById('baloes_inteiros').innerHTML = qtde_baloes; /* Adiciona a quantidade de balões de acordo com o delcarado em qtde_balões */
document.getElementById('baloes_estourados').innerHTML = 0;
}

/* Criando balões */
function cria_baloes(qtde_baloes) {

    for (var i = 1; i <= qtde_baloes; i++) {

        var balao = document.createElement("img"); /* Criando elementos 'igm' */
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';

        document.getElementById('cenario').appendChild(balao); /* appendChild coloca as tags igm dentro do elemento div */
    }
}