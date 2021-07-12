const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

/*
Por ejemplo, podríamos crear una lista de pokémon que tengan nombres que comiencen con la letra "B" usando el siguiente código
*/

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
console.table(bListPkmn)

/*
O si quisiéramos devolver una matriz de solo los identificadores, podríamos usar algo como esto.
*/

const pkmnIds = pokémon.map( p => p.id )
console.table(pkmnIds)

// Una serie de objetos Pokémon donde la identificación es divisible por 3
const dibisible3Pkmn = pokémon.filter(p => p.id % 3 == 0)  
//returns [undefined, undefined, undefined, 3, 4]
console.table(dibisible3Pkmn);

//una serie de objetos Pokémon que son del tipo "fuego"
const tipoFuego = pokémon.filter(p => p.types[0] == 'fire')
//returns [undefined, undefined, undefined, 3, 4]
console.log('Tipo fuego',tipoFuego);

//Una variedad de objetos Pokémon que tienen más de un tipo
const masDeUnTipo = pokémon.filter(p => p.types.length>1)
console.log('Mas de un tipo',masDeUnTipo);

//una matriz con solo los nombres de los Pokémon
const soloNombres = pokémon.map(p => p.name)
console.log('Solo nombres',soloNombres);

//Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
const nombreMayor99 = pokémon.filter(p => p.id > 99 ).map(p => p.name)
console.log('Solo nombres',nombreMayor99);

//una matriz con solo los nombres del pokémon cuyo único tipo es veneno
const nombreVeneno = pokémon.filter(p => p.types == 'poison' ? p.name : p.types[0] == 'poison' || p.types[1] == 'poison').map(p => p.name)
console.log('Solo nombres tipo veneno',nombreVeneno);

// una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const primerVolador = pokémon.filter(p => p.types[1] == 'flying').map(p => p.name).splice(0,1)
console.log('Solo nombres tipo flying',primerVolador);

//un recuento de la cantidad de pokémon que son de tipo "normal"
const countNormal = pokémon.filter(p => p.types[0] == 'normal').map(p => p.name)
console.log('recuento de la cantidad de pokémon que son de tipo normal',countNormal.length);