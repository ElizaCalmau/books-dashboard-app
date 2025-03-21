import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import {EditPage} from "./components/EditPage.tsx";
import {BookProvider} from "./context/BookContext.tsx";
import {BooksProvider} from "./context/BooksContext.tsx";
import {Sidebar} from "./components/Sidebar/Sidebar.tsx";




createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
                <BookProvider>
                    <BooksProvider>
                            <Sidebar />
                            <Routes>
                                <Route path='/books-dashboard' element={<App />}/>
                                <Route path='/update-book/:id' element={<EditPage />} />
                                <Route path="*" element={<h1> Sorry, page Not found</h1>}/>
                            </Routes>
                    </BooksProvider>
                </BookProvider>
        </StrictMode>
    </BrowserRouter>,

)
