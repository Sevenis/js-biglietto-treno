var km = parseInt(prompt('Quanti km vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));
var costoBiglietto = (km * 0.21);

if (eta < 18) {
    costoBiglietto *= 0.8;
} else if (eta > 65) {
    costoBiglietto *= 0.6;
}

var costoBigliettoArrotondato = (parseInt(costoBiglietto*100))/100;
document.getElementById('prezzo-finale').innerHTML = 'Il prezzo del tuo biglietto è di € ' + costoBigliettoArrotondato + '!';
