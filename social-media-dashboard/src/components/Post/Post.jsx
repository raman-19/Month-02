import Button from "../common/Button/Button";
// import styles from "./Post.module.css";
const Post = ({ post, onLike, onDelete, onEdit }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginTop: "15px",
        borderRadius: "10px",
        background: "#fff",
      }}
    >
      {/* TEXT */}
      {post.content && <p>{post.content}</p>}

      {/* IMAGE */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          loading="lazy"
          style={{
            width: "100%",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        />
      )}

      {/* LIKES */}
      <p style={{ marginTop: "10px" }}>❤️ {post.likes}</p>

      {/* ACTIONS */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Button text="Like" onClick={() => onLike(post.id)} />
        <Button text="Edit" onClick={() => onEdit(post.id)} />
        <Button text="Delete" onClick={() => onDelete(post.id)} />
      </div>
    </div>
  );
};

export default Post;
