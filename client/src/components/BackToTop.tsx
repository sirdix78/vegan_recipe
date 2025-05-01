import React, { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "30px",
        padding: "5px 15px",
        fontSize: "16px",
        borderRadius: "50%",
        backgroundColor: "#716d38",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
