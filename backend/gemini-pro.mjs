import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config(
    {
        path: "./.env.local"
    }
);
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const model2 = genAI.getGenerativeModel({ model: "gemini-pro" });
    // const prompt = "[YOU ARE A TEACHER ADVISING A BEGINNER STUDENT IN C++, DO NOT PROVIDE CODE, ONLY ANSWER THIS QUESTION IN PLAIN ENGLISH AND CONTINOUS PARAGRAPH]: solve the problem of finding the nth fibonacci number in c++.";
    const prompt = "i am a beginner in c++, provide me beginner concepts to functions in c++ with documentation links"
    const result = await model.generateContent(prompt);
    console.log(result);
    const response = result.response;
    const text = response.text();
    console.log(text);

    const prompt2 = "what programming problem am i solving here? " + text;
    const result2 = await model2.generateContent(prompt2);
    console.log(result2);
    const response2 = result2.response;
    const text2 = response2.text();
    console.log(text2);
}

run();