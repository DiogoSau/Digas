let img = document.getElementById('lampada')
function ligar (){
    if (img.src.match("img/lampada.png")){
        img.src = "img/lampada3.png"
    }else if (img.src.match("img/lampada3.png")){
        img.src = "img/lampada.png"
    }else if (img.src.match("img/lamp_quebrada.png")){
        
    }}
    function lamp_quebrada(){ //Quebra a lampada quando passa com mouse por cima
        lamp.src = "img/lamp_quebrada.png"
    }
