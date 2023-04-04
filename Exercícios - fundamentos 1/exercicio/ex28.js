// Crie um construtor de função chamado Livro que tenha propriedades para título, autor e número de páginas. Em seguida, crie um método no protótipo do objeto Livro que retorne a quantidade de páginas por capítulo (suponha que cada capítulo tenha 10 páginas). Por fim, crie uma instância do objeto Livro com título "A Guerra dos Tronos", autor "George R. R. Martin" e número de páginas 694 e chame o método paginasPorCapitulo().
function livro(autor,pags, nomeLivro){
    this.livro = autor  
    this.nomeLivro = nomeLivro
    this.pags = pags
    this.totalcap = (pags/10)
}

const got = new livro("George R. R. Martin", 694, "A Guerra dos Tronos")
console.log(got)