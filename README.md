# Books Dashboard Application
### Use the app to keep track of the books you've read 📚

> ## How to run the app on your local machine? 💻
> Run the following commands in terminal:
> 1. npm install 📦
> 2. npm run dev 🚀

## Technologies used:
- **React**: A JavaScript library for building user interfaces.
- **Supabase:** A PostgreSQL database hosting, Backend-as-a-Service platform.
- **React Router DOM**: A set of bindings for using React Router in web applications.
- **UUID**: A library to generate unique identifiers.
- **classnames**: A utility for conditionally joining class names together.
- **JSON Server**: A simple REST API for testing and prototyping.
- **SCSS**: A CSS preprocessor used for styling the application.
- **Toast Notifications**: A component for showing success messages after changes.
- **Lucide**: A set of high-quality, customizable icons used in the app.


## The app structure 🏗️:

The application contains 2 pages:
* Home Page 🏠
* Add/Update page ➕

### Home Page 🏠
The **Home Page** represents a dashboard of books 📚. 

Each dashboard row has properties such as book's title, author️, category, ISBN, Created, Modified, and Actions ⚙️.

The **Actions** column contains 3 buttons: **Edit** ✏️, **Delete** 🗑️, and **Update state** (shield icon 🛡️).
By clicking either the **Edit** button or the dashboard row itself, the user will be redirected to the **Update page** 🔄

### Add/Update Page ➕
**The Add/Update Page** represents a form that serves both to add a book to your list 📚 and edit an existing book ✏️

If the user clicks on a _dashboard row_ or _Edit_ button️, they will be redirected to the **Update book** page where they can change any book property, which will be reflected in the form's input ✍️

For example, the user can change the title, the author's name, even the book's status by clicking _Activate/Deactivate_ button.  
To save changes (including book's status), it is necessary to click _Update book_ button at the very bottom of the form 📋

Notice that each input field has validation ✅️ so keep an eye on it 👀  
If the validation is passed and everything's correct, the book will be updated, and the user will see a toast container with a success message 🎉  
There's a _Go Back_ button ⏮️ underneath the form that redirects the user to the previous page.

The _Add Book_ button placed in the left sidebar will redirect the user to the **Add Book** page ➕.  
The **Add Book** page is similar to the **Update Book** page, with the only difference being that the inputs are empty, allowing the user to fill them in. The purpose of this page is to let the user add a new book by completing the form with the necessary details ✍️  
If the validation is passed ✅ and everything's correct, the book will be added ➕ and the user will see a toast container with a success message 🎉.

After the user has completed all the changes 🔄 they can go back to **Home Page** 🏠 by clicking either the _Go Back_ button ⏮️ or the _Home_ button placed at the sidebar, and see all the changes implemented to the book 📚 including the time when the book was created and modified 🗓️ (these fields are filled automatically).

### About Page 
**The About Page** provides comprehensive information regarding the project's structure and the technologies utilized.

### Contacts Page
**The Contacts Page** The Contacts Page offers details about the project's author and includes links for contacting them.

## Design

The design of this application is fully responsive 📱💻

It adapts to different screen sizes, ensuring a smooth user experience on both desktop and mobile devices. 

