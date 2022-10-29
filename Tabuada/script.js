function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    //Verifica a caixa em branco
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        //Converte o valor de texo para número
        let n = Number(num.value)
        let c = 1
        //Limpa a caixa
        tab.innerHTML = ''
        while (c <= 10) {
            //Adiciona o option
            let item = document.createElement('option')
            //Adiciona o texto ao option
            item.text = `${n} x ${c} = ${n * c}`
            //Acrescenta
            tab.appendChild(item)
            c++
        }
    }

}