const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
    },
    gender: {
        type: String
    },
    photoUrl: {
        type: String,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-library.com%2Ficon%2Fprofile-picture-icon-15.html&psig=AOvVaw0UUL4DYStm5-K6LP0QVTdp&ust=1764748521918000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKDC9de2npEDFQAAAAAdAAAAABAK'
    },

    about: {
        type: String,
        default:'This is default about me section. Please update it.'
    },

    skills: {
        type: [String]
    },


        
});

module.exports = mongoose.model('User', userSchema);