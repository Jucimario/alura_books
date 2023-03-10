const elementoParaInserirLivros = document.getElementById('livros');

const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirLivros(livros) {
  elementoParaInserirLivros.innerHTML = '';
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
  livros.forEach(livro => {
    elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${livro.quantidade <= 0 ? "livro__imagens indisponivel": "livro__imagens"}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `;
  });
}