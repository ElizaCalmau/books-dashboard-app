export const AboutPage = () => {
    return (
        <>
            <header>
                <h1>Books Dashboard Application</h1>
                <p>Use the app to keep track of the books you've read 📚</p>
            </header>

            <main>
                <section id="project-description">
                    <h2>About the Project</h2>
                    <p>This is a simple application to help users manage and track the books they have read. The Books Dashboard allows users to easily add, update, and delete books, and track important information such as the title, author, category, and status of the book.</p>
                </section>

                <section id="app-structure">
                    <h2>The app structure 🏗️:</h2>
                    <p>The application contains 2 pages:</p>
                    <ul>
                        <li><strong>Home Page 🏠</strong></li>
                        <li><strong>Add/Update page ➕</strong></li>
                    </ul>
                </section>

                <section id="home-page">
                    <h3>Home Page 🏠</h3>
                    <p>The <strong>Home Page</strong> represents a dashboard of books 📚. Each dashboard row has properties such as book's title 📖, author 🖋️, category 📂, ISBN 📑, Created 📅, Modified 🛠️, and Actions ⚙️.</p>
                    <p>The <strong>Actions</strong> column contains 3 buttons: <strong>Edit ✏️</strong>, <strong>Delete 🗑️</strong>, and <strong>Update state 🛡️</strong>. By clicking either the <strong>'Edit'</strong> button or the dashboard row itself, the user will be redirected to the <strong>Update page</strong> 🔄.</p>
                </section>

                <section id="add-update-page">
                    <h3>Add/Update Page ➕</h3>
                    <p><strong>The Add/Update Page</strong> represents a form that serves both to add a book to your list 📚 and edit an existing book ✏️.</p>
                    <p>If the user clicks on a <em>dashboard row</em> or <em>'Edit' button</em> 🖱️, they will be redirected to the <strong>Update book</strong> page where they can change any book property 🔧, which will be reflected in the form's input ✍️.</p>
                    <p>For example, the user can change the title 🏷️, the author's name ✒️, even the book's status 📊 by clicking <em>'Activate'/'Deactivate'</em> button. To save changes (besides book's status), it is necessary to click <em>'Update book'</em> button at the very bottom of the form 💾.</p>
                    <p>Notice that each input field has validation ✔️, so keep an eye on it 👀. If the validation is passed ✅ and everything's correct, the book will be updated 🔄, and the user will see a toast container with a success message 🎉. There's a <em>'Go Back'</em> button 🔙 underneath the form that redirects the user to the previous page ↩️.</p>
                </section>

                <section id="add-book-page">
                    <h3>Add Book Page ➕</h3>
                    <p>The <strong>Add Book</strong> page is similar to the <strong>Update Book</strong> page, with the only difference being that the inputs are empty 📝, allowing the user to fill them in. The purpose of this page is to let the user add a new book by completing the form with the necessary details ✍️.</p>
                    <p>If the validation is passed ✅ and everything's correct, the book will be added ➕ and the user will see a toast container with a success message 🎉.</p>
                </section>

                <section id="changes-completed">
                    <h3>After Changes 🔄</h3>
                    <p>After the user has completed all the changes 🔄, they can go back to <strong>Home Page 🏠</strong> by clicking either the <em>'Go Back'</em> button 🔙 or the <em>'Home'</em> button placed at the sidebar 🖱️, and see all the changes implemented to the book 📚, including the time when the book was created 🗓️ and modified 🛠️ (these fields are filled automatically).</p>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 Books Dashboard Application. All rights reserved.</p>
            </footer>
        </>
    );
};
