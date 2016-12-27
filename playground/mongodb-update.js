//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
   //db.collection('Users').deleteMany({name: 'Andrew'});
   db.collection('Users').findOneAndUpdate({_id: new ObjectID("586145f954e2b0785edd5325")
}, {
    $set: {
      name: 'Yannick'
    },
    $inc: {
      age: 1
    }
}, {
    returnOriginal: 'Andrew'}).then((result) =>{
        console.log(result);
    });

    //db.close();

});   