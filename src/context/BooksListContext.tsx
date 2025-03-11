import {createContext, ReactNode, useContext, useState} from "react";
import {Book, BooksListType, FilterOption, filterOptions,} from "../constants.ts";

export const BooksListContext = createContext<BooksListType | undefined>(undefined);

export const BooksListProvider = ({ children }: { children: ReactNode }) => {

    const [booksList, setBooksList] = useState<Book[] | []>([])
    const [error, setError] = useState<Error | undefined>(undefined);
    const [filter, setFilter] = useState<FilterOption>(filterOptions[0]);

    return (
        <BooksListContext.Provider value={{ booksList, setBooksList, error, setError, filter, setFilter }}>
            {children}
        </BooksListContext.Provider>
);
};
export const useBooksListContext = () => {
    const context = useContext(BooksListContext);
    if (!context) {
        throw new Error("useBookContext must be used within a BookProvider");
    }
    return context;
};