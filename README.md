# 💬 Feedback App

This is a simple React application that allows users to submit feedback with a rating. The feedback is displayed in a list with options to delete, and the overall statistics are also shown.

## 🚀 Live Demo

👉 [Your Netlify Link Here](https://your-app.netlify.app)

## 🛠️ Built With

- React (with Hooks)
- React Router DOM
- Context API (for global state)
- UUID (to generate unique feedback IDs)
- Framer Motion (animations)
- Custom CSS

---

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production in the `build/` folder.\
Optimizes the build for best performance.

### `serve -s build`

Serve the production build locally (after running `npm run build`).\
Install the tool with: `npm install -g serve`

---

## ✨ Features

- Submit feedback with text and rating
- Animated feedback list (using Framer Motion)
- Realtime statistics of feedback (average rating, total)
- Delete feedback items
- Routing between Home and About pages
- Floating "About" icon on the bottom-right

---

## 📁 Folder Structure (Main)

feedback-app/
├── public/
├── src/
│ ├── components/
│ │ ├── FeedbackForm.jsx
│ │ ├── FeedbackList.jsx
│ │ ├── FeedbackItem.jsx
│ │ ├── FeedbackStats.jsx
│ │ ├── AboutIconLink.jsx
│ │ ├── Footer.jsx
│ │ └── Header.jsx
│ ├── context/
│ │ └── FeedbackContext.jsx
│ ├── pages/
│ │ └── About.jsx
│ ├── data/
│ │ └── FeedbackData.js
│ ├── App.jsx
│ └── index.js

---

## 🌐 Deployment

This app can be deployed on platforms like:

- [Netlify](https://feedbackforservice.netlify.app/)

### 📦 Deploy on Netlify

1. Run `npm run build`
2. Drag the `/build` folder into Netlify’s deploy window
3. Or connect to GitHub and set:
   - Build command: `npm run build`
   - Publish directory: `build`

---

## 📚 Learn More

- [React Docs](https://reactjs.org/)
- [Create React App Docs](https://create-react-app.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

---

## 🧑‍💻 Author

Built with ❤️ by **[Your Name Here]**

---
