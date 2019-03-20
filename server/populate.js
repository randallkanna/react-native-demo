import mongoose from 'mongoose';
import Person from './models/person';

const people = [
    {
        name: "Luke",
        height: "172",
        mass: "77",
        hair: "fair",
        skin_color: "fair",
        eye_color: "blue",
        gender: "male",
        homeworld: "https://swapi.co/api/planets/1/",
        films: ["https://swapi.co/api/films/2/"],
        species: ["https://swapi.co/api/species/1/"],
        vehicles: ["https://swapi.co/api/vehicles/14/"],
        starships: ["https://swapi.co/api/vehicles/14/"],
    }, {
        name: "Leia",
        height: "120",
        mass: "44",
        hair: "brown",
        skin_color: "fair",
        eye_color: "blue",
        gender: "female",
        homeworld: "https://swapi.co/api/planets/1/",
        films: ["https://swapi.co/api/films/2/"],
        species: ["https://swapi.co/api/species/1/"],
        vehicles: ["https://swapi.co/api/vehicles/14/"],
        starships: ["https://swapi.co/api/vehicles/14/"],
    }, {
        name: "Chewy",
        height: "350",
        mass: "250",
        hair: "brown",
        skin_color: "hairy",
        eye_color: "brown",
        gender: "male",
        homeworld: "https://swapi.co/api/planets/1/",
        films: ["https://swapi.co/api/films/2/"],
        species: ["https://swapi.co/api/species/1/"],
        vehicles: ["https://swapi.co/api/vehicles/14/"],
        starships: ["https://swapi.co/api/vehicles/14/"],
    }
]

mongoose.connect('mongodb://localhost/people');

people.map(data => {
    const person = new Person(data);

    person.save();
})