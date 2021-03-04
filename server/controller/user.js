import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = `${process.env.SECRET_KEY}`;
const expires = `${process.env.EXPIRES_IN}`;

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    //1.Check user exsit or not if not then return user doesn't exit
    if (!existingUser) {
      return res.staus(404).json({ message: "user doesn't exist." });
    }
    // 2.Check the passowrd is macthing or not
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    // If not match password then return
    if (!isPasswordCorrect)
      return res.staus(404).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      { expiresIn: expires }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) return res.staus(400).json({ message: "user already exist." });
    if (password !== confirmPassword)
      return res.staus(400).json({ message: "passwords don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: expires,
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// expiresIn
