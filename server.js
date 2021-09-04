const express = require ('express');
const morgan = require ('morgan');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

//use dot env to hide
//const uri = 'mongodb+srv://Rossington:Potofgold18!@cluster0.hmjuw.mongodb.net/gettingStarted?retryWrites=true&w=majority'

const routes = require('./routes/api')

mongoose.connect('mongodb://localhost/testt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
 
//listener to event connected
mongoose.connection.on('connected', () => {
    console.log('Mongoose connection');
});


app.use(morgan('tiny'));

app.use('/seasonal', routes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

