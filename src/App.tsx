import './App.css';
import { Table } from './components/Table/Table.tsx';
import { Book, FilterOption, filterOptions } from './lib/constants.ts';
import { Select } from './components/Select/Select.tsx';
import { handleFilterChange } from './utils/handleFilterChange.ts';
import { useFilterBooks } from './hooks/useFilterBooks.ts';
import { useState } from 'react';
import { useGetBooks } from './hooks/useGetBooks.ts';
import { Header } from './components/Header/Header.tsx';

function App() {
  const booksList: Book[] = useGetBooks();
  const [filter, setFilter] = useState<FilterOption>(filterOptions[0]);
  const filteredBooks = useFilterBooks({ filter, booksList }) || [];
  return (
    <div className="mainWrapper">
      <Header />
      <div className="tableWrapper">
        <Select
          options={filterOptions}
          value={filter.label}
          onClick={option => handleFilterChange(option, setFilter)}
        />
        <Table books={filteredBooks} />
      </div>
    </div>
  );
}

export default App;
