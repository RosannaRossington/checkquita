import express from 'express';
import morgan from 'morgan';
import mongoose from "mongoose";
import path from 'path';
import cors from 'cors';
import routes from './routes/api.js'

const app = express();
const PORT = process.env.PORT || 8080;

//use dot env to hide
const uri = 'mongodb+srv://Rossington:Potofgold18!@cluster0.hmjuw.mongodb.net/gettingStarted?retryWrites=true&w=majority'



// mongoose.connect('mongodb://localhost/testt', {
mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
 
//listener to event connected
mongoose.connection.on('connected', () => {
    console.log('Mongoose connection');
});

app.use(cors());
app.use(morgan('tiny'));

app.use('/inseason', routes);

app.listen(PORT, () => {
    console.log(`Listening on **** ${PORT} *****`)
})

