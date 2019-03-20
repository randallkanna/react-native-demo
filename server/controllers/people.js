import Person from '../models/person';

export const index = (req, res, next) => {
    Person.find().lean().exec((err, people) => res.json(
        {people: people.map(people => ({
            ...people
            // TODO add more functionality here later
        }))}
    ))
}