import User from "../models/models.user.js";

export const userCreate = async (req, res) => {
  const newUser = new User({
    usertype: req.body.usertype,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    emailaddress: req.body.emailaddress,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const singleuser = async (req, res) => {
  const emailAddress = req.params.emailAddress;
  const password = req.params.password;
  try {
    const user = await User.findOne({ emailAddress });

    res.json({ user });

    if (password === user.password) {
      console.log("matched");
    } else {
      console.log("not matched");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { emailaddress, password } = req.body;

    const userLogin =await User.findOne({ emailaddress });
    if (userLogin) {
      if (password === userLogin.password) {
        res.send({ message: "login sucess", userLogin: userLogin });
      } else {
        console.log(password);
        console.log(userLogin.password);
        
        
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not register");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const userUpdate = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.json({ message: "record deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
