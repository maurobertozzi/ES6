/*

Gebruik van dit document

De opgave in een Block Comment

De code staat tussen Line Comments.
Commentarieer deze uit en los de opgave op.
Gebruik de Webconsole om de
uitvoer te bekijken en voor de Warnings en Error meldingen.

Je code is pas goed als er geen Warnings en Errors zijn!

*/




/*
    Opgave 1.
    De variabele is function scoped dus niet zichtbaar buiten de functie.
    Vind een manier om deze toch zichtbaar te maken

    LET OP
    Geen globale variabele width aanmaken

 */

 setWidth();

function setWidth() {
	 width = 100;
}
console.log(width);

/*
    Opgave 2.
    De variabele boxSize is 'leaking' naar de global scope.

    Los het 'leaking' probleem op.

 */


	var size = 100;
if (size > 50) {
     let boxSize = size * 5;
    console.log(boxSize);
}
// console.log(boxSize); door let kan hij er niet bij komen

/*
    Opgave 3.
    Een 'let' of 'const' variabele kan niet opnieuw worden aangemaakt.

    Verklaar waarom het in onderstaande voorbeeld de bonus variabele wel op true gezet kan worden.
    Zet je oplossing als commentaar in de code.

 */

 //je moet de let updaten niet opnieuw declaren	

let winningPoints = 100;
let bonus = false;

if (winningPoints > 50) {
    bonus = true;
}
console.log( bonus);

/*
    Opgave 4.
    Maak een const object aan uit je directe omgeving met een 4-tal properties.
    Denk bijv. aan een object als klaslokaal, of een persoon.
    HINT: Een object maak je met behulp van {}

 */
const obj = {
	name: 'harry',
	lastname: 'peter',
	age: '15',
	eten: 'pannenkoek' 
};
console.log(obj);

/*
    Opgave 5.
    De waarde van een const kan je niet wijzigen.

    Los het probleem in de onderstaande code op
    maar het object person moet een const blijven.
    De overlijdensdatum van Bowie is 2016.

 */

const person = {
    name: 'Bowie',
    died: 2012
}

person.died = 2016;


console.log(person);


/*
    Opgave 6.
    In de HTML staat een script dat het window een naam geeft.

    De onderstaande code overschrijft deze naam doordat de variabele
    in de global scope staat. Dat is dus de window.name variabele.

    Maak een IIFE die dit probleem voorkomt en tijdelijk dus de inhoud
    van deze les weergeeft.

 */

(function(){
    var foo = function() {};
    window.onload = foo;
    var name = 'Lesson 1: ES6 Variables';
    console.log(name);
    console.log(window.name);
    // ...
})();

/*
    Opgave 7.
    Herschrijf de code van opgave 6, maak gebruik van de ES6 syntax.
    OPM: Oh ja, de naam van de variabele mag je dus niet wijzigen.

 */
((() => {
    const foo = () => {};
    window.onload = foo;
    const name = 'Lesson 1: ES6 Variables';
    console.log(name);
    console.log(window.name);
    // ...
}))();

/*
    Opgave 8.
    Onderstaande code is bijna ongeveer gelijk aan de bovenstaande, voorkom dat de
    globale variabele overschreven wordt.
    OPM: Oh ja, de naam van de variabele mag je dus niet wijzigen.

 */

function varLeak () {
    name = 'een foutje';
}
varLeak();

console.log(window.name);


/*

    For Loop Sample.
    Gebruik van var in een for loop zet de variabele op de global scope.


 */
var i = 0;
for (i; i < 3; i++) {
    console.log(i);

    setTimeout(function () {
       alert ('This is number: ' + i);
    }, 3000);

 }


 /*
    Temporal Dead Zone
    Lees documentatie over hoisting na

    Experimenteer met Const en Let, gebruik de console voor error checking
    
  */

//  function tdz () {
//      console.log(dinner);


//      var dinner = 'Lasagna';
//  }
//  tdz();
