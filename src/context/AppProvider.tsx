import {SessionProvider} from "./SessionContext.tsx";
import {BooksProvider} from "./BooksContext.tsx";
import {BookProvider} from "./BookContext.tsx";
import {UserProvider} from "./UserContext.tsx";
import {ReactNode} from "react";

export const AppProvider = ({children}: {children: ReactNode}) => {
    return (
        <>
            <SessionProvider>
                <UserProvider>
                    <BooksProvider>
                        <BookProvider>
                            {children}
                        </BookProvider>
                    </BooksProvider>
                </UserProvider>
            </SessionProvider>
        </>
    );
};
