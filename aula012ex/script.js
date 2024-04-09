function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'img1.png'
        document.body.style.background = '#fcc663'

    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'img3.png'
        document.body.style.background = '#ec7607'
    }else{
        img.src = "img2.png"
        document.body.style.background = '#052069'
    }
}