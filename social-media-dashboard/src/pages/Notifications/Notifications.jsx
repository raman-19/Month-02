import React from "react";
import Button from "../../components/common/Button/Button";
import styles from "./Notifications.module.css";

const Notifications = ({ notifications, setNotifications }) => {

  // ✅ Mark single notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  // ✅ Mark all notifications as read
  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  // ✅ Message based on action type
  const renderMessage = (n) => {
    if (n.type === "like") return "liked your post";
    if (n.type === "post") return "created a post";
    if (n.type === "edit") return "edited a post";
    if (n.type === "delete") return "deleted a post";
    return "interacted with your post";
  };

  // ✅ Instagram-style relative time (NO backend)
  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return "";

    const diff = Date.now() - timestamp;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return "Just now";
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`;
    return `${days} day${days > 1 ? "s" : ""} ago`;
  };

  return (
    <div className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2>Notifications</h2>
        {notifications.length > 0 && (
          <Button text="Mark All as Read" onClick={markAllRead} />
        )}
      </div>

      {/* EMPTY STATE */}
      {notifications.length === 0 && (
        <p className={styles.empty}>No notifications yet.</p>
      )}

      {/* LIST */}
      <div className={styles.container}>
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`${styles.notification} ${
              !n.read ? styles.unread : ""
            }`}
          >
            {/* LEFT: POST IMAGE PREVIEW */}
            {n.postImage && (
              <img
                src={n.postImage}
                alt="post preview"
                className={styles.thumbnail}
              />
            )}

            {/* CENTER: TEXT */}
            <div className={styles.content}>
              <p className={styles.message}>
                <strong>{n.actor}</strong> {renderMessage(n)}
              </p>

              {n.postPreview && (
                <p className={styles.preview}>
                  “{n.postPreview}...”
                </p>
              )}

              {/* TIME */}
              <span className={styles.time}>
                {formatTimeAgo(n.createdAt)} •{" "}
                {new Date(n.createdAt || Date.now()).toLocaleString("en-IN", {
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            {/* RIGHT: ACTION */}
            {!n.read && (
              <Button
                text="Mark as Read"
                onClick={() => markAsRead(n.id)}
                variant="secondary"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
