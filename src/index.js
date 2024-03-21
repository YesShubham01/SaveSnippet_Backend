import connectDB from "./MongoDb/index.js";
import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config();
import snippetRouter from "./Routers/index.js"

const app=express();

app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['http://localhost:5173', 'http://localhost:8080'];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({message: "Hello World"});
});

app.use("/api/snippet" , snippetRouter)



const startServer=async()=>{
  try{
      connectDB(process.env.MONGO_URL);
      app.listen(8080, ()=>console.log("Server started on http://localhost:8080"));
  } catch(error){
      console.log(error);
  }
}

startServer();