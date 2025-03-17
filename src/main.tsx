import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import {EditPage} from "./components/EditPage.tsx";
import {BookProvider} from "./context/BookContext.tsx";
import {Header} from "./components/Header/Header.tsx";
import {BooksProvider} from "./context/BooksContext.tsx";




createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
                <BookProvider>
                    <BooksProvider>
                            <Header />
                            <Routes>
                                <Route path='/' element={<App />}/>
                                <Route path=':id' element={<EditPage />} />
                                <Route path="*" element={<h1> Sorry, page Not found</h1>}/>
                            </Routes>
                    </BooksProvider>
                </BookProvider>
        </StrictMode>
    </BrowserRouter>,

)
