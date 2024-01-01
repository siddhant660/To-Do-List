const { Router } = require('express');
const { addTodo } = require('../controllers/todos');

const router = Router();

router.post('/todos', addTodo);

module.exports = router;