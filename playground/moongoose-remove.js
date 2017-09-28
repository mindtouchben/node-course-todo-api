const { ObjectID } = require('mongodb');

const { moongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result.result);
// });
//
// Todo.findOneAndRemove({}).then((result) => {
//
// });

Todo.findByIdAndRemove('59cc303c0e615865d3ee2f2f').then((todo) => {
  console.log(todo);
});
