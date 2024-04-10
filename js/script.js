"use strict"
//? ----------------------------------------------------------------------
//? ----------------------------------------------------------------------
//? ----------------------------------------------------------------------
//! ----------------------------------------------------------------------
//! ------------------------VARIABILI GLOBALI-----------------------------
//! ----------------------------------------------------------------------
let primoNumero; // primo nuemro inserito
let secondoNumero; // secondo numero inserito
let operarore; // operatore
//! ----------------------------------------------------------------------
//! ------------------------VARIABILI GLOBALI-----------------------------
//! ----------------------------------------------------------------------
//? ----------------------------------------------------------------------
//? ----------------------------MILESTONE 1-------------------------------
//? ----------------------------------------------------------------------
//* MILESTONE 1
// aggiungere event listener a tutti i numeri (0-9)
// quando si clicca su un numero, concatenarlo al numero visualizzato in alto
//? ----------------------------------------------------------------------
//? ----------------------------MILESTONE 1-------------------------------
//? ----------------------------------------------------------------------
// prendo tutti i bottoni
const btnNumElem = document.querySelectorAll(".num");
const resultElem = document.getElementById("display");

// itero sui bottoni
for (let i = 0; i < btnNumElem.length; i++) {

    // bottone singolo
    const curBtnNumElem = btnNumElem[i];

    // aggiungo l'evento di ascolto e imposto una funzione //! numClick
    curBtnNumElem.addEventListener("click", numClick);
}

// funzione //! numClick
function numClick() {

    // num è il testo valore del bottone
    const num = this.innerText; // this rappresenta questo bottone

    // prendo l'oggetto del monitor display
    
    // creo una condizione
    if (resultElem.innerText === "0") {

        // se nel display ce 0 : immetti il numero e togli lo 0
        resultElem.innerText = num 

    } else {

        // se lo 0 non ce concatena i numeri
        resultElem.innerText += num 
    }
}
//? ----------------------------------------------------------------------
//? ---------------------------DESCRIZIONE 1------------------------------
//? ----------------------------------------------------------------------
//* IN QUESTO CASO: 
// 1) prendo i bottoni dall'html
// 2) itero sui nuemri 
// 3) prendo i valori singoli //! con una costante sull'itezione
// 4) aggiungo l'elemento di ascolto ai singoli bottoni e //! assegno una funzione 

// ? IN QUESTO CASO NON POSSO PRENDERE I VALORI DEI BOTTONI GENERALMENTE PERCHE' PIU DI UNO QUINDI ITERO OGNI ELEMENTO, MI PRENDO IL VALORE SINGOLO E AGGIUNGO SINGOLARMENTE L'ELEMENTO DI ASCOLTO CON UNA FUNZIONE .

// 5) creo la funzione per ogni singolo bottone (numClick)
// 6) prendo il testo che è contenuto nell'html con (innerText)
// 7) //! molto importante l'uso di "THIS" che si va a prendere l'azioen che compio in questo istante
// 8) creo la costante per estrapolare l'oggetto dove verra inserito il testo nel mio caso (display)
// 9) creo la condizione per avere controllo sui nuemri inseriti:
//          if (il testo all'inetrno dell'html è identico (===) a "0" ("stringa"))
//                  in questo caso sostituisci lo "0" con il numero digitato
//          else 
//                  concatena i numeri successivamente digitati a quelli pre esistenti
//? ----------------------------------------------------------------------
//? ---------------------------DESCRIZIONE 1------------------------------
//? ----------------------------------------------------------------------

//? ----------------------------------------------------------------------
//? ----------------------------MILESTONE 2-------------------------------
//? ----------------------------------------------------------------------
//* MILESTONE 2
// aggiungere event listener a tutti gli operatori
// quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
//? ----------------------------------------------------------------------
//? ----------------------------MILESTONE 2-------------------------------
//? ----------------------------------------------------------------------
// prendo tutti i bottoni operatori
const operatori = document.querySelectorAll(".op");

// itero su ogni bottone 
for (let i = 0; i < operatori.length; i++) {

    // ottengo bottone singolo
    const opBtn = operatori[i];

    opBtn.addEventListener("click", operatoriClick)
}

// FUNZIONE CLICK DEGLI OPERATORI

function operatoriClick() {
    
    // console.log(this);       //! this sta per l'elemento cliccato
    // const operator = this.innerText;     // possibile utilizzo meno discreto
    // console.log(this.dataset.opeators);

    // prendo la variabile globale e asssegno il valore del data in html
    operarore = this.dataset.opeators; 

    // ottengo il primo numero inserito al click sull'operatore
    primoNumero = parseInt(resultElem.innerText);

    // faccio della console di display quando l'operatore viene cliccato
    resultElem.innerText = 0;
    
    // console.log(operarore, primoNumero);
}
//? ----------------------------------------------------------------------
//? ----------------------------------------------------------------------
//? ----------------------------------------------------------------------
// 1) prendo tutti i bottoni operatori
// 2) itero sui bottoni cosi ottengo bottno singolo
// 3) creo un evento di ascolto per i bottoni //! con funzione 
// 4) inserisco il "DATA-OPERATORS" all'interno dell'html per evitare interferenze con il valore
// 5) prendo il valore della del DATA-OPERATORS ( HTML ) con DATASET ( JS ) e lo inserisco nella variabile globale degli //? OPERATORI
// 6) aasegno al primo numero nella variabili globali il valore dei numeri digitati prima dell'operatore con parsInt e con innerText
// 7) eseguo il reset al click dgli operatori
//? ----------------------------------------------------------------------
//? ----------------------------------------------------------------------
//? ----------------------------------------------------------------------
//* MILESTONE 3
// aggiungere event listener al pulsante =
// quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
//? ----------------------------------------------------------------------
//? ----------------------------------------------------------------------
//? ----------------------------------------------------------------------