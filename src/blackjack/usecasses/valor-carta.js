/**
 * Esta función devuelve el valor de la carta
 * @param {String} carta String de la carta seleccionada Ej: '2A'
 * @returns {number} retorna solo el valor de la carta Ej: 2
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
        (valor === 'A') ? 11 : 10:
        valor * 1;
}