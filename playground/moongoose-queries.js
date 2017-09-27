const { ObjectID } = require('mongodb');
const { moongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '59cbeaaafb734e64360ee4411';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
//   return;
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   if (todos.length === 0) { return console.log('Id not found'); }
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) { return console.log('Id not found'); }
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) { return console.log('Id not found'); }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('59ca9af04032e060476d39ca').then((user) => {
  if (!user) { return console.log('User not found'); }
  console.log(user);
}).catch((e) => console.log(e));
