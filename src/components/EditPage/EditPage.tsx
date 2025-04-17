import {useParams} from "react-router";
import {InputLabel} from "../InputLabel/InputLabel.tsx";
import {useGetBookDetails} from "../../hooks/useGetBookDetails.ts";
import React, {FormEvent, useState} from "react";
import {
    Book,
    InputField,
    SUBMIT_BUTTON,
    categoryOptions,
    ValidationErrors,
    CategoryOption,
    FilterOption
} from "../../constants.ts";
import {addBook, editBook, getBookById} from "../../utils/bookService.ts";
import {useBookContext} from "../../context/BookContext.tsx";
import {validator} from "../../utils/validator.ts";
import { ToastContainer, toast } from 'react-toastify';
import ValidationError from "../ValidationError/ValidationError.tsx";
import styles from "./EditPage.module.scss";
import {StepBackIcon} from "lucide-react";
import {BookState} from "../BookState/BookState.tsx";
import {goBack} from "../../utils/utils.ts";


export const EditPage = () => {
    const {id} = useParams();
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
    const { isNewBook, bookDetails, setBookDetails } = useBookContext();
    const notify = (message: string) => {
        toast(message);
    }
    useGetBookDetails(id || '');
    const inputFields: InputField[] = [
        { name: "title", label: "Title", type: "text", placeholder: bookDetails.title, required: true, value: bookDetails.title, validationConditions: { min: 4, max: 20, errorMessage: "Title should not" }, },
        { name: "author", label: "Author", type: "text", placeholder: bookDetails.author, required: true, value: bookDetails.author, validationConditions: { min: 4, max: 15, errorMessage: "Author's name should not" }, },
        { name: "category", label: "Category", type: "select", options: categoryOptions, required: true, value: bookDetails.category },
        { name: "isbn", label: "ISBN", type: "text", placeholder: "Enter ISBN", required: true, value: String(bookDetails.isbn), validationConditions: { min: 9, max: 10, errorMessage: "ISBN should not" }, },
    ];

    const submitButton: SUBMIT_BUTTON = isNewBook ? 'Add Book' : 'Update Book';

    const handleInputChange =(e: React.ChangeEvent<HTMLInputElement> , field: InputField) => {
        if(field.validationConditions){
            const error = validator({value: e.target.value, conditions: field.validationConditions}) || null;
            setValidationErrors((prevErrors) => {
                if (prevErrors[e.target.name] !== error) {
                    return { ...prevErrors, [e.target.name]: error };
                }
                return prevErrors;
            });
        }
        setBookDetails((prev) => {
            if (!prev) return prev;
            const name = e.target.name as keyof Book;
            const value = e.target.value;

            return {
                ...prev,
                [name]: value,
                id: id || prev.id,
            };
        });

    }

    const handleSelectChange = (option: CategoryOption | FilterOption, field: InputField) => {
        setBookDetails((prev) => {
            if(!prev) return prev;
            const name = field.name;
            const value = option.label;
            return {
                ...prev,
                [name]: value,
                id: id || prev.id,
            }

        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement> | CategoryOption | FilterOption,
        field: InputField
    ) => {
        if ('label' in e) {
            handleSelectChange(e as CategoryOption, field);
        } else {
            handleInputChange(e as React.ChangeEvent<HTMLInputElement>, field);

        }
    };

    const handleBookState = (e: React.MouseEvent) => {
        e.preventDefault();
        setBookDetails((prev) => {
            if(!prev) return prev;
            return {
            ...prev,
            active: !bookDetails.active,
            }
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const hasErrors = Object.values(validationErrors).some(error => error !== null);
        if (hasErrors) {
            notify("Something went wrong");
            return;
        }

        if (!id) return;

        try {
            const existingBook = await getBookById(id);

            const timestamp = new Date().toISOString();
            const bookData: Book = {
                ...bookDetails,
                [existingBook ? 'modified_at' : 'created_at']: timestamp,
            };

            if (existingBook) {
                const res = await editBook({ id, details: bookData });
                notify(res);
            } else {
                const res = await addBook({ details: bookData });
                notify(res);
            }

        } catch (error: any) {
            console.error("Error handling book submission:", error);
            notify(error.message || "Unexpected error occurred");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.formWrapper}>
                <div className={styles.form}>
                    <h2>Please {isNewBook? 'add' : 'update'} a book </h2>
                    {bookDetails && inputFields.map((field: InputField) => {
                        return (
                                <div className={styles.inputWrapper} key={field.name}>
                                    <InputLabel field={field} onChange={(e:  React.ChangeEvent<HTMLInputElement> | CategoryOption | FilterOption) => handleChange(e, field)}/>
                                    <div className={styles.validationError}>
                                        <ValidationError key={field.value} error={validationErrors[field.name]} />
                                    </div>
                                </div>
                        )
                    }
                    )}
                    <h3>Book status</h3>
                    <BookState isActive={bookDetails.active} handleChange={handleBookState} />
                    <button type="submit">{submitButton}</button>
                </div>
            <button onClick={goBack}> <StepBackIcon /></button>
            </form>
            <ToastContainer />
        </>
    );
};
