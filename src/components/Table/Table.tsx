import {Book, TABLE_HEADERS} from "../../constants.ts";
import {Button} from "../Button.tsx";
import {deleteBook} from "../../utils/bookService.ts";
import {ButtonLink} from "../ButtonLink.tsx";
import styles from './Table.module.scss'
import {Loading} from "../Loading.tsx";
import { v4 as uuidv4 } from 'uuid';

export const Table = ({books} : {books: Book[]}) => {
    if(books.length > 0){
        return (
            <>

                <table className={styles.table}>
                    <thead className={styles.head}>
                    <tr>
                        {Object.values(TABLE_HEADERS).slice(0, -1).map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.length > 0 && books.map((book: Book) => {
                        const {id, ...rest} = book;
                        return ( <tr key={id}>
                            {Object.values(rest).map((item) => {
                                const itemId = uuidv4()
                                    return(<td key={itemId}>
                                            {item}
                                        </td>)

                            })}
                            <td>
                                <ButtonLink text='Edit' id={id}/>
                            </td>
                            <td>
                                <Button text='Delete' onClick={() => deleteBook(id)}/>
                            </td>
                        </tr>)

                    })}
                    </tbody>
                </table>
            </>
        );
    }
    return <Loading/>

};

