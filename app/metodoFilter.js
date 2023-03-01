const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', ()=>{
   

    let livrosFiltrados = livros.filter(livro => livro.categoria == btn.value);
  
    exibirLivros(livrosFiltrados);
}));

