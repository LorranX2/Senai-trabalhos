class livros {
titulo;
autor;

meuLivro (titulo,autor){
this.titulo = titulo
this.autor = autor

console.log ("O Titulo do livro é: " + this.titulo)
console.log ("O autor do livro é: " + this.autor)

    }

}


var Livro1 = new livros ()
Livro1.meuLivro ("Turma da Monica", "Mauricio de Solza")

var Livro2 = new livros ()
Livro2.meuLivro ("A Arte da Guerra", "Sun Tzu")

var Livro3 = new livros ()
Livro3.meuLivro ("O Pequeno Principe", "Antoine de Saint-Exupéry")