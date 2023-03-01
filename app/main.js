let livros = [];
const endPointDaApi ='https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBusacarLivros(endPointDaApi);

async function getBusacarLivros(endPointDaApi) {

    const response = await fetch(endPointDaApi);
    livros = await response.json();
    
    //console.log(livros);
    let livrosComDesconto = aplicarDesconto(livros);

    //console.log(livrosComDesconto);

    exibirLivros(livrosComDesconto);
}