import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import {EditPage} from "./components/EditPage.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route path='/' element={<App />}/>

                <Route path=':id' element={<EditPage />} />
                <Route path="*" element={<h1> Sorry, page Not found</h1>}/>
            </Routes>

        </StrictMode>
    </BrowserRouter>,

)
