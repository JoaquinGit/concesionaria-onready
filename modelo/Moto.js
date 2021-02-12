import Vehiculo from "./Vehiculo.js";

class Moto extends Vehiculo{

    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }

    toString() {

        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada}cc // Precio: $${Vehiculo.formatearPrecio(this.precio)}`
    }
}

export default Moto;