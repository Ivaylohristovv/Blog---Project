const mongoose = require('mongoose');

let articlesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
    },
    views: {
        type: Number
    },
    likes: {
        type: Number
    },
    dislikes: {
        type: Number
    },
    comments: {
        type: String
    },
    category: {
        type: String,
        required: true
    }
})

const Articles = mongoose.model('Articles', articlesSchema);
