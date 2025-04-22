import {useMemo} from "react";
import {Book, FilterOption} from "../lib/constants.ts";

export const useFilterBooks = ({filter, booksList}: {filter: FilterOption, booksList: Book[]}) => {
    return useMemo(() => {
        if(booksList.length === 0) return;
        return booksList.filter((book: Book) => {
            if(filter.value === 'active'){
                return book.active;
            } else if(filter.value === 'deactivated'){
                return !book.active;
            } else {
                return book;
            }
            }
        )
    }, [filter, booksList]);
}
