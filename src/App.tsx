import {Table} from "./components/Table.tsx";
import {ButtonLink} from "./components/ButtonLink.tsx";
import { v4 as uuidv4 } from 'uuid';
function App() {
    const id = uuidv4();
  return (
    <>
      <Table/>
        <ButtonLink text='Add Book' id={id}/>
    </>
  )
}

export default App
