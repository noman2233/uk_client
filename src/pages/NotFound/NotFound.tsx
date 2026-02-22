import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    // If you have a JWT token saved, you could redirect to '/dashboard'
    // const token = localStorage.getItem('token');
    // token ? navigate('/dashboard') : navigate('/');
    navigate("/");
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.oopsText}>Oops!</h1>

      <h2 className={styles.errorCode}>404 - Page Not Found</h2>

      <p className={styles.description}>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>

      <button className={styles.homeButton} onClick={handleGoHome}>
        Go to Homepage
      </button>
    </main>
  );
};

export default NotFound;
