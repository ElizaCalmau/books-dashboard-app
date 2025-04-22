import React from "react";

export enum TABLE_HEADERS {
    TITLE = "Title",
    AUTHOR = "Author",
    CATEGORY = "Category",
    ISBN = "ISBN",
    CREATED_AT = "Created",
    MODIFIED_AT = "Modified",
    ACTIVE = "Active",
}

export type CategoryType = 'fiction' | 'finance' | 'science' | 'thriller' | 'fantasy';

export interface CategoryOption {
    label: string;
    value: CategoryType;
}

export const categoryOptions: CategoryOption[] = [
    {label: 'Fiction', value: 'fiction'},
    {label: 'Finance', value: 'finance'},
    {label: 'Science', value: 'science'},
    {label: 'Thriller', value: 'thriller'},
    {label: 'Fantasy', value: 'fantasy'}
];

export interface FilterOption {
    label: string;
    value: string;
}

export const filterOptions: FilterOption[] = [
    {label: 'All', value: 'all'},
    {label: 'Active', value: 'active'},
    {label: 'Deactivated', value: 'deactivated'},
]


export type SUBMIT_BUTTON = 'Add Book' | 'Update Book';

export interface Book {
    id: string;
    title: string,
    author: string,
    category: CategoryType,
    isbn: number,
    created_at: string | undefined,
    modified_at: string | undefined,
    active: boolean,
}

export const initialBook: Book = {
    id: "",
    title: "",
    author: "",
    category: 'fiction' as CategoryType,
    isbn: 0,
    created_at: undefined,
    modified_at: undefined,
    active: true,
};

export interface BookContextType {
    isNewBook: boolean;
    setIsNewBook: (value: boolean) => void;
    bookDetails: Book;
    setBookDetails: React.Dispatch<React.SetStateAction<Book>>;
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

export interface SelectProps extends Pick<InputField, "value"> {
    onClick: (value: CategoryOption | FilterOption) => void,
    options: CategoryOption[] | FilterOption[],
}

export interface ValidationErrors {
    [fieldName: string]: string | null;
}

export interface SectionProps {
    title: string;
    subtitle?: string;
    paragraphs?: string[];
    list?: {
        name: string;
        description?: string;
        url?: string;
    }[];
}

export const aboutSections: SectionProps[] = [
    {
        title: 'About the Project',
        paragraphs: [
            'This is a simple application to help users manage and track the books they have read. The Books Dashboard allows users to easily add, update, and delete books, and track important information such as the title, author, category, and status of the book.'
        ]
    },
    {
        title: 'Home Page',
        subtitle: 'The home page represents a dashboard',
        paragraphs: [
            'The Home Page represents a dashboard of books. Each dashboard row has properties such as book\'s title, author, category, ISBN, Created, Modified, and Actions.',
            'The Actions column contains 3 buttons: Edit️, Delete️, and Update state️.',
            'By clicking either the button or the dashboard row itself, the user will be redirected to the Update page.'
        ]
    },
    {
        title: 'Update Book Page',
        subtitle: 'The Update Book Page represents a form that serves to edit an existing book.',
        paragraphs: [
            'If the user clicks on a dashboard row or \'Edit\' button, they will be redirected to the Update book page where they can change any book property, which will be reflected in the form\'s input.',
            'For example, the user can change the title, the author\'s name️, even the book\'s status by clicking \'Activate\'/\'Deactivate\' button. To save changes (including book\'s status), it is necessary to click \'Update book\' button at the very bottom of the form.',
            'Notice that each input field has validation️, so keep an eye on it. If the validation is passed and everything\'s correct, the book will be updated, and the user will see a toast container with a success message. There\'s a \'Go Back\' button underneath the form that redirects the user to the previous page.'
        ]
    },
    {
        title: 'Add Book Page',
        subtitle: 'The Add Book Page represents a form that serves to add a book to your list.',
        paragraphs: [
            'The Add Book page is similar to the Update Book page, with the only difference being that the inputs are empty, allowing the user to fill them in. The purpose of this page is to let the user add a new book by completing the form with the necessary details.',
            'If the validation is passed and everything\'s correct, the book will be added and the user will see a toast container with a success message.',
        ]
    },
    {
        title: 'After Changes',
        subtitle: 'After Changes being submitted',
        paragraphs: [
            'After the user has completed all the changes, they can go back to Home Page by clicking either the \'Go Back\' button or the \'Home\' button placed at the sidebar, and see all the changes implemented to the book, including the time when the book was created️ and modified (these fields are filled automatically).',
        ]
    },
    {
        title: 'Technologies used',
        list: [
            { name: 'React', description: 'A JavaScript library for building user interfaces.' },
            { name: 'React Router DOM', description: 'A set of bindings for using React Router in web applications.' },
            { name: 'UUID', description: 'A library to generate unique identifiers.' },
            { name: 'classnames', description: 'A utility for conditionally joining class names together.' },
            { name: 'JSON Server', description: 'A simple REST API for testing and prototyping.' },
            { name: 'SCSS', description: 'A CSS preprocessor used for styling the application.' },
            { name: 'Toast Notifications', description: 'A component for showing success messages after changes.' },
            { name: 'Lucide', description: 'A set of high-quality, customizable icons used in the app.' }
        ]
    },
    {
        title: 'Design',
        subtitle: 'The design of this application is fully responsive',
        paragraphs: [
            'It adapts to different screen sizes, ensuring a smooth user experience on both desktop and mobile devices.'
        ]
    }
]

export const contactsSection: SectionProps[] = [
    {
        title: 'Experience',
        paragraphs: [
            'With 1.5 years of experience under my belt, I\'ve become quite skilled in crafting user-friendly interfaces using React and TypeScript. My latest project is a dashboard books app, built with React and TS, showcasing my love for organized information and clean, maintainable code.',
            'I\'m also proficient in developing scalable UI architectures, managing complex state with Redux, and seamlessly integrating with RESTful APIs. I\'m always eager to explore new technologies and approaches to create the best possible user experience.'
        ]
    },
    {
        title: 'Skills',
        list: [
            { name: 'HTML5' },
            { name: 'CSS3' },
            { name: 'Tailwind CSS' },
            { name: 'SASS' },
            { name: 'JavaScript' },
            { name: 'TypeScript' },
            { name: 'React' },
            { name: 'Redux' },
            { name: 'Next.js' },
            { name: 'Node.js' },
            { name: 'MongoDB' },
            { name: 'MySQL' },
            { name: 'Sanity CMS' }
        ]
    },
    {
        title: 'Other projects',
        subtitle: 'Startup dashboard CMS, Next.js',
    },
    {
        title: 'Contacts',
        subtitle: 'Feel free to contact me',
        list: [
            { name: "Linkedin", url: 'https://www.linkedin.com/in/yelyzaveta-lysenko-ab452b287/' },
            { name: "GitHub", url: 'https://github.com/ElizaCalmau?tab=repositories' },
            { name: "Email", url: 'elizabethcalmau@gmail.com' }
        ]
    }
]
