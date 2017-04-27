const usersController = require('./../controllers/users')
const articlesController = require('./../controllers/articles')

module.exports = (app) => {
    app.get('/', articlesController.showAllArticles);

    app.get('/article/create', articlesController.articlesGet);
    app.post('/article/create', articlesController.articlesPost)

    app.get('/article/details/:id', articlesController.details);

    app.get('/users/register', usersController.registerGet);
    app.post('/users/register', usersController.registerPost);

    app.get('/users/login', usersController.loginGet);
    app.post('/users/login', usersController.loginPost);

    app.get('/users/logout', usersController.logout);


};
