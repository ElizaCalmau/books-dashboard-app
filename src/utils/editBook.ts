export const editBook = async (id: string) => {
    await fetch(`http://localhost:3000/books/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: 'hello'}),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to update book');
        }
        return response.json();
    })
        .then(updatedBook => {
            console.log('Updated Book:', updatedBook);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}//TODO: page reload after edit