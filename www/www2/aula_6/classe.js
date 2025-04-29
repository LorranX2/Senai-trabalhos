class Car {
    marca;
    modelo;
    ano;

    ligar() {
     console.log("O carro está ligado.")    
    }
}

// criando objto (instância)

var car1 = new Car ()
car1.marca = "Chevrolet"
car1.modelo = "Astra"
car1.ano = "2011"

console.log(car1.marca, car1.modelo, car1.ano)

var car2 = new Car ()
car2.marca = "Ford"
car2.modelo = "maverick"
car2.ano = "1973"

console.log(car2.marca, car2.modelo, car2.ano)

var car3 = new Car ()
car3.marca = "Subaru"
car3.modelo = "Impreza 22B"
car3.ano = "1998"

console.log(car3.marca, car3.modelo, car3.ano)