const express = require('express');
const router = express.Router();

const authRouter = require('./authRouter')
const deviceRouter = require('./deviceRouter')

const authMiddlewares = require('../Middlewares/authMiddlewares')

router.use('/auth',authRouter)
//до этого роутера - все роутеры, не требующие аутентификации
router.use(authMiddlewares);
// все роуты, требующие аутентификации
router.use('/devices',deviceRouter)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
