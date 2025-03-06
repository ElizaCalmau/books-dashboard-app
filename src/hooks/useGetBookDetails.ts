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
            createdAt: '',
            modifiedAt: '',
            active: true,
            isbn: 0}
    );

    useEffect(() => {
            const fetchData = async () => {
                const data = await getBookDetails({endpoint: 'books', param: id});
                console.log(data)
                setBookDetails(data);
            };
            fetchData();


    }, [id]);
    return {bookDetails, setBookDetails};
};
