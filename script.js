const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isjumpn = false;
let posicao = 0;
let pontuacao = 0;



function handleKeyup(event){
    if(event.keyCode === 32){
        if(isjumpn) {
        } else{
        junp();
        console.log("pressionou espaco"); 
        }
    }
}

function junp(){
    isjumpn = true;

    let upinterval = setInterval(() => {
        if(posicao >= 150){
            clearInterval(upinterval);

            let downinterval = setInterval(() => {
                if(posicao <= 0){
                    clearInterval(downinterval);
                    isjumpn = false;
                } else{
                posicao -= 20;
                dino.style.bottom = posicao + 'px'
                }
            }, 20);
        }


        posicao += 20;
        dino.style.bottom = posicao + 'px'
    }, 20);
}

function createcactus(){
   const cactus = document.createElement('div');
   let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

   cactus.classList.add('cactus');
   cactus.style.left = 1000 + 'px';
   background.appendChild(cactus);

   let leftinterval = setInterval(() => {
    cactusPosition -= 10;
    cactus.style.left = cactusPosition + 'px';

    if(cactusPosition < -60){
        clearInterval(leftinterval);
        background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && posicao < 60){
        clearInterval(leftinterval);
        
        document.body.innerHTML = "<h1 class='game-over'> Fim de Jogo </h1>"
    } else{ 
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
    }
   }, 20);

   setTimeout(createcactus, randomTime);
}
createcactus();
document.addEventListener('keyup', handleKeyup)