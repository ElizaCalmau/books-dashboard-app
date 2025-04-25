import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import { EditPage } from './pages/EditPage/EditPage.tsx';
import { BookProvider } from './context/BookContext.tsx';
import { BooksProvider } from './context/BooksContext.tsx';
import { Sidebar } from './components/Sidebar/Sidebar.tsx';
import { Burger } from './components/Burger/Burger.tsx';
import { AboutPage } from './pages/AboutPage/AboutPage.tsx';
import { ContactsPage } from './pages/ContactsPage/ContactsPage.tsx';
import { AuthPage } from './pages/AuthPage/AuthPage.tsx';
import { SessionProvider } from './context/SessionContext.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <SessionProvider>
        <BookProvider>
          <BooksProvider>
            <Sidebar />
            <Burger />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/update-book/:id" element={<EditPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="*" element={<h1> Sorry, page Not found</h1>} />
            </Routes>
          </BooksProvider>
        </BookProvider>
      </SessionProvider>
    </StrictMode>
  </BrowserRouter>
);
