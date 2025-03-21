import React from "react";

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
export type CategoryType = 'fiction' | 'finance' | 'science' | 'thriller';

export interface CategoryOption {
    label: string;
    value: CategoryType;
}

export const categoryOptions: CategoryOption[] = [
    { label: 'Fiction', value: 'fiction' },
    { label: 'Finance', value: 'finance' },
    { label: 'Science', value: 'science' },
    { label: 'Thriller', value: 'thriller' },
];

export interface FilterOption {
    label: string;
    value: string;
}

export const filterOptions: FilterOption[] = [
    { label: 'Show All', value: 'all' },
    { label: 'Show Active', value: 'active' },
    { label: 'Show Deactivated', value: 'deactivated' },
]


export type SUBMIT_BUTTON = 'Add Book' | 'Update Book';

export interface Book {
    id: string;
    title: string,
    author: string,
    category: CategoryType,
    isbn: string,
    createdAt: string,
    modifiedAt: string,
    active: boolean,
}

export const initialBook: Book = {
    id: "",
    title: "",
    author: "",
    category: 'fiction' as CategoryType,
    isbn: "",
    createdAt: "",
    modifiedAt: "",
    active: true,
};

export interface BookContextType {
    isNewBook: boolean;
    setIsNewBook: (value: boolean) => void;
    bookDetails: Book;
    setBookDetails: (bookDetails: (prev) => {
        id: string;
        title: string;
        author: string;
        category: CategoryType;
        isbn: string;
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
    filter: FilterOption,
    setFilter: React.Dispatch<React.SetStateAction<FilterOption>>;
    error: Error | undefined;
    setError: (err: Error) => void;
}


export type InputType = "number" | "text" | "select";

export interface ValidationConditions {
    min: number;
    max: number;
    errorMessage: string;
}

export interface InputField {
    name: string;
    value: string;
    label: string;
    type: InputType;
    placeholder?: string;
    required: boolean;
    validationConditions?: ValidationConditions;
    options?: CategoryOption[] | FilterOption[];
}

export interface SelectProps extends Omit<InputField, "label" | "placeholder" | "validationConditions" > {
    onChange?: (value: React.ChangeEvent<HTMLSelectElement>) => void,
    options: CategoryOption[] | FilterOption[];
}

export interface ValidationErrors {
    [fieldName: string]: string | null;
}