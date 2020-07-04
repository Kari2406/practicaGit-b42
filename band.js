class Band {
    constructor(name, website, year, genre) {
        this.name = name ? name : 'Nombre no encontrado';
        this.website = website ? website : 'Web no encontrada';
        this.year = year ? year : 'Año no encontrado';
        this.genre = genre ? genre : 'Género no encontrado';
    }
}

module.exports = { Band };


//operador ternario
//const edad = 16;

/* const result = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';

console.log(result); */


