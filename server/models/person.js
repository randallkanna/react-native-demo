import mongoose, {Schema} from 'mongoose';

var personSchema = new Schema({
    name: {
        type: String,
        unique: true,
    }, 
    height: String,
    mass: String,
    hair: String,
    skin_color: String,
    eye_color: String,
    gender: String,
})

export default mongoose.model('person', personSchema);