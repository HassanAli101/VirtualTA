import http from "http";
import {app} from "./app.js"
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config(
    {
        path: "./.env.local"
    }
);

let PartsArray = [];
let NumParts = 0;
let CurrentPart = 0;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const chat = model.startChat({
    history: [
        {
            role: "user",
            // parts: "YOU ARE A TEACHER ADVISING A BEGINNER STUDENT IN C++, DO NOT TELLL ME ABOUT ANYTHING OTHER THAN CODING, AND STRICTLY DO NOT PROVIDE CODE,SYNTAX OR EXAMPLES, ONLY ANSWER THIS QUESTION IN PLAIN ENGLISH AND CONTINOUS PARAGRAPH WITHIN 90 WORDS: "
            parts: [{ text: "YOU ARE A TEACHER ADVISING A BEGINNER STUDENT IN C++, DO NOT TELLL ME ABOUT ANYTHING OTHER THAN CODING, AND STRICTLY DO NOT PROVIDE CODE,SYNTAX OR EXAMPLES, ONLY ANSWER THIS QUESTION IN PLAIN ENGLISH: " }],
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
        const result = await chat.sendMessage("Classify the following user input as a \"Question\" , \"Syntax Question\" or an \"Answer\" to a question, and respond in these labels only: " + prompt );
        const response = result.response;
        let text = response.text();
        console.log(text);
        text = text.replace(/\*/g, '');//remove stars from text
        if (text == "Question") {
            const result2 = await chat.sendMessage("Answer this question in Steps and in plain english only. number them 1. 2. etc: " + prompt + "strictly dont provide any code or examples");
            const response2 = result2.response;
            const text2 = response2.text(); 
            console.log("text2: ", text2);
            PartsArray = text2.split("\n"); // seperate the text into parts and store in array
            // console.log(PartsArray);
            for (let i = 0; i < PartsArray.length; i++) { // remove any parts that do not start with a number, rough way of removing code or examples
                if (isNaN(PartsArray[i].charAt(0))) {
                    PartsArray.splice(i, 1);
                }
            }
            console.log("parts array: ", PartsArray);
            NumParts = PartsArray.length;
            console.log("Number of parts: ", NumParts);
            CurrentPart = 0;
            const result3 = await chat.sendMessage("Convert this step into a question to be asked to the beginner user to force them to think algorithmically: " + PartsArray[CurrentPart]);
            const response3 = result3.response;
            const text3 = response3.text();
            // CurrentPart++;
            console.log("text3: ", text3);
            return text3;

        } else if (text == "Syntax Question") {
            const result2 = await chat.sendMessage("Answer this syntax question in detail, and provide relevant documentation link at the end: " + prompt);
            const response2 = result2.response;
            const text2 = response2.text();
            console.log("text2: ", text2);
            return text2;
        } else if (text == "Answer") {

            // return "Answer if executed"
            const result2 = await chat.sendMessage("Compare the following user input to the correct answer and classify whether this is \"Correct\" or \"Incorrect\" only: " + prompt + "Actual step: " + PartsArray[CurrentPart]);
            const response2 = result2.response;
            const text2 = response2.text();
            console.log("text2: ", text2);
            if (text2 == "Correct") {
                CurrentPart++;
                if (CurrentPart < NumParts) {
                    const result3 = await chat.sendMessage("Convert this step into a question to be asked to the beginner user to force them to think algorithmically: " + PartsArray[CurrentPart]);
                    const response3 = result3.response;
                    const text3 = response3.text();
                    console.log("text3: ", text3);
                    return text3;
                } else {
                    return "You have successfully answered all the questions. Good job!";
                }
            } else if (text2 == "Incorrect") {
                const result3 = await chat.sendMessage("Explain the correct answer to the following question: " + PartsArray[CurrentPart]);
                const response3 = result3.response;
                const text3 = response3.text();
                console.log("text3: ", text3);
                return text3;
            } else {
                return "Are you sure you are asking a C++ related question?";
            }
        } else {
                return "Are you sure you are asking a C++ related question?";
        }
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





