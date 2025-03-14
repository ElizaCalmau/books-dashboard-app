import {Book} from "../constants.ts";
import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";


type BooksContextType = {
    booksList: Book[];
    setBooksList: Dispatch<SetStateAction<Book[]>>;
}

export const BooksContext = createContext<BooksContextType | undefined>(undefined);
export const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [booksList, setBooksList] = useState<Book[]>([]);

    return (
        <BooksContext.Provider value={{ booksList, setBooksList }}>
            {children}
        </BooksContext.Provider>
    );
};

export const useBooksContext = () => {
    const context = useContext(BooksContext);
    if (!context) {
        throw new Error("useBooksContext must be used within a BooksProvider");
    }
    return context;
};