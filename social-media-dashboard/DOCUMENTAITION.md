Social Media Dashboard Documentation
Project Overview

The Social Media Dashboard is a React-based web application that mimics a simple social media platform.
It allows users to:

View a feed of posts

Create new posts with text and images

Like, edit, and delete posts

View a user profile with posts and statistics

See notifications for post interactions

Switch between light and dark mode

Navigate between pages using React Router

This project demonstrates React fundamentals, state management, reusable components, API integration (mocked), and responsive design.

Features
Core Features

User Profile Section: Displays user info, followers, following, and posts count.

Post Feed: Users can create, like, edit, and delete posts.

Notifications Panel: Shows recent interactions with timestamp and post preview.

Responsive Design: Works seamlessly on mobile, tablet, and desktop.

Dark/Light Mode Toggle: Users can switch themes easily.

Search Functionality: Find users or posts (mock implementation).

Key Functionalities
Feature	Description
Post Creation	Users can post text and images.
Like & Comment	Posts can be liked and commented (comments can be extended).
Edit/Delete Post	Users can update or remove their own posts.
Notifications	Shows post interaction with post preview and timestamp.
Multi-Page Navigation	Home, Profile, Notifications pages with React Router.
Responsive UI	Fully functional on all screen sizes.
Setup Instructions
Prerequisites

Node.js >= 16.x

npm (comes with Node.js)

Git

Installation

Clone the repository:

git clone https://github.com/raman-19/Internship-Projects.git


Navigate to the project folder:

cd Month-02/social-media-dashboard


Install dependencies:

npm install


Start the development server:

npm start


Open http://localhost:3000
 in your browser to view the app.

Project Structure
social-media-dashboard/
│── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   └── Modal/
│   │   ├── Header/
│   │   ├── Post/
│   │   ├── Profile/
│   │   └── Notification/
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── Home/
│   │   ├── ProfilePage/
│   │   └── Notifications/
│   ├── utils/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│── public/
│── package.json
│── README.md
└── .gitignore

Component Architecture
Main Components

Header: Navigation menu for Home, Profile, Notifications

Post: Displays post content, likes, comments, and actions

ProfilePage: Shows user info and their posts

Notifications: Shows interactions with small previews

Button: Reusable button component

Modal: For popups (used in future enhancements)

Data Flow:

Posts are stored in the main App state and passed down via props.

Notifications are updated dynamically whenever a post is created, liked, edited, or deleted.

Technical Details

React Hooks: useState for state, useEffect for side effects

React Router: For multi-page navigation

Local Storage (optional): Save theme or posts locally

CSS Modules: Component-level styling

Responsive Design: Tailwind CSS / media queries for layout

Testing: Basic tests with React Testing Library

Screenshots

Replace these with actual screenshots of your app

Home Feed


Profile Page


Notifications Panel


Mobile View


Dark Mode


How to Run Tests
npm test


Runs the interactive test runner. Tests are primarily for Post and ProfilePage components.

Deployment

Build the project for production:

npm run build


Bundles the React app into the build/ folder

Optimizes for performance

Ready to deploy to platforms like Vercel, Netlify, or GitHub Pages

Learn More

React documentation

Create React App documentation

React Router documentation

Tailwind CSS

Author

Raman Tiwary

GitHub: https://github.com/raman-19