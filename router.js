const Router = require('koa-router');
const authCtrl = require('./controllers/authentication');

const router = new Router();

router.post('/sign-up', authCtrl.signUp, authCtrl.logIn);
router.get('/log-in', authCtrl.logIn);

module.exports = router;
