import mongoose from "mongoose";
const Schema = mongoose.Schema;
const bookSchema =  new Schema(
    {
        title:{
            name :String,
            // required: true,
        },
        author:{
            name :String,
            // required: true,
        },
        publisherYear:{
            name :Number,
            // required: true,
        }, 
    },
    {
        timeStamps: true,
    }
)
export const Book =  mongoose.model('Book', bookSchema);