class Aluno{
nome;
idade;
curso;

falar(nome,idade,curso){

    this.nome = nome
    this.idade = idade
    this.curso = curso

    console.log ("Olá, eu sou " + this.nome)
    console.log ("Tenho " + this.idade + " anos.")
    console.log ("Estou cursando: " + this.curso)
  }

}

var aluno1 = new Aluno()
var aluno2 = new Aluno()
var aluno3 = new Aluno()

aluno1.falar("Julio Ferreira", 22, "Designer Grafico")
aluno2.falar("Lucas Almeida", 25, "TI")
aluno3.falar("Felipe Neto", 23, "Marketing")


