import './App.css';
import {ButtonLink} from "./components/ButtonLink.tsx";
import { v4 as uuidv4 } from 'uuid';
import {Table} from "./components/Table/Table.tsx";
import {Book, FilterOption, filterOptions} from "./constants.ts";
import {Select} from "./components/Select.tsx";
import {handleFilterChange} from "./utils/handleFilterChange.ts";
import {useFilterBooks} from "./hooks/useFilterBooks.ts";
import {useState} from "react";
import {useGetBooks} from "./hooks/useGetBooks.ts";

function App() {
    const booksList: Book[] = useGetBooks();
    const [filter, setFilter] = useState<FilterOption>(filterOptions[0]);
    const filteredBooks = useFilterBooks({filter, booksList}) || [];
    const id = uuidv4();
    return (
        <div className="mainWrapper">
            <Select options={filterOptions} name='filter' value={filter.value} onChange={(e) => handleFilterChange(e, setFilter)} type='select' required={true} />
            <Table books={filteredBooks}/>
            <ButtonLink text='Add Book' id={id}/>
        </>
        </div>
  )
}

export default App;
