const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id:'5863ab09308a1f3adfb2372f'}).then((todo) => {

});


Todo.findByIdAndRemove('5863ab09308a1f3adfb2372f').then((todo) => {
    console.log(todo);
});