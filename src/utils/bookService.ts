
import {BASE_URL, Book} from "../constants.ts";
import {createClient, PostgrestSingleResponse} from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const getAllBooks = async (): Promise<Book[] | undefined> => {
    try{
    const { data, error }: PostgrestSingleResponse<Book[]>  = await supabase
        .from('books')
        .select('title, author, category, isbn, created_at, modified_at, active, id')
    if(error){
        throw new Error(`Failed to fetch data`);
    }
    return data;
    } catch (error) {
        console.error(error);
    }

}

export const getBookById = async (param: string | number) => {
    try{
        const {data, error}: PostgrestSingleResponse<Book[]> = await supabase
            .from('books')
            .select('title, author, category, isbn, created_at, modified_at, active, id')
            .eq('id', param)
            .single()
        if(error){
            throw new Error(`Failed to fetch book with id ${param}`);
        }
        return data;
    } catch(error){
        console.log(error);
    }
}

export const addBook = async ({details} : {details: Book}) => {
    try{
    const { error } = await supabase
        .from('books')
        .insert([details])
        .select()
    if(error){
       throw new Error (`Failed to add book ${details.title}`);
    }

    return (`The book ${details.title} has been added successfully.`);
    } catch(error){
        console.log(error);
        return error
    }
};

export const editBook = async ({id, details}:{id: string, details: Book}) => {
    try{
    const { error } = await supabase
        .from('books')
        .update(details)
        .eq('id', id)
    if(error){
        throw new Error (`Failed to edit book ${details.title}.`);
    }
    return (`The book ${details.title} has been updated successfully.`);

    } catch (error){
        console.log(error)
        return (error)
    }
}

export const updateBookState = async ({id, isActivated}:{id: string, isActivated: boolean}) => {
    try{
        const {error} = await supabase
            .from('books')
            .update({active: isActivated})
            .eq('id', id)
        if(error){
            throw new Error(`Failed to update book status`);
        }
        return (`The book status has been updated successfully.`);
    } catch (error){
        console.log(error);
        throw error;
    }
}

export const deleteBook = async (id: string) => {
    try{
        const { error } = await supabase
            .from('books')
            .delete()
            .eq('id', id)

        if(error){
            throw new Error(`Failed to delete book, ${error.message}`);
        }
        window.location.reload();
        return (`The book has been deleted successfully.`);
    } catch (error) {
        console.log(error)
        return error;
    }
}