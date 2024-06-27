document.querySelector('#botao').addEventListener('click', () => tirarConselho())
const conselho = document.querySelector('#conselho');
const id = document.querySelector('#numero')

async function criarConselhos(){
    const url = 'https://api.adviceslip.com/advice';
    const retorno = await fetch(url);
    console.log(retorno);
    return retorno.json();
}

async function tirarConselho(){
    try{

        const gerarConselho = await criarConselhos();
        const conselhoTirado = gerarConselho.slip.advice;
        const idDoConselho = gerarConselho.slip.id;
        conselho.innerText = conselhoTirado;
        id.innerText = idDoConselho;


    }catch(err){
        console.log(err)
    }finally{
        console.log('programa encerrado');
    }

}

