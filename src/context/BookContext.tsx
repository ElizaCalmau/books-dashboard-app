import { createContext, ReactNode, useContext, useState } from 'react';
import { Book, BookContextType, initialBook } from '../lib/constants.ts';

export const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [isNewBook, setIsNewBook] = useState<boolean>(false);
  const [bookDetails, setBookDetails] = useState<Book>(initialBook);

  return (
    <BookContext.Provider value={{ isNewBook, setIsNewBook, bookDetails, setBookDetails }}>
      {children}
    </BookContext.Provider>
  );
};
export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};
