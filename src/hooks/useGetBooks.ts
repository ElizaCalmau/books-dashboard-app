import {useEffect} from "react";
import {getAllBooks} from "../utils/bookService.ts";
import {useBooksListContext} from "../context/BooksListContext.tsx";

export function useGetBooks() {
    const{setBooksList, setError} = useBooksListContext()
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                console.log('loading..., str 12')
                const res = await getAllBooks();
                setBooksList(res);
            } catch (error: unknown) {
                if (typeof error === 'string') {
                    setError({message: error, name: 'Error'});
                }
                if (error instanceof Error) {
                    setError(error)
                }
            }
        }
        fetchData();
        return () => controller.abort();
    },
        [])
}
