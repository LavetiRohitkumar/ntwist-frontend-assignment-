# ntwist-frontend-assignment

## Overview

This project is a multi-page mini web application built with **HTML**, **CSS**, and **Vanilla JavaScript** as part of the NTWIST Software Frontend Assessment. It includes three pages demonstrating form handling, DOM manipulation, styling, and layout techniques without the use of external libraries or frameworks.

---

## Pages Implemented

### 1. `index.html` – Responsive Form with Validation

- Contains fields: **Name**, **Email**, **Message**
- Uses HTML5 form validations (`required`, `type`, etc.)
- Tracks time spent filling the form (from first focus to submission)
- Displays a success message and clears the form on submit
- Includes a **⭐ Star Rating Widget** (Bonus)

### 2. `sort.html` – Sortable List Viewer

- Displays a hardcoded list of names in an unordered list
- Includes a **Sort** button that alphabetically sorts the list using JavaScript
- Layout includes a fixed sidebar and scrollable content

### 3. `faq.html` – FAQ Accordion (No JavaScript)

- Created using pure HTML/CSS only
- Uses `<details>` and `<summary>` tags to build the accordion
- Fully functional without any JavaScript

---

## Bonus Feature

### ⭐ Star Rating Widget

- Allows users to rate from 1 to 5 stars
- Built with only HTML, CSS, and JavaScript
- Highlights stars on hover and persists the selection after click

---

## 📁 Folder Structure

project-root/
├── index.html
├── sort.html
├── faq.html
├── assets/
│ ├── css/
│ │ └── style.css
│ └── js/
│ └── form.js
└── README.md

---

**How to Run Locally**
Clone the repository

bash
Copy
Edit
git clone https://github.com/LavetiRohitkumar/ntwist-frontend-assignment.git
Navigate to the project directory

bash
Copy
Edit
cd ntwist-frontend-assignment

Open the HTML files in your browser
You can open any of the pages (index.html, sort.html, or faq.html) directly by:

Double-clicking the file, or

Right-click → Open with → Your preferred browser, or

Using a local development server (recommended for best results), for example, using VS Code’s Live Server extension:

Run Live Server and browse to the opened page URL.

No additional setup or build steps are required since this is a vanilla HTML, CSS, and JavaScript project.
