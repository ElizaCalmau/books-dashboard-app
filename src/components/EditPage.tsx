import {editBook} from "../utils/editBook.ts";
import {useParams} from "react-router";
import {InputLabel} from "./InputLabel.tsx";
import {useGetBookDetails} from "../hooks/useGetBookDetails.ts";
import React from "react";



export const EditPage = () => {
    const {id} = useParams();
    const {bookDetails, setBookDetails} = useGetBookDetails(id || '');

    const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setBookDetails({...bookDetails, [e.target.name]: e.target.value});//TODO: created At/ modified At
    }
    const handleSubmit = (e ) => {
        e.preventDefault();
        if(id){
            editBook({id, data: bookDetails})
        }

    }
    const categoryOptions = [
        { label: 'Fiction', value: 'fiction' },
        { label: 'Non-fiction', value: 'non-fiction' },
        { label: 'Science', value: 'science' },
    ];
    return (
        <>
            <form onSubmit={handleSubmit}>

                <InputLabel onChange={handleChange} name="title" label="Title:" placeholder={bookDetails.title} value={bookDetails.title} type='string'/>
                <InputLabel onChange={handleChange} name="author" label="Author:" placeholder={bookDetails.author} value={bookDetails.author} type='string'/>
                <InputLabel onChange={handleChange} name="category" label="Category:" value={bookDetails.category} options={categoryOptions} />
                <InputLabel onChange={handleChange} name="isbn" label="ISBN:" placeholder={String(bookDetails.isbn)} value={bookDetails.isbn} type='number'/>
                <button type="submit">Edit</button>
            </form>
        </>
    );
};
