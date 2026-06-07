import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";

import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">

          {/* LEFT SIDE TEXT */}
          <div className="greeting-text-div">
            <div>
              <h1
                className={
                  isDark
                    ? "dark-mode greeting-text"
                    : "greeting-text"
                }
              >
                {greeting.title}
                <span className="wave-emoji">
                  {emoji("👋")}
                </span>
              </h1>

              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              <div id="resume" className="empty-div"></div>

              <SocialMedia />

              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />

                {greeting.resumeLink && (
                  <a
                    href="https://forms.gle/D923Jyrmxfjk9pjg7"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>

        {/* RIGHT SIDE IMAGE */}
          <div className="greeting-image-div">
            <img
              src={require("../../assets/images/profile.jpeg")}
              alt="Profile"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "480px", // Makes it large and professional on desktop screens
                aspectRatio: "1 / 1", // Forces it to maintain a perfect 1:1 ratio so it never turns oval
                borderRadius: "50%", // Keeps it perfectly circular
                objectFit: "cover", // Stops the picture from stretching
                border: "6px solid #55198b", // Smooth, clean matching purple accent ring
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.25)" // Adds a professional depth shadow
              }}
            />
          </div>

        </div>
      </div>
    </Fade>
  );
}