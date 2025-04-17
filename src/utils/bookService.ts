
import {BASE_URL, Book} from "../constants.ts";
import {createClient, PostgrestSingleResponse} from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export const getAllBooks = async (): Promise<Book[]> => {
    const { data, error }: PostgrestSingleResponse<Book[]>  = await supabase
        .from('books')
        .select('title, author, category, isbn, created_at, modified_at, active, id')
    if(error){
        throw new Error(`Failed to fetch data`);
    }
    return data;

}

export const getBookById = async (param: string | number) => {
    const {data, error}: PostgrestSingleResponse<Book[]> = await supabase
        .from('books')
        .select('title, author, category, isbn, created_at, modified_at, active, id')
        .eq('id', param)
        .single()

    if(error){
        console.log(error.message);
        return null;
    }
    return response.json();
}

export const addBook = async ({details} : {details: Book}) => {

    const { error } = await supabase
        .from('books')
        .insert([details])
        .select()
    if(error){
        return {message: `Failed to add book ${details.title}`};
    }
    return {message: `The book ${details.title} has been added successfully.`};
};

export const editBook = async ({id, details}:{id: string, details: Book}) => {
    const { data, error } = await supabase
        .from('books')
        .update(details)
        .eq('id', id)
    if(error){
        return {message: `Failed to edit book ${details.title}`};
    }
    console.log(`The book ${details.id} has been edited`);
    return data;
}

export const updateBookState = async ({id, isActivated}:{id: string, isActivated: boolean}) => {
    await fetch(`${BASE_URL}${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({active: isActivated}),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to update book');
        }
        return response.json();
    })
}

export const deleteBook = async (id: string) => {
    await fetch(`${BASE_URL}${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete book');
        }
        return response.json();
    })
    window.location.reload();
}