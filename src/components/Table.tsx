import {TABLE_HEADERS} from "../constants.ts";
import {useGetBooks} from "../hooks/useGetBooks.ts";
import Button from "./Button.tsx";
import {Book} from "../types";
import {editBook} from "../utils/editBook.ts";
import {deleteBook} from "../utils/deleteBook.ts";

export const Table = () => {
    const {books, error, loading} = useGetBooks();

    return (
        <>
            <table>
                <thead>
                <tr>
                    {Object.values(TABLE_HEADERS).slice(0, -1).map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.length > 0 && books.map((book) => {
                    const {id, ...rest} = book;
                    console.log(id)
                   return ( <tr key={id}>
                        {Object.values(rest).map((item) => (
                            <td key={id}>
                                {item}
                            </td>
                        ))}
                        <td><Button text='Edit' onClick={() => editBook(id)}/>
                        </td>
                        <td><Button text='Delete' onClick={() => deleteBook(id)}/></td>
                    </tr>)

                })}
                </tbody>
            </table>
        </>
    );
};
