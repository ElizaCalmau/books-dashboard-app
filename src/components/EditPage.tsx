import {useParams} from "react-router";
import {InputLabel} from "./InputLabel.tsx";
import {useGetBookDetails} from "../hooks/useGetBookDetails.ts";
import React, {FormEvent} from "react";
import {Book, InputField, SUBMIT_BUTTON, categoryOptions} from "../constants.ts";
import {formatDate} from "../utils/formatDate.ts";
import {addBook, editBook, getBookById} from "../utils/bookService.ts";
import {useBookContext} from "../context/BookContext.tsx";
import {validator} from "../utils/validator.ts";

import ValidationError from "./ValidationError/ValidationError.tsx";

export const EditPage = () => {
    const {id} = useParams();
    const [validationError, setValidationError] = useState<Record<string, string | null>>({});
    const { isNewBook, bookDetails, setBookDetails } = useBookContext();
    useGetBookDetails(id || '');

    const inputFields: InputField[] = [
        { name: "title", label: "Title", type: "text", placeholder: bookDetails.title, required: true, value: bookDetails.title, validationConditions: { min: 4, max: 20, errorMessage: "Title should not" }, },
        { name: "author", label: "Author", type: "text", placeholder: bookDetails.author, required: true, value: bookDetails.author, validationConditions: { min: 4, max: 15, errorMessage: "Author's name should not" }, },
        { name: "category", label: "Category", type: "select", options: categoryOptions, required: true, value: bookDetails.category },
        { name: "isbn", label: "ISBN", type: "number", placeholder: "Enter ISBN", required: true, value: String(bookDetails.isbn), validationConditions: { min: 9, max: 10, errorMessage: "ISBN should not" }, },
    ];

    const submitButton: SUBMIT_BUTTON = isNewBook ? 'Add Book' : 'Update Book';

    const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field) => {
        const error = validator({value: e.target.value, conditions: field.validationConditions}) || null;
        if(validationError) {
            setValidationError({[e.target.name]: error})
        }
        setBookDetails((prev: Book) => ({
            ...prev,
            [e.target.name]: e.target.value,
            id: id || prev.id,
        }));
    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            if(id){
                const existingBook = await getBookById(id);
                if (existingBook) {
                    const updatedBookDetails: Book = {
                        ...bookDetails,
                        modifiedAt: formatDate(new Date()),

                    };
                    await editBook({ id , data: updatedBookDetails });
                } else {
                    const newBookDetails = {
                        ...bookDetails,
                        createdAt: formatDate(new Date()),
                    };
                    await addBook({data: newBookDetails});
                }
            }
        } catch (error) {
            console.error("Error checking if book exists:", error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {inputFields.map((field: InputField) => {
                    return (
                        <InputLabel key={field.name} field={field} onChange={(e) => handleChange(e, field)}/>
                    )
                }
                )}
                <button type="submit">{submitButton}</button>
            </form>
        </>
    );
};
