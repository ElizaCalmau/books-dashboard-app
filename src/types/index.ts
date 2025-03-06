export interface Book {
    id: string;
    title: string,
    author: string,
    category: Category,
    isbn: number,
    createdAt: string,
    modifiedAt: string,
    active: boolean,
}

export type Category = 'fiction' | 'finance' | 'science' | 'thriller';
