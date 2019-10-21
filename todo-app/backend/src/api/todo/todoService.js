const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
// Comando para atualizar um objeto e retornar o objeto com a atualização realizada
Todo.updateOptions({ new: true, runValidators: true }); // runValidators: valida os dados que são obrigatórios

module.exports = Todo;
