function contar(){
//Recebe dados dos imputs como texto
var ini = window.document.getElementById('ini')
var fim = window.document.getElementById('fim')
var passo = window.document.getElementById('passo')
var res = window.document.getElementById('res')

//Faz a verificação
if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        //Mensagem de erro
        alert('[ERRO] Faltam dados!')
    } else {
        //Muda a resposta
        res.innerHTML = 'Contando: '
        //Converte em texto para número
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= o) {
            //Faz a verificação do passo
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for (c = i; c <= f; c += p){
                 //Saída com emotion
                res.innerHTML += `<br>${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (c = i; c >= f; c -= p){
                //Saída com emotion
                res.innerHTML += `<br>${c} \u{1F449}`
            }
        }
        //Emotion de finalização
        res.innerHTML += '<br>\u{1F3c1}'
   
    }


}