# React User Account Manager

A modern React application that allows users to create, login, and manage their account information with a clean, responsive, and user-friendly interface.

This project demonstrates core React concepts such as routing, global state management, protected routes, form handling, and modern UI design.

---

## Features

- User Registration
- User Login
- Protected Dashboard
- View Profile Information
- Edit Profile (Name, Email, Mobile Number)
- Upload and Preview Profile Picture
- Persistent Login using localStorage
- Responsive Design (Desktop & Mobile)
- Modern UI with Tailwind CSS
- Error Handling and Form Validation

---

## Tech Stack

- React (Vite, React 18)
- React Router DOM
- Context API (State Management)
- Tailwind CSS
- LocalStorage (for session persistence)

---

## Project Structure

```

src/
pages/            # All main pages (Login, Register, Dashboard, EditProfile)
components/       # Reusable components (ProtectedRoute)
context/          # Global state (AuthContext)
App.jsx           # Main routing file
main.jsx          # Application entry point
index.css         # Global styles

````

---

## How to Run the Project

### Prerequisites
- Node.js (v16 or above)
- npm

### Steps

1. Clone the repository
```bash
git clone <your-repository-url>
````

2. Navigate to project directory

```bash
cd react-user-manager
```

3. Install dependencies

```bash
npm install
```

4. Start development server

```bash
npm run dev
```

5. Open in browser

```
http://localhost:5173
```

---

## Application Flow

1. User registers by entering personal details.
2. Data is stored using Context API and localStorage.
3. User logs in with credentials.
4. After login, user is redirected to Dashboard.
5. Dashboard displays profile information.
6. User can navigate to Edit Profile page.
7. Profile details can be updated.
8. Updated data is reflected immediately.
9. User session persists even after page refresh.

---

## Error Handling

* Required field validation in all forms.
* Inline error messages for better user experience.
* Protected routes prevent unauthorized access.
* Graceful handling of empty or invalid inputs.

---

## Why This Project

This project was created to demonstrate:

* Real-world React application structure
* Authentication flow
* State management using Context API
* Clean and modern UI
* Practical frontend development skills

---

## Author

Developed by **Sahil Chauhan**
Frontend / React Developer

---

