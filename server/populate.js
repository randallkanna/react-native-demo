import mongoose from 'mongoose';
import Person from './models/person';

const people = [
    {
        name: 'Luke',
        height: "172",
        mass: "77",
        hair_color: "fair",
        skin_color: "fair",
        eye_color: "blue",
        gender: "female",
        homeworld: "https://swapi.co/api/planets/1/",
        films: ["https://swapi.co/api/films/2/"],
        species: ["https://swapi.co/api/species/1/"]
    }
]

// 	"vehicles": [
// 		"https://swapi.co/api/vehicles/14/",
// 		"https://swapi.co/api/vehicles/30/"
// 	],
// 	"starships": [
// 		"https://swapi.co/api/starships/12/",
// 		"https://swapi.co/api/starships/22/"
// 	],

mongoose.connect('mongodb://localhost/people');

people.map(data => {
    const person = new Person(data);

    person.save();
})