const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', ()=>{ 

    let livrosFiltrados = btn.value == 'disponivel' ?
     filtarPorDisponibilidade() : 
     filtrarPorCategoria(btn);
  
    exibirLivros(livrosFiltrados);

    if (btn.value == 'disponivel'){
        elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${livrosFiltrados.reduce((total, livro) => total + livro.preco, 0).toFixed(2)}</span></p>
      </div>
      `;
    }
}));

function filtrarPorCategoria(btn) {
    return livros.filter(livro => livro.categoria == btn.value);
}

function filtarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

