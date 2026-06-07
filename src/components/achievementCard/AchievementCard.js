import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      {/* ⚡ Only renders the image container if an image file reference actually exists! */}
      {cardInfo.image && (
        <div className="certificate-card-img-div">
          <img
            src={cardInfo.image}
            alt={cardInfo.title || "Card Thumbnail"}
            className="card-image"
          />
        </div>
      )}

      {/* Centers the container beautifully if there's no image asset */}
      <div 
        className="certificate-card-body-div"
        style={!cardInfo.image ? { width: "100%", maxWidth: "100%", flex: "1 1 100%", padding: "20px", textAlign: "center" } : {}}
      >
        <h1 className={isDark ? "dark-mode certificate-card-title" : "certificate-card-title"}>
          {cardInfo.title}
        </h1>
        <p className={isDark ? "dark-mode certificate-card-subtitle" : "certificate-card-subtitle"}>
          {cardInfo.description}
        </p>

        {/* 🎨 Using explicit styles here forces a solid, clickable purple button layout */}
        <div 
          className="certificate-card-footer-div"
          style={!cardInfo.image ? { display: "flex", justifyContent: "center", marginTop: "20px" } : {}}
        >
          {cardInfo.footer &&
            cardInfo.footer.map((v, i) => {
              return (
                <span
                  key={i}
                  className={isDark ? "dark-mode certificate-card-footer" : "certificate-card-footer"}
                  onClick={() => openUrlInNewTab(v.url)}
                  style={{
                    margin: "0 auto",
                    padding: "10px 20px",
                    background: "#7d54c4", // Safe theme purple color
                    color: "#ffffff",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    display: "inline-block",
                    textAlign: "center"
                  }}
                >
                  {v.name}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}