import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Notifications from "./pages/Notifications/Notifications";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useLocalStorage("posts", []);

  const [notifications, setNotifications] = useLocalStorage("notifications", []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              posts={posts}
              setPosts={setPosts}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfilePage
              posts={posts}
              setPosts={setPosts}
              setNotifications={setNotifications}
            />
          }
        />
        <Route
          path="/notifications"
          element={
            <Notifications
              notifications={notifications}
              setNotifications={setNotifications}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
