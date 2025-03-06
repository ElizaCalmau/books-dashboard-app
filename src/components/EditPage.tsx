import {editBook} from "../utils/editBook.ts";
import {useParams} from "react-router";
import {InputLabel} from "./InputLabel.tsx";
import {useGetBookDetails} from "../hooks/useGetBookDetails.ts";
import React, {FormEvent, useState} from "react";
import {categoryOptions} from "../constants.ts";


export const EditPage = () => {
    const {id} = useParams();
    const {bookDetails, setBookDetails} = useGetBookDetails(id || '');

    const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setBookDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            createdAt: formatDate(new Date()),
            modifiedAt: formatDate(new Date()),
            id: id || prev.id,
        }));
    }
    const handleSubmit = async (e ) => {
        try {
            if(id){
                const existingBook = await fetch(`http://localhost:3000/books/${id}`);
                if (existingBook.ok) {
                    await editBook({ id , data: bookDetails });
                } else {
                    await addBook({ data: bookDetails });
                }
            }
        } catch (error) {
            console.error("Error checking if book exists:", error);
        }
    }

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
