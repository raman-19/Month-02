import { useState } from "react";
import styles from "./ProfilePage.module.css";
import Button from "../../components/common/Button/Button";
import Post from "../../components/Post/Post";

const ProfilePage = ({ posts = [], setPosts, setNotifications }) => {
  // ✅ USER HAS A FIXED ID
  const [user, setUser] = useState({
    id: "User_1", // 🔑 permanent identity
    name: "Raman",
    bio: "Frontend Developer | React Enthusiast",
    avatar: "https://i.pravatar.cc/150",
    followers: 120,
    following: 80,
  });

  // ✅ FILTER USING userId (NOT NAME)
  const userPosts = posts.filter((p) => p.userId === user.id);
  const postCount = userPosts.length;

  // Edit profile (name change WON’T break posts)
  const handleEditProfile = () => {
    const newName = prompt("Enter your name", user.name);
    const newBio = prompt("Enter your bio", user.bio);
    const newAvatar = prompt("Enter avatar image URL", user.avatar);

    if (!newName || !newBio || !newAvatar) return;

    setUser({
      ...user,
      name: newName,
      bio: newBio,
      avatar: newAvatar,
    });
  };

  // Like post
  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );

    setNotifications((prev) => [
      { id: Date.now(), message: "You liked your post" },
      ...prev,
    ]);
  };

  // Edit post
  const handleEdit = (id) => {
    const updatedText = prompt("Edit your post");
    if (!updatedText) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, content: updatedText } : post
      )
    );

    setNotifications((prev) => [
      { id: Date.now(), message: "You edited your post" },
      ...prev,
    ]);
  };

  // Delete post
  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));

    setNotifications((prev) => [
      { id: Date.now(), message: "You deleted a post" },
      ...prev,
    ]);
  };

  return (
    <div className={styles.profileContainer}>
      {/* PROFILE HEADER */}
      <div className={styles.header}>
        <img src={user.avatar} alt="Profile" className={styles.avatar} />
        <div className={styles.userInfo}>
          <h2>{user.name}</h2>
          <p className={styles.bio}>{user.bio}</p>

          <div className={styles.stats}>
            <span><strong>{user.followers}</strong> Followers</span>
            <span><strong>{user.following}</strong> Following</span>
            <span><strong>{postCount}</strong> Posts</span>
          </div>

          <Button
            text="Edit Profile"
            onClick={handleEditProfile}
            variant="primary"
          />
        </div>
      </div>

      {/* USER POSTS */}
      <div className={styles.postsSection}>
        <h3>Your Posts ({postCount})</h3>

        {userPosts.length === 0 && (
          <p className={styles.empty}>You haven't posted anything yet.</p>
        )}

        {userPosts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onLike={handleLike}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
