import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import  booksRoute from "./routes/booksRoute.js";
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors())


app.get('/', (request, response) => {
    console.log(request);
    //return response.send(response.json.length)
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });

 app.use('/books', booksRoute)


mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("connected successfully")
    app.listen(PORT, () => {
        console.log(`Server is running on port 5555 ${PORT}`);
    });
    
}).catch((error) => {
    console.log('Error connecting to MongoDB Atlas...\n', error);
})