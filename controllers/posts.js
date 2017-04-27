const Posts = require('mongoose').model('Posts');

module.exports = {
    postsGet: (req, res) => {
        res.render('posts/create');
    },
    postsCreate: (req, res) => {
        let registerArgs = req.body;
        let errorMsg;
        if (!registerArgs.title) {
            errorMsg = 'Please add title';
        } else if (!registerArgs.content) {
            errorMsg = 'Please add content';
        }
        if (errorMsg) {
            registerArgs.error = errorMsg;
            res.render('posts/create', registerArgs)
        }
        let postObject = {
            title: registerArgs.title,
            content: registerArgs.content,
            createdAt: new Date()
        }

        Posts.create(postObject).then(post => {
            res.redirect('/')
        })
    },
    showPosts: (req, res) => {
        Posts.find({}, {}, (err, data) => {
            res.render('home/index', {
                'posts': data
            })
        })
    }
};
