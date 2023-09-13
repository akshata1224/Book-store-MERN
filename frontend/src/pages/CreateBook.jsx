import React, { useState } from 'react';
import { BackButton } from '../components/BackButton';
import axios from 'axios';
import Spinner from '../components/spinner';
import { useNavigate } from 'react-router-dom';
// import { useSnackbar } from 'notistack';

const CreateBook = () =>{
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishYear, setPublishYear] = useState('')
    const [loading, setLoading] = useState('')
    const navigate = useNavigate();
    //const { enqueueSnackbar } = useSnackbar();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true);
        axios
        .post('http://localhost:5555/books',data)
        .then(()=>{
            setLoading(false);
            //enqueueSnackbar('Book Created successfully', { variant: 'success' });
            navigate('/')
        })
        .catch((error)=>{
            alert('An error happened, please check console')
            console.log(error)
        })
    };


    return(
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Create Bokk</h1>
            {loading ? <Spinner/> :''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                   <label className='text-xl mr-4'>Title</label> 
                   <input 
                   type="text"
                    name="" 
                    id="" 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                
                <div className='my-4'>
                   <label className='text-xl mr-4'>Author</label> 
                   <input 
                   type="text"
                    name="" 
                    id="" 
                    value={author} 
                    onChange={(e)=>setAuthor(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                   <label className='text-xl mr-4'>PublishYear</label> 
                   <input 
                   type="text"
                    name="" 
                    id="" 
                    value={publishYear} 
                    onChange={(e)=>setPublishYear(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <button
                className='p-2 bg-sky-300 m-8'
                onClick={handleSaveBook}
                >
                    Add Book
                </button>
            </div>
        </div>
    )
}
export default CreateBook;