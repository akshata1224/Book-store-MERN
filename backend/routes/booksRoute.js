import express from 'express';
import { Book } from '../models/bookModel.js';
const router = express.Router();


//Route to get all books
router.get('/', async (req, res)=>{
    // res.send("rlngl/whetgiwheivbemv,ev")
    try{
        const books = await Book.find({});
        console.log(books)
        // return res.sendStatus(400).json({
        //     books
        // })
        res.json({books})
    }catch(err){
        return res.send(err)
    }
});
//Route to get book by id
router.get('/:id', async (req, res)=>{
    // res.send("rlngl/whetgiwheivbemv,ev")
    try{
        const { id } = req.params;
        const book = await Book.findById(id);

        return res.json(book);
    }catch(err){
        res.status(500).send({message: err.message})
    }
})

//Route to update books
router.put('/:id', async (req , res ) =>{
    try{
        if(
            !req.body.title ||
            !req.body.author||
            !req.body.publishYear){
                return res.status(400).send({
                    message: 'Please provide all the required fields'
                });
        }
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result){
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).send({ message: 'Book updated successfully' });
    }catch(error){
        console.log(error.message)
       
    }
})

//Route for save books
router.post('/', async (req ,res) =>  {
    try{
        if(
            !req.body.title &
            !req.body.author &
            !req.body.publishYear){
                return res.status(400).send(
                    {
                    message: "required all feildwf"
                });
        }
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await Book.create(newBook);
        return  res.status(201).send(book);
        
        
    }catch(error){
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})

//Route to delete
router.delete('/:id', async (request , response ) =>{
    try{
        
        const {id} = request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(400).send("book not found")
        }
        return response.status(200).send({message:"Book deleted"})

    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });

    }
})

export default router;
