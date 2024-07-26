import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "xp.css/dist/XP.css";
import "./index.css";

// Sound imports
import startupSound from "./startupsound.mp3";
import clickSound from "./mouseclick.mp3";

// Function to play the click sound
const playClickSound = () => {
  const audio = new Audio(clickSound);
  audio.play();
};

const StartMenu = ({ onClose }) => {
  return (
    <div className="start-menu">
      <div className="start-menu-header">
        <img
          src="https://seeklogo.com/images/W/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png"
          alt="My Computer"
        />
        <span>My Computer</span>
      </div>
      <div className="start-menu-content">
        <div className="start-menu-left">
          <ul>
            <li>
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec0429cf-1471-466c-b958-f3b1faa7896b/d5zjlvr-f5694e01-ce96-424d-9616-333d177a9cca.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjMDQyOWNmLTE0NzEtNDY2Yy1iOTU4LWYzYjFmYWE3ODk2YlwvZDV6amx2ci1mNTY5NGUwMS1jZTk2LTQyNGQtOTYxNi0zMzNkMTc3YTljY2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0twN4RG8NgM89noOvAHcH44zVaCcTzs0DZOueizHqHo"
                alt="Internet Explorer"
              />
              <span>Internet Explorer</span>
            </li>
            <li>
              <img
                src="https://64.media.tumblr.com/7d457e49acb4aa89272fdced63b92f07/d1b86bf1cdd7d019-1c/s540x810/04875bf3bf64f698907a67ee724069d451b2a280.png"
                alt="Mail"
              />
              <span>Mail</span>
            </li>
            <li>
              <img
                src="https://icons.iconarchive.com/icons/hopstarter/sleek-xp-software/256/Windows-Media-Player-icon.png"
                alt="Media Player"
              />
              <span>Media Player</span>
            </li>
            <li>
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cc61f89-aa16-4ec1-86ad-8b18cacef76a/dgv3tvb-ee8b9f50-dbd6-4450-b231-839fdc740453.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjYzYxZjg5LWFhMTYtNGVjMS04NmFkLThiMThjYWNlZjc2YVwvZGd2M3R2Yi1lZThiOWY1MC1kYmQ2LTQ0NTAtYjIzMS04MzlmZGM3NDA0NTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ONFmAa-LAoESh1CC7xtdlTwjSOOw7M4gV9dwsfkp-zc"
                alt="Command Prompt"
              />
              <span>Command Prompt</span>
            </li>
          </ul>
        </div>
        <div className="start-menu-right">
          <ul>
            <li>
              <img
                src="https://64.media.tumblr.com/1ad75b3b6e5bbf8fc0a61507fd0cc3a9/352118494480b7d6-84/s540x810/c4d7e7079764a1425333be63d59f4e4cc25a65ac.png"
                alt="Documents"
              />
              <span>Documents</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="start-menu-footer">
        <button onClick={onClose}>Log Off</button>
        <button onClick={onClose}>Shut Down</button>
      </div>
    </div>
  );
};

const CommandPrompt = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    if (e.key === "Enter") {
      const newOutput = [
        `${input}`,
        ...(input === "-help" ? ["hello world"] : ["Unknown command"]),
      ];
      setOutput([...newOutput, ...output]);
      setInput("");
    }
  };

  return (
    <div className="window command-prompt">
      <div className="title-bar">
        <div className="title-bar-text">Command Prompt</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={onClose} />
        </div>
      </div>
      <div className="window-body">
        <input
          type="text"
          className="command-input"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputSubmit}
          autoFocus
        />
        <div className="command-output">
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutMe = ({ onClose }) => {
  return (
    <div style={{ width: 400 }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">About Me</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={onClose} />
        </div>
      </div>
      <div className="window-body">
        <p>
          Hey there! I'm Mohammad Bazrouk, currently an Incoming Software
          Engineering Fellow at Headstarter AI. I used to be a Software Intern
          at Mastercard and I'm also a HackCUNY Winner. I'm studying Computer
          Science at the College of Staten Island.
        </p>
        <p>Feel free to check out my profiles:</p>
        <div className="profile-links">
          <a
            href="https://www.linkedin.com/in/mohammadbazrouk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/moe0009"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ onClose }) => {
  return (
    <div style={{ width: 400 }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">Projects</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={onClose} />
        </div>
      </div>
      <div className="window-body">
        <p>
          So, I made this cool iOS app called AcademiX during HackCUNY and ended
          up winning! It’s built with Swift and helps people learn English as a
          Second Language, supporting 5 different languages. I used OpenAI's API
          to add some real-time, AI-powered language assistance and personalized
          learning features.
        </p>
        <p>
          The backend is powered by FastAPI and PostgreSQL, handling user data
          and supporting over 10,000+ files. The app's interface is made with
          SwiftUI and includes interactive courses, a customizable calendar, and
          even a multilingual AI chatbot for extra help.
        </p>
        <p>Check it out on GitHub:</p>
        <div className="profile-links">
          <a
            href="https://github.com/orgs/hackcuny2024/repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.discordapp.com/attachments/1026231954443604048/1266523186669949000/image.png?ex=66a57522&is=66a423a2&hm=9eab8b7578c558c8a007f2d02e97a02c5ceec302f8522946b6a770fedeea406b&"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [windows, setWindows] = useState({
    aboutMe: false,
    projects: false,
    contact: false,
    commandPrompt: false,
  });
  const [loading, setLoading] = useState(true);
  const [startMenuVisible, setStartMenuVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const audio = new Audio(startupSound);
      audio.play();
    }, 3000); // 3 seconds loading screen
    return () => clearTimeout(timer);
  }, []);

  const toggleWindow = (windowName) => {
    playClickSound();
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowName]: !prevWindows[windowName],
    }));
  };

  const toggleStartMenu = () => {
    playClickSound();
    setStartMenuVisible(!startMenuVisible);
  };

  return (
    <div className="frame-container">
      <div className="frame"></div>
      {loading ? (
        <div className="loading-screen">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba65667f-de75-42db-bfea-b9e04e9fcc6f/db6dw1k-47c4d90d-f5b5-4b31-a06e-2c2c0dc30501.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhNjU2NjdmLWRlNzUtNDJkYi1iZmVhLWI5ZTA0ZTlmY2M2ZlwvZGI2ZHcxay00N2M0ZDkwZC1mNWI1LTRiMzEtYTA2ZS0yYzJjMGRjMzA1MDEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VyIg-waBZOV6IJeAM1CvzHNFWsPl41G4wYFrdAXydvk" />
        </div>
      ) : (
        <div className="desktop-container">
          <div className="desktop">
            <div className="desktop-icons">
              <button
                onClick={() => toggleWindow("aboutMe")}
                className="window-button"
              >
                <img
                  src="https://www.iconshock.com/image/PlasticXP/General/user"
                  alt="About Me"
                />
                <span>About Me.exe</span>
              </button>
              <button
                onClick={() => toggleWindow("projects")}
                className="window-button"
              >
                <img
                  src="https://www.freeiconspng.com/thumbs/notepad-icon/notepad-icon-7.png"
                  alt="Projects"
                />
                <span>Projects.exe</span>
              </button>
              <button
                onClick={() => toggleWindow("contact")}
                className="window-button"
              >
                <img
                  src="https://winaero.com/blog/wp-content/uploads/2016/05/Windows-XP.png"
                  alt="Contact"
                />
                <span>Contact.exe</span>
              </button>
              <button
                onClick={() => toggleWindow("commandPrompt")}
                className="window-button"
              >
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cc61f89-aa16-4ec1-86ad-8b18cacef76a/dgv3tvb-ee8b9f50-dbd6-4450-b231-839fdc740453.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjYzYxZjg5LWFhMTYtNGVjMS04NmFkLThiMThjYWNlZjc2YVwvZGd2M3R2Yi1lZThiOWY1MC1kYmQ2LTQ0NTAtYjIzMS04MzlmZGM3NDA0NTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ONFmAa-LAoESh1CC7xtdlTwjSOOw7M4gV9dwsfkp-zc"
                  alt="Command Prompt"
                />
                <span>Command Prompt.exe</span>
              </button>
            </div>

            {windows.aboutMe && (
              <AboutMe onClose={() => toggleWindow("aboutMe")} />
            )}

            {windows.projects && (
              <Projects onClose={() => toggleWindow("projects")} />
            )}

            {windows.contact && (
              <div style={{ width: 400 }} className="window">
                <div className="title-bar">
                  <div className="title-bar-text">Contact</div>
                  <div className="title-bar-controls">
                    <button
                      aria-label="Close"
                      onClick={() => toggleWindow("contact")}
                    />
                  </div>
                </div>
                <div className="window-body">
                  <p>Feel free to reach out to me at:</p>
                  <p>Email: mohammadbazrouk@gmail.com</p>
                </div>
              </div>
            )}

            {windows.commandPrompt && (
              <CommandPrompt onClose={() => toggleWindow("commandPrompt")} />
            )}

            <div className="taskbar">
              <div className="start-button" onClick={toggleStartMenu}>
                <img
                  src="https://seeklogo.com/images/W/windows-xp-icon-logo-E8F84DD6F3-seeklogo.com.png"
                  alt="Start"
                />
                Start
              </div>
              {startMenuVisible && <StartMenu onClose={toggleStartMenu} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
