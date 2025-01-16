import {pedirCarta, valorCarta, crearCartaHTML} from "./index.js";


/**
 *
 * @param {number} puntosMinimos Recibe los puntos que sacó el jugador
 * @param {HTMLElement} puntosHTML Elememto HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas de la computadora
 * @param {Array<String>} deck
 */
 export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora,  deck =[] ) => {

    if (!puntosMinimos) throw new Error('Puntos Minimos son necesario');
    if (!puntosHTML) throw new Error('Puntos HTML son necesario');
    if (!deck || deck.length === 0) throw new Error('Deck necesario');


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}