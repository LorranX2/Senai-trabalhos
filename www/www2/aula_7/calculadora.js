class calculadora {

valor1;
valor2;
    

somar(valor1, valor2) {
  this.valor1 = valor1
  this.valor2 = valor2
  var resultado = this.valor1 + this.valor2;
  console.log("Resultado da soma: " + resultado)
  }
   
multiplicar(valor3, valor4) {
    this.valor3 = valor3
    this.valor4 = valor4
    var resultado = this.valor3 * this.valor4;
    console.log("Resultado da multiplicação: " + resultado)
    }

dividir (valor5, valor6) {
        this.valor5 = valor5
        this.valor6 = valor6
        var resultado = this.valor5 / this.valor6;
        console.log("Resultado da divisão: " + resultado)
        }

subtrair (valor7, valor8) {
       this.valor7 = valor7
       this.valor8 = valor8
       var resultado = this.valor7 - this.valor8;
  console.log("Resultado da subtração: " + resultado)
  }
}

// Criando o objeto

var calc1 = new calculadora()
var calc2 = new calculadora()
var calc3 = new calculadora()
var calc4 = new calculadora()

// Chamando o método de soma 

calc1.somar(10, 10); // Resultado da soma: 20
calc2.multiplicar(8, 2); // Resultado da multiplicação: 16
calc3.dividir(10, 2); // Resultado da divisão: 5
calc3.subtrair (20, 2); // Resultado da subtração: 18
