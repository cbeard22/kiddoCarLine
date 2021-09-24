const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    student: {
        type: String,
        required: true,
    },
    parent: [
        {
            parentOne: {
                type: Number,
                required: false,
                trim: true,
            },
            parentTwo: {
                type: Number,
                required: false,
                trim: true,
            },
        },
    ],
    userID: {
        type: Number,
        required: false,
    },
});

const Student = model('Student', studentSchema);

module.exports = Student;
