import { useState } from 'react';
import './App.css'; // Import file CSS để styling

// 1. Dữ liệu tĩnh lưu trong Object (ES6 Object)
const studentData = {
  avatar: "https://ui-avatars.com/api/?name=Lê+Văn+Bảo&background=0D8ABC&color=fff&size=150",
  fullName: "Lê Văn Bảo",
  studentId: "QE190251",
  className: "SE2004",
  major: "Software Engineering",
  hobbies: ["Coding Java & JSP", "IoT & Smart Farming", "Going to the Cinema"]
};

function App() {
  // 2. Sử dụng ES6 Destructuring để lấy dữ liệu từ Object
  const { avatar, fullName, studentId, className, major, hobbies } = studentData;

  // 3. Khai báo các State (React useState)
  const [isOnline, setIsOnline] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 4. ES6 Arrow Functions xử lý sự kiện (Event Handling)
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
    // 5. Conditional className cho Dark Mode và Template literals (ES6)
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      
      {/* Nút chuyển đổi giao diện Dark/Light */}
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      {/* Thẻ Profile Card */}
      <div className="profile-card">
        <img src={avatar} alt="Student Avatar" className="avatar" />
        
        <h2>{fullName}</h2>
        {/* Sử dụng Template Literals cho chuỗi động */}
        <p><strong>Student ID:</strong> {`${studentId}`}</p>
        <p><strong>Class:</strong> {className}</p>
        <p><strong>Major:</strong> {major}</p>

        <div className="hobbies-section">
          <h3>Hobbies:</h3>
          <ul>
            {/* Sử dụng hàm map() để render danh sách */}
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
