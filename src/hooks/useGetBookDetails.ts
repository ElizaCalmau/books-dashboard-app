import {useEffect} from "react";

import {getBookById} from "../utils/bookService.ts";
import {useBookContext} from "../context/BookContext.tsx";
import {initialBook} from "../constants.ts";

export const useGetBookDetails = (id: string) => {
    const {setIsNewBook, setBookDetails} = useBookContext()
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await getBookById(id);
                    setBookDetails(data);
                    setIsNewBook(false);
                    if (!data || Object.keys(data).length === 0) {
                        throw new Error('Book not found');
                    }
                } catch (error) {
                    console.log(error);
                    setIsNewBook(true);
                    setBookDetails((prev) => (
                        {
                            ...prev,
                            initialBook
                        }));
                }
            };
            fetchData();
    }, [id]);
};
