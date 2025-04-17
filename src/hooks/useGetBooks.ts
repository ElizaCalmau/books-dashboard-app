import {useCallback, useEffect, useMemo} from "react";
import {getAllBooks} from "../utils/bookService.ts";
import {useBooksContext} from "../context/BooksContext.tsx";
import {Book} from "../constants.ts";

export function useGetBooks() {
    const {booksList, setBooksList} = useBooksContext()

    const fetchData = useCallback(async () => {//function memoization prevents from calling on each render, only once if dependency array is empty and on-demand if there's some changes in deps array
        try {
            const res: Book[] | undefined = await getAllBooks();
            setBooksList(res || []);
        } catch (error: unknown) {
            throw new Error('error getBooks');
        }
    }, [])

    useEffect(() => {
        fetchData();
    }, []);

    return useMemo(() => booksList, [booksList])
}
