const usersController = require('./../controllers/users')
const postsController = require('./../controllers/posts')

module.exports = (app) => {
    app.get('/', postsController.showPosts);

    app.get('/create-post', postsController.postsGet);
    app.post('/create-post', postsController.postsCreate)

    app.get('/users/register', usersController.registerGet);
    app.post('/users/register', usersController.registerPost);

    app.get('/users/login', usersController.loginGet);
    app.post('/users/login', usersController.loginPost);

    app.get('/users/logout', usersController.logout);


};
