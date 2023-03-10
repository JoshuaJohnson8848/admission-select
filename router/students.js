const express = require('express');
const router = express.Router();

const studentController = require('../controller/students');

router.post('/', studentController.create);

router.get('/', studentController.getAll);

router.get('/:id', studentController.getById);

router.put('/:id', studentController.update);

router.delete('/:id', studentController.deleteById);

router.delete('/', studentController.deleteAll);

module.exports = router;
