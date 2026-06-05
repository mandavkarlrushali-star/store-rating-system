# 🏪 Store Rating System

A Full Stack Web Application that allows users to rate stores, manage store information, and access role-based dashboards. The system supports three user roles: **System Administrator**, **Normal User**, and **Store Owner**.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Bootstrap
- React Router DOM
- Axios

### Backend
- NestJS
- TypeORM
- JWT Authentication
- bcrypt

### Database
- MySQL

---

## ✨ Features

### 🔐 Authentication
- User Login
- JWT Authentication
- Role-Based Access Control (RBAC)
- Secure Password Hashing

### 👤 User Management
- User Registration
- Add Users
- View Users
- Search Users
- Update Password

### 🏬 Store Management
- Add Stores
- View Stores
- Search Stores
- Store Rating Calculation

### ⭐ Rating Management
- Submit Ratings (1-5)
- Update Ratings
- View Average Ratings

### 📊 Dashboards

#### Admin Dashboard
- Total Users
- Total Stores
- Total Ratings

#### Store Owner Dashboard
- Average Store Rating
- Users Who Submitted Ratings

### 🚪 Logout
- Secure Logout Functionality

---

## 👥 User Roles

### System Administrator
- Add Users
- Add Stores
- View All Users
- View All Stores
- Search & Filter Records
- Access Dashboard Statistics

### Normal User
- Register Account
- Login
- View Stores
- Search Stores
- Submit Ratings
- Modify Ratings
- Change Password

### Store Owner
- Login
- View Store Ratings
- View Average Rating
- Change Password

---

## 📂 Project Structure

```bash
StoreRatingSystem/
│
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── stores/
│   │   ├── ratings/
│   │   ├── dashboard/
│   │   └── app.module.ts
│   │
│   ├── package.json
│   └── .env
│
└── store-rating-frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── routes/
    │   └── App.jsx
    │
    └── package.json
```

---

## ⚙️ Installation

### Backend Setup

```bash
cd backend

npm install

npm run start:dev
```

Backend runs on:

```bash
http://localhost:3000
```

### Frontend Setup

```bash
cd store-rating-frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🔗 API Endpoints

### Authentication

```http
POST http://localhost:3000/auth/login
```

### Users

```http
GET    http://localhost:3000/users
POST   http://localhost:3000/users
GET    http://localhost:3000/users/:id
```

### Stores

```http
GET    http://localhost:3000/stores
POST   http://localhost:3000/stores
GET    http://localhost:3000/stores/:id
```

### Ratings

```http
GET    http://localhost:3000/ratings
POST   http://localhost:3000/ratings
PUT    http://localhost:3000/ratings/:id
```

### Admin Dashboard

```http
GET http://localhost:3000/admin/dashboard
```

---

## 🌐 Application URLs

### Frontend

```bash
http://localhost:5173
http://localhost:5173/login
http://localhost:5173/dashboard
http://localhost:5173/view-stores
http://localhost:5173/owner-dashboard
```

### Backend

```bash
http://localhost:3000
http://localhost:3000/users
http://localhost:3000/stores
http://localhost:3000/ratings
http://localhost:3000/admin/dashboard
```
---

## 📋 Form Validation Rules

| Field | Validation |
|---------|------------|
| Name | 20 - 60 Characters |
| Email | Valid Email Format |
| Password | 8 - 16 Characters, 1 Uppercase Letter, 1 Special Character |
| Address | Maximum 400 Characters |

---

## 🗄️ Database Design

### Users
- id
- name
- email
- password
- address
- role

### Stores
- id
- name
- email
- address
- ownerId

### Ratings
- id
- rating
- userId
- storeId

---

## 🔒 Security Features

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Role-Based Authorization
- Secure API Access

---

## 🌟 Future Improvements

- Pagination
- Email Verification
- Forgot Password
- User Profile Management
- Store Analytics
- Export Reports

---

## 👩‍💻 Author

**Rushali Mandavkar**

Full Stack Developer

React.js | NestJS | MySQL
