import {editBook} from "../utils/editBook.ts";
import {useParams} from "react-router";
import {InputLabel} from "./InputLabel.tsx";
import {useGetBookDetails} from "../hooks/useGetBookDetails.ts";



export const EditPage = () => {
    const {id} = useParams();
    const {bookDetails, setBookDetails} = useGetBookDetails(id || '');

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        setBookDetails({...bookDetails, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e ) => {
        e.preventDefault();
        if(id){
            editBook({id, data: bookDetails})
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <InputLabel onChange={handleChange} name="title" label="Title:" placeholder={bookDetails.title} value={bookDetails.title} type='string'/>
                <InputLabel onChange={handleChange} name="author" label="Author:" placeholder={bookDetails.author} value={bookDetails.author} type='string'/>
                <InputLabel onChange={handleChange} name="category" label="Category:" placeholder={bookDetails.category} value={bookDetails.category} type='string'/>
                <InputLabel onChange={handleChange} name="isbn" label="ISBN:" placeholder={bookDetails.isbn} value={bookDetails.isbn} type='number'/>
                <button type="submit">Edit</button>
            </form>
        </>
    );
};
