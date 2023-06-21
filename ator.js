//Código ator

let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos= 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    } 
    
  }
  if(keyIsDown(UP_ARROW)){
     yAtor -= 3;
  }
  
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
    for(let i=0; i<imagemCarros.length; i=i+1){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        if(colisao){
          somDaColisao.play();
          voltaAtorPosicaoInicial();
          if(pontosMaiorQueZero()){
             
              meusPontos -= 1;
          }
        }
    }  
}


function incluiPontos(){
  textAlign(CENTER);
  textSize(27);
  fill(color(205, 24, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function pontosMaiorQueZero(){
  return meusPontos>0;
  
}

function podeSeMover(){
  return yAtor<367;
  
}