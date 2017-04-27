const usersController = require('./../controllers/users');
const articlesController = require('./../controllers/articles');
const commentsController = require('./../controllers/comments');
module.exports = (app) => {
    app.get('/', articlesController.showAllArticles);
    app.get('/:filter', articlesController.showAllArticles);

    app.get('/article/create', articlesController.articlesGet);
    app.post('/article/create', articlesController.articlesPost);

    app.get('/article/edit/:id', articlesController.articlesEditGet);
    app.post('/article/edit/:id', articlesController.articlesEditPost);


    app.post('/article/delete/:id', articlesController.articlesDeletePost);

    app.get('/article/details/:id', articlesController.details);

    app.post('/comments/post/:id', commentsController.commentsPost);

    app.get('/users/register', usersController.registerGet);
    app.post('/users/register', usersController.registerPost);

    app.get('/users/login', usersController.loginGet);
    app.post('/users/login', usersController.loginPost);

    app.get('/users/logout', usersController.logout);


};
