import mongoose from 'mongoose';
import Person from './models/person';

const people = [
    {
        name: 'Andy',
    }, {
        name: 'Parker',
    }, {
        name: 'Sloan', 
    }, {
        name: 'Tim',
    }
]

mongoose.connect('mongodb://localhost/people');

people.map(data => {
    const person = new Person(data);

    person.save();
})