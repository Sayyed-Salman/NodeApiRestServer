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
    if (req.method === 'POST' && Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Empty request body. Please provide valid data.' });}

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
    const {name, img, summary} = req.body;
    if (!name || !img || !summary) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    try{
        const updatedMovie = await Movie.findByIdAndUpdate(
                                        req.params.id,
                                        { name, img, summary },
                                        { new: true }
                                        );

    if (updatedMovie) {
      res.json(updatedMovie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
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