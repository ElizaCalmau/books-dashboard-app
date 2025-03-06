export const deleteBook = async (id: string) => {
    await fetch(`http://localhost:3000/books/${id}`, {
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
        .then(updatedBook => {
            console.log('Deleted Book:', updatedBook);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
        });//TODO: tooltip with message 'you've deleted a book title', page reload after delete
}