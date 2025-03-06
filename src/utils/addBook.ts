import {Book} from "../types";

export const addBook = async ({data} : {data: Book}) => {
    await fetch(`http://localhost:3000/books/`, {
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
        .then(newBook => {
            console.log('New Book:', newBook);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}