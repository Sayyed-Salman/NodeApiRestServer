const Movie = require('../models/MovieModel');

exports.getMovies = async (req,res) => {
    try{
        const Movies = await Movie.find();
        res.json(Movies);
    } catch(err) { 
        res.status(500).json({message:err.message});
    }
};

exports.getMoviesbyId = async (req,res) => {
    try{
        const NewMovie = await Movie.findById(req.params.id);
        res.json(NewMovie);
    } catch(err) {
        res.status(500).json({message:err.message});
    }
};

exports.createMovie = async (req,res) => {
    const NewMovie = new Movie({
        name:req.body.name,
        img:req.body.img,
        summary:req.body.summary,
    });
    try{
        const newMovie = await NewMovie.save();
        res.status(201).json(newMovie);
    } catch(err) {
        res.status(400).json({message:err.message});
    }
};

exports.updateMovie = async (req,res) => {
    try{
        const updatedMovieData = {
  name: req.body.name,
  img: req.body.img,
  summary: req.body.summary,
};

Movie.findOneAndUpdate(
  { _id: req.params.id },
  updatedMovieData,
  { new: true },
  (err, movie) => {
    if (err) {
      console.error('Error updating the movie:', err);
      res.status(500).send('Error updating the movie.');
    } else if (movie) {
      console.log('Movie updated successfully.');
      res.send(movie);
    } else {
      console.log('Movie not found.');
      res.status(404).send('Movie not found.');
    }
  }
);

        
    } catch(err) {
        res.status(400).json({message:err.message});
    }
};

exports.deleteMovie = async (req,res) => {
    try{
        const NewMovie = await Movie.findById(req.params.id);
        if (!NewMovie) throw Error('No Movie found');
        await NewMovie.deleteOne();
        res.json({message:'Movie deleted'});
    } catch(err) {
        res.status(500).json({message:err.message});
    }
};