function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //Bom dia!
    //Muda a cor de fundo
    document.body.style.background = '#e2cd9f'
    //Muda a imagem
    img.src = 'Img/manha.png'
} else if (hora >= 12 && hora <= 18){
    //Boa tarde!
    //Muda a imagem
    img.src = 'Img/tarde.png'
    //Muda a cor do fundo
    document.body.style.background = '#b9846f'
} else {
    //Boa noite!
    //Muda a imagem
    img.src = 'Img/noite.png'
    //Muda a cor de fundo
    document.body.style.background = '#515154'
}
}