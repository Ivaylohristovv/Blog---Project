const Articles = require('mongoose').model('Articles');

module.exports = {
    articlesGet: (req, res) => {
        res.render('articles/create');
    },
    articlesPost: (req, res) => {
        let registerArgs = req.body;
        let errorMsg;
        if (!registerArgs.title) {
            errorMsg = 'Please add title';
        } else if (!registerArgs.content) {
            errorMsg = 'Please add content';
        } else if (!registerArgs.category) {
            errorMsg = 'Please add category';
        }
        if (errorMsg) {
            registerArgs.error = errorMsg;
            res.render('articles/create', registerArgs)
        }
        let articleObject = {
            title: registerArgs.title,
            content: registerArgs.content,
            createdAt: new Date(),
            createdBy: req.user.email,
            category: registerArgs.category
        }

        Articles.create(articleObject).then(article => {
            res.redirect('/')
        })
    },
    showAllArticles: (req, res) => {
        let filter;
        console.log(req.params)
        if (req.params.filter) {
            filter = req.params.filter;
            Articles.find({
                category: filter
            }, {}, (err, data) => {
                res.render('home/index', {
                    'articles': data
                })
            })
        } else {
            Articles.find({}, {}, (err, data) => {
                res.render('home/index', {
                    'articles': data
                })
            })
        }

    },
    details: (req, res) => {
        let id = req.params.id;

        Articles.findById(id).populate('author').then(article => {
            res.render('articles/details', article)
        })
    }
};
