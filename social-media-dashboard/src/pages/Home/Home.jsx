import { useState } from "react";
import Post from "../../components/Post/Post";
import Button from "../../components/common/Button/Button";
// import styles from "./Home.module.css";


const Home = ({ posts, setPosts, setNotifications }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const createPost = () => {
    if (!text.trim() && !image) return;

    const newPost = {
      id: Date.now(),
      userId:"User_1",
      content: text,
      image,
      likes: 0,
    };

    setPosts((prev) => [newPost, ...prev]);
    setText("");
    setImage(null);

    setNotifications((prev) => [
      { id: Date.now(), message: "You created a post",read:false },
      ...prev,
    ]);
  };

  const likePost = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );

    setNotifications((prev) => [
      { id: Date.now(), message: "You liked a post", read:false },
      ...prev,
    ]);
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));

    setNotifications((prev) => [
      { id: Date.now(), message: "You deleted a post" , read:false },
      ...prev,
    ]);
  };

  const editPost = (id) => {
    const updatedText = prompt("Edit your post");
    if (!updatedText) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, content: updatedText } : post
      )
    );

    setNotifications((prev) => [
      { id: Date.now(), message: "You edited a post" , read:false },
      ...prev,
    ]);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Home</h2>

      <input
        type="text"
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3 rounded-lg  border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700 placeholder-gray-400 mb-4 transition-all"
        
      />

      <input className="" type="file" accept="image/*" onChange={handleImageChange} />

      <Button text="Post" onClick={createPost} />

      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={likePost}
          onDelete={deletePost}
          onEdit={editPost}
        />
      ))}
    </div>
  );
};

export default Home;



