import {useEffect, useState} from "react";
import {getData} from "../utils/getData.ts";
import {Book} from "../types";

export function useGetBooks() {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const res = await getData({endpoint: 'books'});
                setBooks(res);
            } catch (error: unknown) {
                setLoading(false)
                setError(error instanceof Error ? error.message : "An unexpected error occurred");
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])
    return {books, error, loading};
}
