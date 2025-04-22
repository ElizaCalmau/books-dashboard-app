import {useEffect} from "react";

import {getBookById} from "../utils/bookService.ts";
import {useBookContext} from "../context/BookContext.tsx";
import {Book, initialBook} from "../constants.ts";

export const useGetBookDetails = (id: string) => {
    const {setIsNewBook, setBookDetails} = useBookContext()
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const data: Book | undefined = await getBookById(id);
                    setBookDetails(data);
                    setIsNewBook(false);
                    if (!data || Object.keys(data).length === 0) {
                        throw new Error('Book not found');
                    }
                } catch (error: unknown) {
                    if(typeof error === 'string') {
                        setError({message: error, name: 'Error'});
                    } if( error instanceof Error ) {
                        setError(error)
                    };
                    setIsNewBook(true);
                    setBookDetails((prev) => {
                        return{
                            ...prev,
                           ...initialBook
                        }});
                }
            };
            fetchData();
    }, [id]);
};
