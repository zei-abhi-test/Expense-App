# Expense-App

Expense Tracker – React + Context API + JSON Server

A simple and efficient Expense Tracker built using React, Context API, and JSON Server.
This project allows users to add expenses, view them in list/table formats, search expenses dynamically, and view the total amount spent.


🚀 Setup Instructions

Follow these steps to run the project locally:

1️⃣ Clone the project (if using GitHub):
git clone <repo-url>
cd <project-folder>

2️⃣ Install dependencies
npm install

3️⃣ Start JSON Server

Make sure you have a db.json file like:

{
  "expenses": []
}


Run:

npx json-server --watch db.json --port 3000


Your mock backend will run at:

http://localhost:3000/expenses

4️⃣ Run the React App
npm run dev


Your React app will run at:

http://localhost:5173/

✨ Features Implemented
✔ Part 1 – Add Expense

Add new expense with:

Title

Amount

Date

Data stored in JSON Server.

UI updates instantly using Context API.

✔ Part 2 – View Expenses

Display expenses in:

Card/List format

Table format

Each expense shows title, amount, and date.

✔ Part 3 – Global State Using Context API

Implemented two global contexts:

FetchContext

Fetches all expenses from backend

Stores global expenses

Shares data across all components

SearchContext

Stores search term

Filters expense results in real time

✔ Part 4 – Search & Total Calculation

Live search filtering (case-insensitive)

Display total expense amount based on:

All expenses OR

Search-filtered data

Search updates the expense list everywhere:

List

Table

Total Component

💻 Tech Stack

React.js

Context API

Axios

JSON Server

Vite

📂 Project Structure
src/
│
├── Contextapi/
│   ├── Fetchcontext.jsx
│   ├── Searchcontext.jsx
│
├── components/
│   ├── Addform.jsx
│   ├── List.jsx
│   ├── Item.jsx
│   ├── Expensetotal.jsx
│
├── App.jsx
└── main.jsx





Github LInk - https://github.com/zei-abhi-test/Expense-App.git