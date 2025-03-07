import {useEffect, useState} from "react";
import {Book} from "../types";
import {getBookDetails} from "../utils/getBookDetails.ts";

export const useGetBookDetails = (id: string) => {
    const [bookDetails, setBookDetails] = useState<Book>(
        {
            title: '',
            author: '',
            id: '',
            category: 'fiction',
            isbn: 0,
            createdAt: '',
            modifiedAt: '',
            active: true,
        }
    );
    const [isNewBook, setIsNewBook] = useState<boolean>(false);
    useEffect(() => {

            const fetchData = async () => {
                try {
                    const data = await getBookDetails({ endpoint: 'books', param: id });

                    if (!data || Object.keys(data).length === 0) {
                        throw new Error('Book not found');
                    }
                    setBookDetails(data);
                    setIsNewBook(false);
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
    return {bookDetails, setBookDetails, isNewBook, setIsNewBook};
};
