import React from "react";
import {useBookContext} from "./context/BookContext.tsx";

export const BASE_URL = 'http://localhost:3000/books/'

export enum TABLE_HEADERS {
    TITLE = "Title",
    AUTHOR="Author",
    CATEGORY="Category",
    ISBN="ISBN",
    CREATED_AT="Created At",
    MODIFIED_AT="Modified At",
    ACTIVE="Active",
}

export const categoryOptions: {label: string, value: Category}[] = [
interface CategoryOption {
    label: string;
    value: Category;
}

export const categoryOptions: CategoryOption[] = [
    { label: 'Fiction', value: 'fiction' },
    { label: 'Finance', value: 'finance' },
    { label: 'Science', value: 'science' },
    { label: 'Thriller', value: 'thriller' },
];

export type SUBMIT_BUTTON = 'Add Book' | 'Update Book';

export interface Book {
    id: string;
    title: string,
    author: string,
    category: Category,
    isbn: number,
    createdAt: string,
    modifiedAt: string,
    active: boolean,
}

export const initialBook = {
    id: "",
    title: "",
    author: "",
    category: 'fiction' as Category,
    isbn: 0,
    createdAt: "",
    modifiedAt: "",
    active: true,
};
export interface BookContextType {
    isNewBook: boolean;
    setIsNewBook: (value: boolean) => void;
    bookDetails: Book;
    setBookDetails: (bookDetails: (prev: Book) => {
        id: string;
        title: string;
        author: string;
        category: Category;
        isbn: number;
        createdAt: string;
        modifiedAt: string;
        active: boolean
    }) => void;
    error: Error | undefined;
    setError: (err: Error) => void;
}

export interface BooksListType {
    booksList: Book[];
    setBooksList: React.Dispatch<React.SetStateAction<Book[]>>;
    error: Error | undefined;
    setError: (err: Error) => void;
}

export type Category = 'fiction' | 'finance' | 'science' | 'thriller';

interface InputField {
    name: string;
    value: string;
    label: string;
    type: string;
    placeholder?: string;
    required: boolean;
    options?: CategoryOption[];
    onChange?: (value: string) => void;
}

const {bookDetails} = useBookContext()

export const inputFields: InputField[] = [
    { name: "title", label: "Title", type: "text", placeholder: bookDetails.title, required: true, value: bookDetails.title },
    { name: "author", label: "Author", type: "text", placeholder: bookDetails.author, required: true, value: bookDetails.author },
    { name: "category", label: "Category", type: "select", options: categoryOptions, required: true, value: bookDetails.category },
    { name: "isbn", label: "ISBN", type: "number", placeholder: "Enter ISBN", required: true, value: String(bookDetails.isbn) },
];
