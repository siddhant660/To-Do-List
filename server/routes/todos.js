const { Router } = require('express');
const { addTodo, getAllTodos } = require('../controllers/todos');

const router = Router();

router.get('/todos', getAllTodos);
router.post('/todos', addTodo);

module.exports = router;