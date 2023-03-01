let btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco');

btnOrdenarPorPreco.addEventListener('click', () => {
    let livrosOrdenadosPorPreco = livros.sort((livro1, livro2) => {
        return livro1.preco - livro2.preco;
    });

    exibirLivros(livrosOrdenadosPorPreco);

});