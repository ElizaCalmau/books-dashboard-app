import {Category} from "./types";

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