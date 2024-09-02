// require('dotenv').config({path: './env'});
import express from "express";
import dotenv from "dotenv";
const app = express();
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db conenction failed !!!", err);
  });

// import express from "express"
// const app = express()
// ;(async()=>{
//   try{
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.on("error",()=>{
//   console.log("ERRR:", error);
//   throw error
// })

// app.listen(process.env.PORT,()=>{
//   console.log(`APP is listening on Port ${process.env.PORT}`);
// }
// )

// }catch(error){
// console.log("ERROR: ", error)
// throw err
//   }
// })()
