/**
 * 
 * @param {number} primo 
 * @param {string} operzione // somma / sottrazione / moltiplicazione / divisione
 * @param {number} secondo 
 * 
 * @returns {number}
 */
function calculate(primo, operzione, secondo) {
    let result;
    switch (operzione) {
        case "somma":
            result = primo + secondo;
            break;
        case "sottrazione":
            result = primo - secondo;
            break;
        case "moltiplicazione":
            result = primo * secondo;
            break;
        case "divisione":
            result = primo / secondo;
            break;
    }
    return result;
}

// test
// console.log(calculate(10, "divisione", 5));
//? ----------------------------------------------------------------------
//? ---------------------------DESCRIZIONE 3------------------------------
//? ----------------------------------------------------------------------
// 1) creo una funzione pura 
// 2) imposto una variabile result
    // 3) creo uno SWITCH
        // IMPOSTO I VALORI: //! SOMMA SOTTRAZIONE DIVISIONE MOLTIPLICAZIONE
// 4) RITORNO DELLA FUNZIONE //! LA VARIABILE CREATA
//? ----------------------------------------------------------------------
//? ---------------------------DESCRIZIONE 3------------------------------
//? ----------------------------------------------------------------------