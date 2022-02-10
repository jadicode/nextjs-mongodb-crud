import { Schema, model, models} from 'mongoose'

const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true,
        trim: true,
        maxlength:[50, 'Title maxlength 50 characters']
    },
    description:{
        type: String,
        required: true,
        trim: true,
        maxlength: [200, 'Description must be less than 200 characters.']
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.Task || model('Task', TaskSchema);