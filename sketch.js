

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarros();
  movimentaAtor();
  movimentaCarros();
  voltaPosicaoIncialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}




