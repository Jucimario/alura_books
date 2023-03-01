const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', ()=>{ 

    let livrosFiltrados = btn.value == 'disponivel' ?
     livros.filter(livro => livro.quantidade > 0) : 
     livros.filter(livro => livro.categoria == btn.value);
  
    exibirLivros(livrosFiltrados);
}));

