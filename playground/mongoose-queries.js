const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '58628c1d523b415036dafaae';
//if(!ObjectID.isValid(id)) {
  //  console.log('ID not valid');
//}

//Todo.find({_id: id}).then((todos) => {console.log('Todos', todos);});

//Todo.findOne({_id: id}).then((todo) => {console.log('Todo', todo);});

//Todo.findById(id).then((todo) => {
   // if (!todo) {
    //    return console.log('Id not found');
   // }
  //  console.log('Todo By Id', todo);
//}).catch((e) => console.log(e));

User.findById('586256e9c1934320fb5b8059').then((user) => {
if (!user) {
    return console.log('unable to find user');
}
console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});