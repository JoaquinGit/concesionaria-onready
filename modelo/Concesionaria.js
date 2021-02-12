import Moto from "./Moto.js";
import Auto from "./Auto.js";
import Vehiculo from "./Vehiculo.js";

class Concesionaria {

    constructor(listaVehiculos = []) {
        this.listaVehiculos = listaVehiculos;
    }

    // Carga vehiculos
    cargarVehiculos() {

        const vehiculo1 = new Auto("Peugeot", "206", 200000, 4);
        const vehiculo2 = new Moto("Honda", "Titan", 60000, 125);
        const vehiculo3 = new Auto("Peugeot", "208", 250000, 5);
        const vehiculo4 = new Moto("Yamaha", "YBR", 80500.50, 160);
    
        this.listaVehiculos.push(vehiculo1, vehiculo2, vehiculo3, vehiculo4);
    }
    
    //Muestra lista de Vehículos
    mostrarVehiculos() {

        for (let i in this.listaVehiculos) {
    
           console.log(this.listaVehiculos[i].toString());
        }   
    }
    
    vehiculoMasCaro() {
    
        let masCaro = -1;
        let indice = 0;

        for (let i in this.listaVehiculos) {
            if (this.listaVehiculos[i].precio > masCaro) {
                masCaro = this.listaVehiculos[i].precio;
                indice = i;
            }
        }
        
        console.log("Vehiculo más caro: " + this.listaVehiculos[indice].marca + " " + this.listaVehiculos[indice].modelo);
    }
    
    vehiculoMasBarato() {

        let masBarato = 999999999999;
        let indice = 0;

        for (let i in this.listaVehiculos) {
            if (this.listaVehiculos[i].precio < masBarato) {
                masBarato = this.listaVehiculos[i].precio;
                indice = i;
            }
        }
        
        console.log("Vehiculo más barato: " + this.listaVehiculos[indice].marca + " " + this.listaVehiculos[indice].modelo);
    }
    
    // Devuelve marca, modelo y precio del primer vehiculo que contiene "Y" en el nombre del modelo
    vehiculoConY() {

        let indice = 0;

        for (let i in this.listaVehiculos) {
            if (this.listaVehiculos[i].modelo.includes("Y")) {
                indice = i;
                break;
            }
        }

        console.log("Vehiculo que contiene en el modelo la letra `Y´: " + this.listaVehiculos[indice].marca + " " + this.listaVehiculos[indice].modelo + " $" + Vehiculo.formatearPrecio(this.listaVehiculos[indice].precio));
    }
    
    // Muestra marca y modelo de Mayor a Menor
    listarVehiculosDesc() {
        
        const fc = function(a, b) {
            return a.precio < b.precio;
        };

        const listaOrdenada = this.listaVehiculos.sort(fc);

        console.log("Vehículos ordenados por precio de mayor a menor:")
        for (let i in listaOrdenada) {
            console.log(listaOrdenada[i].marca + " " + listaOrdenada[i].modelo);
        } 
    } 
}

export default Concesionaria;