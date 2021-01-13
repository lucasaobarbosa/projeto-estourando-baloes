function iniciaJogo(){
var url = window.location.search; /* Recupera o que está a partir do "?" Ex:?3 */
var nivel_jogo = url.replace("?", ""); /* Substituindo o ? por nada */

/* 1 Fácil = 120 segundos
   2 Normal = 60 segundos
   3 Difícil = 30 segundos */
var tempo_segundos = 0;
if(nivel_jogo ==1){
    tempo_segundos == 120;
}
if(nivel_jogo ==2){
    tempo_segundos == 60;
}
if(nivel_jogo ==3){
    nivel_jogo == 30;
}

}