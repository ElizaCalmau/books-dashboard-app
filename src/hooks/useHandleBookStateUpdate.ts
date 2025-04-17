import {useBooksContext} from "../context/BooksContext.tsx";
import {Book} from "../constants.ts";
import {getAllBooks, updateBookState} from "../utils/bookService.ts";

export const useHandleBookStateUpdate = () => {
    const {setBooksList} = useBooksContext();
    const handleBookStateUpdate = async({id, book, notify} :{id: string, book: Book, notify: (message: string) => void,}) => {
        try{
            const res = await updateBookState({id, isActivated: !book.active});
            notify(res);
            const freshBooks = await getAllBooks();
            setBooksList(freshBooks || []);
        }catch(err: any){
            notify(err.message);
        }
    }
    return handleBookStateUpdate;
}