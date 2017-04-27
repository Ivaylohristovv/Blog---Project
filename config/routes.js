const homeController = require('./../controllers/home');
const usersController = require('./../controllers/users')
module.exports = (app) => {
    app.get('/', homeController.index);

    app.get('/users/register', usersController.registerGet);
    app.post('/users/register', usersController.registerPost);

    app.get('/users/login', usersController.loginGet);
    app.post('/users/login', usersController.loginPost);

    app.get('/users/logout', usersController.logout);
};
