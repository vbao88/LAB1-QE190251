import { useState } from 'react';
import './App.css'; 
import image from './assets/image.png'; 

const studentData = {
  fullName: "Lê Văn Bảo",
  studentId: "QE190251",
  className: "SE2004",
  major: "Software Engineering",
  hobbies: ["Coding Java & JSP", "IoT & Smart Farming", "Going to the Cinema"]
};

function App() {
  const { fullName, studentId, className, major, hobbies } = studentData;

  const [isOnline, setIsOnline] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      <div className="profile-card">
        <img src={image} alt="Student Avatar" className="avatar" />
        
        <h2>{fullName}</h2>
        <p><strong>Student ID:</strong> {`${studentId}`}</p>
        <p><strong>Class:</strong> {className}</p>
        <p><strong>Major:</strong> {major}</p>

        <div className="hobbies-section">
          <h3>Hobbies:</h3>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>

        <div className="status-section">
          <p>
            Status: <span className={`status-text ${isOnline ? 'online' : 'offline'}`}>
              {isOnline ? '🟢 Online' : '🔴 Offline'}
            </span>
          </p>
          <button className="btn toggle-btn" onClick={toggleStatus}>
            Go {isOnline ? 'Offline' : 'Online'}
          </button>
        </div>

        <div className="like-section">
          <p>❤️ Total Likes: {likeCount}</p>
          <button className="btn like-btn" onClick={handleLike}>
            👍 Like
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;