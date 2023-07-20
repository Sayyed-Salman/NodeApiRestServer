const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const initialData = require('./dummyData')
const Movie = require('./src/models/MovieModel');

const app = express();
const port = 3000;
app.use(bodyParser.json());

// Setup mongoose connection
mongoose.connect('mongodb+srv://salmansyyd:mysecretpassword12@cluster0.hlgdohp.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true});

const addInitialData = async () => {
  try {
    await Movie.insertMany(initialData);
    console.log('Initial data inserted successfully.');
  } catch (err) {
    console.error('Error inserting initial data:', err);
  }
};

addInitialData();

const MovieRoutes = require('./src/routes/MovieRoutes');
app.use('/api/Movies',MovieRoutes);


app.listen(port,() => {
    console.log(`Server started at port ${port}`);
});