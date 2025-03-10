import {createContext, ReactNode, useContext, useState} from "react";
import {Book, BookContextType, initialBook} from "../constants.ts";

export const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
    const [isNewBook, setIsNewBook] = useState<boolean>(false);
    const [bookDetails, setBookDetails] = useState<Book>(initialBook)
    const [error, setError] = useState<Error | undefined>(undefined);
    return (
        <BookContext.Provider value={{ isNewBook, setIsNewBook, bookDetails, setBookDetails, error, setError }}>
            {children}
        </BookContext.Provider>
    );
};
export const useBookContext = () => {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error("useBookContext must be used within a BookProvider");
    }
    return context;
};