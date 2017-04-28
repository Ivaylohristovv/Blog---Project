const mongoose = require('mongoose');


let commentSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Article"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;
