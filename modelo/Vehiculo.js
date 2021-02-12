class Vehiculo {

    constructor(marca, modelo, precio) {

        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    static formatearPrecio(pre) {
        return new Intl.NumberFormat("es-ES", {minimumFractionDigits: 2}).format(pre); 
    }
}

export default Vehiculo;