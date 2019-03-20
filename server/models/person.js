import mongoose, {Schema} from 'mongoose';

var personSchema = new Schema({
    name: {
        type: String,
        unique: true,
    }, 
    band: String,
})

export default mongoose.model('person', personSchema);