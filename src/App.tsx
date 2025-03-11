
import {ButtonLink} from "./components/ButtonLink.tsx";
import { v4 as uuidv4 } from 'uuid';
import {Table} from "./components/Table/Table.tsx";
import {useBooksListContext} from "./context/BooksListContext.tsx";
import {filterOptions} from "./constants.ts";
import {Select} from "./components/Select.tsx";
import {handleFilterChange} from "./utils/handleFilterChange.ts";
import {useFilterBooks} from "./hooks/useFilterBooks.ts";

function App() {
    const { filter, setFilter } = useBooksListContext();
    const { filteredBooks } = useFilterBooks();

    const id = uuidv4();
    return (
        <>
            <Select options={filterOptions} name='filter' value={filter.value} onChange={(e) => handleFilterChange(e, setFilter)} type='select' required={true} />
            <Table books={filteredBooks}/>
            <ButtonLink text='Add Book' id={id}/>
        </>
  )
}

export default App
