import Movie from "../models/modles.movies.js";

export const moviesCreate = async (req, res) => {
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const moviesRead = async(req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json(movies);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const singleMovieRead = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)

    if(movie == null){
        res.status(404).json({message:"Not found"})
    }
    else{
        res.status(200).json(movie)
    }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
};


export const moviesUpdate = async (req, res) => {
  try {
    const result = await Movie.findByIdAndUpdate({_id:req.params.id},{
        title:req.body.title,
        desc:req.body.desc
    },{new:true})
    res.status(200).json(result);
    
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
};

export const moviesDelete =  async (req, res) => {
  try {
    const id=req.params.id;
    await Movie.deleteOne({_id:id})
    res.json({message:"record deleted"})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
