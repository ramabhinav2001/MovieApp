
# 🎬 MovieApp
<img width="2556" height="1344" alt="image" src="https://github.com/user-attachments/assets/a07bb573-f04a-4bc7-b790-96c15439e84c" />

A responsive and lightweight React and Vite application that allows users to browse movies from TheMovieDB API, search for titles, and manage favourite movies using context and localStorage.

---

## 📌 Features

- 🔍 Search for movies using TheMovieDB API
- 🏠 Home Page with trending/popular movie listings
- ⭐ Favorites Page to save and remove favourite movies
- 🧭 Navigation Bar for routing and search input
- 🔔 Notification Bell for visual alerts on action
- React Context API for state management
- Persistent favorites using localStorage

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6)
- CSS Modules or Plain CSS
- TheMovieDB API
- Context API
- LocalStorage

---

## 📁 Project Structure

```
frontend/
 ├── public/
 ├── src/
 │   ├── assets/
 │   ├── components/
 │   ├── contexts/
 │   ├── css/
 │   ├── pages/
 │   ├── services/
 │   ├── App.jsx
 │   ├── main.jsx
 │   └── index.css
 ├── package.json
 ├── vite.config.js
 └── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/react-movie-app.git
cd react-movie-app/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `frontend/` directory:

```
VITE_TMDB_API_KEY=your_api_key_here
```

### 4. Start the development server

```bash
npm run dev
```

---

## 📦 Production Build

```bash
npm run build
```

---

## 🔑 API Handling

All API requests are handled in:

```
src/services/api.js
```

Example:

```js
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
```
---

## 🤝 Contributions

Contributions are welcome. Feel free to fork this repo and submit pull requests.

---

## ⭐ Support

If you find this project helpful, please consider giving it a star on GitHub.

---
