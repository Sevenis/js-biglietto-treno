var km = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));
var costoBiglietto = (km * 0.21);
console.log(costoBiglietto);
if (eta < 18) {
    var costoBiglietto *= 0.8;
    console.log(costoBiglietto);
} else if (eta > 65) {
    var costoBiglietto *= 0.6;
    console.log(costoBiglietto);
}

document.getElementById('prezzo-finale').innerHTML = 'Il prezzo del tuo biglietto è di € ' + costoBiglietto + '!';
