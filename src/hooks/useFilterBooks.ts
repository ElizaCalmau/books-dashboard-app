import {useBooksListContext} from "../context/BooksListContext.tsx";
import {useMemo} from "react";
import {useGetBooks} from "./useGetBooks.ts";

export const useFilterBooks = () => {
    const {filter, booksList} = useBooksListContext();

    const filteredBooks = useMemo(() => {
        if(filter.value === 'all') {
            return booksList;
        } else if(filter.value === 'active') {
            return booksList.filter(book => book.active)
        } else {
            return booksList.filter(book => !book.active);
        }
    }, [filter, booksList]);

    useGetBooks()

    return {filteredBooks};
}
