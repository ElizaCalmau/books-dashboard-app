import {TABLE_HEADERS} from "../constants.ts";
import {useGetBooks} from "../hooks/useGetBooks.ts";
import {Button} from "./Button.tsx";
import {deleteBook} from "../utils/deleteBook.ts";
import {ButtonLink} from "./ButtonLink.tsx";

export const Table = () => {
    const {books, error, loading} = useGetBooks();//TODO: add suspense while loading and create a fallback component, add tooltip for error

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
                   return ( <tr key={id}>
                        {Object.values(rest).map((item) => (
                            <td key={id}>
                                {item}
                            </td>
                        ))}
                        <td><ButtonLink text='Edit' id={id}/>
                        </td>
                        <td><Button text='Delete' onClick={() => deleteBook(id)}/></td>
                    </tr>)

                })}
                </tbody>
            </table>
        </>
    );
};
