import './App.css';
import {Table} from "./components/Table/Table.tsx";
import {Book, FilterOption, filterOptions} from "./constants.ts";
import {Select} from "./components/Select/Select.tsx";
import {handleFilterChange} from "./utils/handleFilterChange.ts";
import {useFilterBooks} from "./hooks/useFilterBooks.ts";
import {useState} from "react";
import {useGetBooks} from "./hooks/useGetBooks.ts";

function App() {
    const booksList: Book[] = useGetBooks();
    const [filter, setFilter] = useState<FilterOption>(filterOptions[0]);
    const filteredBooks = useFilterBooks({filter, booksList}) || [];
    return (
        <div className="mainWrapper">
            <Select options={filterOptions} name='filter' value={filter.value} onChange={(e) => handleFilterChange(e, setFilter)} type='select' required={true} />
            <Table books={filteredBooks}/>
        </div>
  )
}

export default App;
