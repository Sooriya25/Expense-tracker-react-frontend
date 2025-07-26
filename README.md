# MERN Stack Expense Tracker App 💰

A full-featured **Expense Tracker** built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) that allows users to **securely manage their income and expenses**. The app includes **JWT-based authentication**, clean and responsive UI with **Tailwind CSS**, and an option to **download income/expense data as an Excel sheet**.

---

## 🔧 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios, React Router DOM
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT), bcryptjs
- **File Export**: SheetJS (xlsx) for Excel download
- **State Management**: Context API
- **Styling**: Tailwind CSS

---

## ✨ Features

- 🔐 **User Authentication**
  - Secure login/register with JWT
  - Protected routes and token storage in `localStorage`

- 🧾 **Expense & Income Management**
  - Add, view, edit, and delete expenses and incomes
  - Each user sees only their own data

- 📤 **Download Excel Report**
  - Export expense or income list to `.xlsx` format
  - Easy to share or archive financial data

- 🎨 **Responsive UI with Tailwind**
  - Clean, modern design
  - Fully responsive on all devices

- 🧠 **Global State with Context API**
  - Manages authentication state and transaction data
