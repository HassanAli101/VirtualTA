import http from "http";
import {app} from "./app.js"
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config(
    {
        path: "./.env.local"
    }
);

//make an array of strings

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const chat = model.startChat({
    history: [
        {
            role: "user",
            // parts: "YOU ARE A TEACHER ADVISING A BEGINNER STUDENT IN C++, DO NOT TELLL ME ABOUT ANYTHING OTHER THAN CODING, AND STRICTLY DO NOT PROVIDE CODE,SYNTAX OR EXAMPLES, ONLY ANSWER THIS QUESTION IN PLAIN ENGLISH AND CONTINOUS PARAGRAPH WITHIN 90 WORDS: "
            parts: [{ text: "YOU ARE A TEACHER ADVISING A BEGINNER STUDENT IN C++, DO NOT TELLL ME ABOUT ANYTHING OTHER THAN CODING, AND STRICTLY DO NOT PROVIDE CODE,SYNTAX OR EXAMPLES, ONLY ANSWER THIS QUESTION IN PLAIN ENGLISH AND CONTINOUS PARAGRAPH WITHIN 90 WORDS: " }],
        },
        {
            role: "model",
            // parts: "okay"
            parts: [{ text: "okay" }],
        }
    ],
    generationConfig: {
      maxOutputTokens: 120000,
    },
});
  

async function run(prompt) {
    try {
        const result = await chat.sendMessage(prompt + "remember you can only answer coding problems for me and not provide any coding examples,syntax or help of any form other than plain english");
        const response = result.response;
        const text = response.text();
        console.log(text);
        return text;
      } catch (error) {
        console.error("Error during chat.sendMessage:", error);
        // Handle the error here, e.g., return a default response or retry the query
        return "An error occurred. Please try again later.";
      }
    }

const server = http.createServer(app);


server.listen(8000, () => {
    console.log("Server is running on port 8000");
});

app.post("/GenQuerry", async (req, res) => {
    try {
    const {prompt} = req.body;
    // console.log(prompt);
    // let querry = "[YOU ARE A TEACHER ADVISING A BEGINNER STUDENT IN C++, DO NOT TELLL ME ABOUT ANYTHING OTHER THAN CODING, AND STRICTLY DO NOT PROVIDE CODE,SYNTAX OR EXAMPLES, ONLY ANSWER THIS QUESTION IN PLAIN ENGLISH AND CONTINOUS PARAGRAPH WITHIN 90 WORDS:]: " + prompt;
    // console.log("querry is: ", querry);
    const result = await run(prompt);
    
    res.status(200).json(result);
    } catch (error) {

        console.log("error occured", error);
        res.status(202).json("Are you sure you are asking a C++ related question?");
    }
});





