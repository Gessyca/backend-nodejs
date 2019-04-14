const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const routes = express.Router();

const BoxController = require('./controllers/boxController');
const FileController = require('./controllers/fileController');

// req dados enviados pelo usuario
// res resposta que sera retornada para o usuario
routes.get('/teste', (req, res) => {
    return res.send('Hello Rocket');
});

routes.get('/boxes/:id', BoxController.show);
routes.post('/boxes', BoxController.store);
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;