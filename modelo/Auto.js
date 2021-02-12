import Vehiculo from "./Vehiculo.js";

class Auto extends Vehiculo{

    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    toString() {

        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${Vehiculo.formatearPrecio(this.precio)}`
    }
}

export default Auto;