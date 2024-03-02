"use client"
const express =require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const modelRun = async (sentPrompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `${sentPrompt}`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
    return text
}


app.use(cors())
app.use(bodyParser.json())



app.post("/api/response",async(req,res)=>{
 try{
  const message = req.body.message
  console.log(message)
  let text = await modelRun(message)
   console.log(text)
   res.send(text)
 }
 catch(err){
  res.send("Internal ERR")
 }
})


app.listen(8080,()=>console.log("Connected to 8080"))