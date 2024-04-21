import http from "http";
import {app} from "./app.js"
import User from "./UserModel.js";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config(
    {
        path: "./.env.local"
    }
);

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    // const prompt = "[YOU ARE A TEACHER ADVISING A BEGINNER STUDENT IN C++, DO NOT PROVIDE CODE, ONLY ANSWER THIS QUESTION IN PLAIN ENGLISH AND CONTINOUS PARAGRAPH]: solve the problem of finding the nth fibonacci number in c++.";
    // const prompt = "i am a beginner in c++, provide me beginner concepts to functions in c++ with documentation links"
    const result = await model.generateContent(prompt);
    console.log(result);
    const response = result.response;
    const text = response.text();
    console.log(text);
    return text;
}

const server = http.createServer(app);


server.listen(8000, () => {
    console.log("Server is running on port 8000");
});

app.post("/GenQuerry", async (req, res) => {
    try {
    const {prompt} = req.body;
    console.log(prompt);
    const result = await run(prompt);
    res.status(200).json(result);
    } catch (error) {
        console.log("error occured", error);
    }
});

app.post("/signup", async (req, res) => {
    const {username, password} = req.body;
    const user = new User({
        username,
        password
    });
    console.log(user);
    await user.save();
    res.status(200).json(user);
});




