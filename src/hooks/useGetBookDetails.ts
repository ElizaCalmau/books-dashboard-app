import {useEffect} from "react";

import {getBookById} from "../utils/bookService.ts";
import {useBookContext} from "../context/BookContext.tsx";
import {initialBook} from "../constants.ts";

export const useGetBookDetails = (id: string) => {
    const {setIsNewBook, setBookDetails} = useBookContext()
    useEffect(() => {
            const fetchData = async () => {
                    const data = await getBookById(id);
                    if (!data) {
                        setIsNewBook(true);
                        setBookDetails(prev => ({
                            ...prev,
                            ...initialBook
                        }));
                        throw new Error('Book not found');
                    }
                    setBookDetails(data);
                    setIsNewBook(false);
            };
            fetchData();
    }, [id]);
};
