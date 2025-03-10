import {Category} from "./types";

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