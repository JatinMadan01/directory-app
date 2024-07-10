Directory App
Overview
The Directory App is a simple web application built using HTML, CSS, and JavaScript. It allows users to manage a list of people, with functionalities to add new entries, validate inputs, and retrieve saved information. The application features two tabs:

Add New Person: For adding new entries to the directory.
Retrieve Information: For viewing the list of saved entries.
Features
Add New Person Tab:

Dynamic table creation with fields for Name, Date of Birth, Aadhar Number, Mobile Number, and Age.
Age is automatically calculated from the Date of Birth.
Add new rows, save entries to local storage, or delete unsaved rows.
Retrieve Information Tab:

Display all saved entries from local storage.
Project Structure
The project is organized as follows:
directory-app/
│
├── public/
│   └── index.html
│
├── src/
   ├── styles.css
   └── script.js
Files Description
index.html: The main HTML file that includes the structure of the interface with two tabs.
styles.css: Contains styling rules for the application.
script.js: Implements the JavaScript functionality for adding, saving, and deleting entries.
Getting Started
Prerequisites
A web browser (e.g., Chrome, Firefox, Edge).

Usage
Add New Person Tab
Add a New Person:

Click the Add New Row button to add a new row to the table.
Fill in the fields: Name, Date of Birth, Aadhar Number, and Mobile Number.
The Age field will automatically be calculated based on the Date of Birth.
Save or Delete Row:

Save: Click the "Save" button to store the information in local storage. All fields must be filled, and validation rules must be met.
Delete: Click the "Delete" button to remove the row from the table. If the row has been saved, it will also be removed from local storage.
Retrieve Information Tab
View Saved Entries:
This tab displays all the entries stored in local storage.
Validation Rules
Aadhar Number: Must be exactly 12 digits.
Mobile Number: Must be exactly 10 digits.
Date of Birth: Age is calculated automatically and should be based on the current date.

Deployment
To deploy the application, you can use services like GitHub Pages, Netlify, or Vercel. Follow their respective documentation for deployment instructions.

Contributing
Feel free to open issues or submit pull requests if you have improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
   
