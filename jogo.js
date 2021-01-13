function iniciaJogo(){
var url = window.location.search; /* Recupera o que está a partir do "?" Ex:?3 */
var nivel_jogo = url.replace("?", ""); /* Substituindo o ? por nada */
alert(nivel_jogo);

}