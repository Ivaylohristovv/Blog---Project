const mongoose = require('mongoose');

let postsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
    },
    views: {
        type: Number
    },
    likes: {
        type: Number
    }
})

const Posts = mongoose.model('Posts', postsSchema);
