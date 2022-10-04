import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true})); //to send big files like images and links
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://anishmasand:findatutor@cluster0.9wcbzz1.mongodb.net/?retryWrites=true&w=majority' // later on we will create environmental variablees and store our passwords there for security 
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) //if our connection is successful  then call the app and perform this
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify',false); //just to avoid silly warnings in the console.
//https://www.mongodb.com/cloud/atlass