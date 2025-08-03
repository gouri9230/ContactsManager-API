# Contact Management API

A secure and RESTful backend API built with **Node.js**, **Express.js**, and **MongoDB** that allows users to register, log in, and manage their personal contacts. It uses **JWT** for authentication and **bcrypt** for password hashing.

---

## Features

- User Registration & Login
- JWT-based Authentication & Authorization
- Passwords hashed with bcrypt
- Create, Read, Update, and Delete (CRUD) operations for contacts
- Each user can access only their own contacts
- Tested with Thunder Client

---

## Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Language    | JavaScript (ES6+)    |
| Runtime     | Node.js              |
| Framework   | Express.js           |
| Database    | MongoDB + Mongoose   |
| Auth        | JSON Web Tokens (JWT), bcrypt |
| API Testing     | Thunder Client              |

---

## Steps to Run
1. **Clone the repo:**
- git clone https://github.com/yourusername/contact-api.git
- cd contact-api
2. **Install dependencies:**
- npm install
3. **Create a .env file:** define
- PORT
- CONNECTION_DB
- ACCESS_TOKEN_SECRET
4. **Run the server:**
- npm start


