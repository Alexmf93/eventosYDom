console.log ('Listado de asientos de avión')

let asientos = document.getElementById('asientos')

const letraAsiento = ['a', 'b', 'c', 'z', 'd', 'e', 'f']


for(let fila = 6; fila <= 30; fila++){

    for(const letra of letraAsiento){
        if(letra === 'z'){
            asientos.innerHTML+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        }else{
            const id = `${fila}${letra}`;
            asientos.innerHTML+= `<img src="asientoVerde.svg"  alt="asiento data-id='${id}'" data-estado='verde'  style="width:20px; height:30px; cursor: pointer;">`
        }
    }
    asientos.innerHTML+='</br>'
}
asientos.addEventListener('click', (e) => {
  const asiento = e.target;
  if (asiento.tagName !== 'IMG') return;

  // Estado actual del asiento (verde, rojo o amarillo)
  const estadoActual = asiento.dataset.estado;

  // Cambiamos al siguiente color (puedes ajustar el orden a tu gusto)
  if (estadoActual === 'verde') {
    asiento.src = 'asientoAmarillo.svg';
    asiento.dataset.estado = 'amarillo';
  } else if (estadoActual === 'amarillo') {
    asiento.src = 'asientoRojo.svg';
    asiento.dataset.estado = 'rojo';
  } else {
    asiento.src = 'asientoVerde.svg';
    asiento.dataset.estado = 'verde';
  }

  console.log(`Asiento ${asiento.dataset.id} cambiado a ${asiento.dataset.estado}`);
});