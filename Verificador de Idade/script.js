function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano || fano.value < 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        //Para adicionar a imagem de forma automatizada
        var img = document.createElement('img')
        //Set a imagem, faz aparecer
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //Criança
                //Coloca a imagem conforme verificação
                img.setAttribute('src', 'img/menino.png')
            } else if (idade < 18){
                //Jovem
                //Coloca a imagem conforme verificação
                img.setAttribute('src','img/jovemh.png')
            } else if (idade < 50){
                //Adulto
                //Coloca a imagem conforme verificação
                img.setAttribute('src','img/homem.png')
            } else {
                //Idoso
                //Coloca a imagem conforme verificação
                img.setAttribute('src','img/idoso.png')
            }
        } else if (fsex[1]) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //Criança
                //Coloca a imagem conforme verificação
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 18){
                //Jovem
                //Coloca a imagem conforme verificação
                img.setAttribute('src','img/jovemm.png')
            } else if (idade < 50){
                //Adulto
                //Coloca a imagem conforme verificação
                img.setAttribute('src','img/mulher.png')
            } else {
                //Idoso
                //Coloca a imagem conforme verificação
                img.setAttribute('src','img/idosa.png')
            }
        }
        //Centraliza a resposta
        res.style.textAlign = 'Center'
        //Dá o resultado depois da verificação
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        //Faz a imagem aparecer conforme toda a verificação
        res.appendChild(img)  
    }  
} 


