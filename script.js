var altura = 0
var largura = 0 
var vidas = 1
var tempo = 10
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
}else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if (nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}

function ajustaTela(){
    altura = window.innerHeight
    largura = window.innerWidth    
}

ajustaTela()

var cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0 ){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href ='vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo    
    }
},1000)

function posicaoAleatoria(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href= 'game_over.html'
        }else{
            document.getElementById('v' + vidas).src = "assets/coracao_vazio.png"
            vidas ++
        } 
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90 
    var posicaoY = Math.floor(Math.random() * altura) - 90 

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY    

    var mosquito = document.createElement('img')
    mosquito.src = 'assets/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.id = 'mosquito'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
    
    mosquito.onclick = function(){
        this.remove()
    }
}

function tamanhoAleatorio(){
    var tamanho = Math.floor(Math.random() *3)
    switch (tamanho){
        case 0:
            return 'mosquitoPequeno'
        case 1:
            return 'mosquitoMedio'
        case 2:
            return 'mosquitoGrande'
    }
}

function ladoAleatorio(){
    var lado = Math.floor(Math.random() * 2)
    switch(lado){
        case 0:
            return 'esquerda'
        case 1:
            return 'direita'
        }
}