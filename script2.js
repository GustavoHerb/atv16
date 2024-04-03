function imprimirInformacoesDoLivro(livro) {
    const titulo = livro.titulo;
    const autor = livro.autor;
    const paginas = livro.paginas;

    console.log(`O livro ${titulo}, escrito por ${autor}, tem ${paginas} páginas.`);
}

// Exemplo de objeto JSON contendo informações de um livro
const livro = {
    "titulo": "A Metamorfose",
    "autor": "Franz Kafka",
    "paginas": 100
};

// Chamando a função para imprimir as informações do livro
imprimirInformacoesDoLivro(livro);