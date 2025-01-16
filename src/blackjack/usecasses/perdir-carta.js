/**
* Esta funcion me permite tomar una carta
* @param {Array<String>} deck Ejemplo: [2A, 3J, 5H, 4...]
 * @returns {String} Retorna una carta Ej: 6D
* */

export const pedirCarta = (deck) => {

    if(!deck) throw new Error(`no hay deck`);
    if ( deck.length === 0 ) throw new Error('No hay cartas en el deck');

    return deck.pop();
}