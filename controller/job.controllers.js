// import Job from "../models/models.user.js";

// export const jobCreate = async (req, res) => {
//   const newJob = new Job({
//     // usertype: req.body.usertype,
//     name: req.body.name,
//     username: req.body.username,
//     emailaddress: req.body.emailaddress,
//     password: req.body.password,
//   });

//   try {
//     const job = await newJob.save();
//     res.status(201).json(job);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export const jobRead = async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.status(200).json(movies);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export const singleJobRead = async (req, res) => {
//   try {
//     const movie = await Movie.findById(req.params.id);

//     if (movie == null) {
//       res.status(404).json({ message: "Not found" });
//     } else {
//       res.status(200).json(movie);
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const jobUpdate = async (req, res) => {
//   try {
//     const result = await Movie.findByIdAndUpdate(
//       { _id: req.params.id },
//       {
//         title: req.body.title,
//         desc: req.body.desc,
//       },
//       { new: true }
//     );
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const jobDelete = async (req, res) => {
//   try {
//     const id = req.params.id;
//     await Job.deleteOne({ _id: id });
//     res.json({ message: "record deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
