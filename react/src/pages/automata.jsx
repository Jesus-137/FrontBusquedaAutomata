export class Automaton {
    constructor(substring) {
        this.substring = substring.toLowerCase(); // Subcadena a buscar, en minúsculas para la comparación insensible a mayúsculas/minúsculas
    }

    // Método para buscar la subcadena en la propiedad 'nombre' de cada objeto del arreglo
    async findSubstringInArrayObjects(array) {
        const foundObjects = array.filter(obj => obj.correo.toLowerCase().startsWith(this.substring));
        return foundObjects;
    }
}