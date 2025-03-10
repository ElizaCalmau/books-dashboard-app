
import {BASE_URL, Book} from "../constants.ts";

export const getAllBooks = async () => {
    console.log("loading getAllBooks");
    const controller = new AbortController();
    const response = await fetch(BASE_URL, { signal: controller.signal });
    if(!response.ok){
        throw new Error(`Failed to fetch data`);
    }
    return response.json();


}

export const getBookById = async (param: string | number) => {
    const response = await fetch(`${BASE_URL}${param}`);
    if(!response.ok){
        throw new Error(`Failed to fetch data from ${BASE_URL}${param}`);
    }
    return response.json();
}

export const addBook = async ({data} : {data: Book}) => {
    await fetch(BASE_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to update book');
        }
        return response.json();
    })
};

export const editBook = async ({id, data}:{id: string, data: Book}) => {
    console.log(id, data);
    await fetch(`${BASE_URL}${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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