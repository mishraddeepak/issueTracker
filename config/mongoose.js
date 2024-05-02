const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ddeepakmishra5:JvyRPRqFAwrPPQsM@cluster0.bhpvpf2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('Connected to Database');
});

module.export = db;
