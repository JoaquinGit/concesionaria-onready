import Concesionaria from "./modelo/Concesionaria.js";

// Imprime separador
function imprimirSeparador() {
    console.log("=============================");
}

const concesionaria = new Concesionaria();

concesionaria.cargarVehiculos();
concesionaria.mostrarVehiculos();
imprimirSeparador();
concesionaria.vehiculoMasCaro();
concesionaria.vehiculoMasBarato();
concesionaria.vehiculoConY();
imprimirSeparador();
concesionaria.listarVehiculosDesc();
