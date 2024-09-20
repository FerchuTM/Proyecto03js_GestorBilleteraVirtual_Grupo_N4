class Tarjeta {
    constructor(dominio, nombre, uso) {
        this.dominio = dominio;
        this.nombre = nombre;
        this.uso = uso;
    }
}
let tarjetasAgregadas = [];

let tarjetasPorPersona = {};

function mostrar() {
    let datos = document.getElementById("nombre").value;
    let tar = document.getElementById("tarjeta").value;
    let numero = parseInt(document.getElementById("numero").value);

    let nuevaTarjeta = new Tarjeta(datos, tar, numero);
    tarjetasAgregadas.push(nuevaTarjeta);

    if (tarjetasPorPersona[datos]) {
        if (numero > tarjetasPorPersona[datos].uso) {
            tarjetasPorPersona[datos] = nuevaTarjeta;
        }
    } else {
        tarjetasPorPersona[datos] = nuevaTarjeta;
    }

    document.getElementById("nombre").value = '';
    document.getElementById("tarjeta").value = '';
    document.getElementById("numero").value = '';

    listaCompleta();
}

function listaCompleta() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    tarjetasAgregadas.forEach(tarjeta => {
        let crearLista = document.createElement("li");
        crearLista.textContent = "Persona: " + tarjeta.dominio +" "+ "Tarjeta : " + tarjeta.nombre +" Uso: " +tarjeta.uso;
        resultado.appendChild(crearLista);
    });
}

function mostrarTarjetasMasUsadas() {
    let resultadoMasUsadas = document.getElementById("resultadoMasUsadas");
    resultadoMasUsadas.innerHTML = ""; 
    for (let persona in tarjetasPorPersona) {
        let tarjeta = tarjetasPorPersona[persona];
        let crearLista = document.createElement("li");
        crearLista.textContent = "Persona: "+tarjeta.dominio +" "+ "Tarjeta más usada: "+ tarjeta.nombre +" Uso: "+tarjeta.uso;
        resultadoMasUsadas.appendChild(crearLista);
    }
}
