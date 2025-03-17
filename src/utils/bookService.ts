
import {BASE_URL, Book} from "../constants.ts";

export const getAllBooks = async () => {
    const response = await fetch(BASE_URL);
    if(!response.ok){
        throw new Error(`Failed to fetch data`);
    }
    return response.json();


}

export const getBookById = async (param: string | number) => {
    const response = await fetch(`${BASE_URL}${param}`);
    if(!response.ok){
        console.log(`Failed to fetch data from ${BASE_URL}${param}`);
        return null;
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

export const updateBookState = async ({id, isActivated}:{id: string, isActivated: boolean}) => {
    console.log(id, isActivated);
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