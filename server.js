const express = require("express");
const app = express();
const porta = 3000;



//oggetto javascript


const STEELSERIES_Diablo = {
    EAN : "EAN0813810014507",
    Puntamento : "Ottico",
    Connessione : "Usb",
    Serie : "Diablo",
    Risoluzione : "100 - 5.700 CPI/DPI"
}


console.log(STEELSERIES_Diablo.Serie);





const votiStudenti = {
    Amantea: 7,
    Biscocho: 6,
    DeSantis: 10,
    Eltanahy: 4.9,
    Fedorenko: 6,
    Natalino: 4,
    Finini: 6,
    Zingariello: 4.000009
}

console.log(votiStudenti.Finini);










const RTX4090 = {
    core: 16384,
    BoostClock: 2.7,
    memoria: 24,
    tipoMemoria: "GDDR6X"
}


//configurazione di un rotta
app.get("/",(richiesta,risposta)=>{
    risposta.send("Ciao bellu...., sei su http://localhost:" + porta);
})

//configurazione di rotta /utenti
app.get("/utenti",(richiesta,risposta)=>{
    risposta.send("Ciao bellu...., sei su http://localhost:/" + porta + "/utenti");
})

app.get("/studenti",(richiesta,risposta)=>{
    risposta.send(studenti);
})

app.get("/studenti/desantis",(richiesta,risposta)=>{
    risposta.send(studenti[3]);
})





app.listen(porta,()=> console.log("Server avviato in ascolto su porta " + porta));


