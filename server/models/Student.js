const { Schema, model } = require('mongoose');

const studentSchema = new Schema(
    {
        student: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

const Student = model('Student', studentSchema);

module.exports = Student;