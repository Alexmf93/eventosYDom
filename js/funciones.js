console.log('Listado de asientos de avión');

let asientos = document.getElementById('asientos');
const letraAsiento = ['a', 'b', 'c', 'z', 'd', 'e', 'f'];

// Crear filas de asientos
for (let fila = 6; fila <= 30; fila++) {
    
    // --- NUEVO: Si la fila es la 13, la omitimos y pasamos a la siguiente ---
    if (fila === 13) {
        continue; // Salta toda la iteración actual y va a la fila 14
    }

    const filaDiv = document.createElement('div');
    filaDiv.className = 'fila-asientos';
    
    // Añadir número de fila
    const numeroFila = document.createElement('div');
    numeroFila.style.width = '20px';
    numeroFila.style.textAlign = 'center';
    numeroFila.style.marginRight = '5px';
    numeroFila.textContent = fila;
    filaDiv.appendChild(numeroFila);
    
    // Crear asientos
    for (const letra of letraAsiento) {
        if (letra === 'z') {
            // Pasillo
            const pasillo = document.createElement('div');
            pasillo.className = 'pasillo';
            filaDiv.appendChild(pasillo);
        } else {
            const id = `${fila}${letra}`;
            const asiento = document.createElement('img');
            asiento.src = 'img/asientoVerde.svg';
            asiento.alt = `asiento ${id}`;
            asiento.className = 'asiento';
            asiento.dataset.id = id;
            asiento.dataset.estado = 'verde';
            filaDiv.appendChild(asiento);
        }
    }
    
    asientos.appendChild(filaDiv);

    // --- NUEVO: Después de la fila 12, añadimos un separador visual ---
    if (fila === 12) {
        const separador = document.createElement('div');
        separador.className = 'separador-servicios';
        separador.textContent = 'Servicios / Cocina'; // Texto opcional para el separador
        asientos.appendChild(separador);
    }
}

// Manejar clics en los asientos
asientos.addEventListener('click', (e) => {
    const asiento = e.target;
    if (!asiento.classList.contains('asiento')) return;

    const estadoActual = asiento.dataset.estado;

    if (estadoActual === 'verde') {
        asiento.src = 'img/asientoAmarillo.svg';
        asiento.dataset.estado = 'amarillo';
    } else if (estadoActual === 'amarillo') {
        asiento.src = 'img/asientoRojo.svg';
        asiento.dataset.estado = 'rojo';
    } else {
        asiento.src = 'img/asientoVerde.svg';
        asiento.dataset.estado = 'verde';
    }

    console.log(`Asiento ${asiento.dataset.id} cambiado a ${asiento.dataset.estado}`);
});