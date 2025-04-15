import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import {EditPage} from "./components/EditPage/EditPage.tsx";
import {BookProvider} from "./context/BookContext.tsx";
import {BooksProvider} from "./context/BooksContext.tsx";
import {Sidebar} from "./components/Sidebar/Sidebar.tsx";
import {Burger} from "./components/Burger/Burger.tsx";
import {AboutPage} from "./components/AboutPage/AboutPage.tsx";
import {ContactsPage} from "./components/ContactsPage/ContactsPage.tsx";




createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
                <BookProvider>
                    <BooksProvider>
                            <Sidebar />
                            <Burger/>
                            <Routes>
                                <Route path='/' element={<App />}/>
                                <Route path='/update-book/:id' element={<EditPage />} />
                                <Route path='/about' element={<AboutPage />} />
                                <Route path='/contacts' element={<ContactsPage />} />
                                <Route path="*" element={<h1> Sorry, page Not found</h1>}/>
                            </Routes>
                    </BooksProvider>
                </BookProvider>
        </StrictMode>
    </BrowserRouter>,

)
