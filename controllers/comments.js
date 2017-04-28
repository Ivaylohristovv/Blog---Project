const Comments = require('mongoose').model('Comments');
const Articles = require('mongoose').model('Articles');


module.exports = {
    commentsPost: (req, res) => {
        let registerArgs = req.body
        let commentObject = {
            email: registerArgs.email,
            content: registerArgs.content,
            article: req.params.id
        }
        Comments.create(commentObject).then(comment => {
            Articles.findByIdAndUpdate(
                req.params.id, {
                    $push: {
                        "comments": {
                            email: comment.email,
                            content: comment.content,
                            createdAt: comment.createdAt
                        }
                    }
                }, {
                    safe: true,
                    upsert: true
                },
                function(err, model) {
                    if (err) {
                        console.log('err', err)
                    } else {
                        res.redirect('/article/details/' + req.params.id)
                    }
                }
            );
        })

    },
}
