import React, { useState } from "react";

interface SidebarProps {
  onSelectVideo: (url: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectVideo }) => {
  // Track which category is open
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Categories with their respective courses
  const categories = [
    {
      name: "Full Stack Developer",
      courses: [
        { title: "Introduction", url: "https://www.youtube.com/embed/pQN-pnXPaVg" },
        { title: "HTML", url: "https://www.youtube.com/embed/pQN-pnXPaVg" },
        { title: "CSS", url: "https://www.youtube.com/embed/yfoY53QXEnI" },
        { title: "JavaScript", url: "https://www.youtube.com/embed/hdI2bqOjy3c" },
        { title: "React Basics", url: "https://www.youtube.com/embed/bMknfKXIFA8" },
        { title: "Backend Node.js", url: "https://www.youtube.com/embed/fBNz5xF-Kx4" },
      ],
    },
    {
      name: "Cyber Security",
      courses: [
        { title: "Intro Ethical Hacking", url: "https://www.youtube.com/embed/2_lswM1S264" },
        { title: "Intro Networking", url: "https://www.youtube.com/embed/qiQR5rTSshw" },
        { title: "Security Tools", url: "https://www.youtube.com/embed/5HjU4AdFUGQ" },
      ],
    },
    {
      name: "Data Analytics",
      courses: [
        { title: "Introduction to Data Analytics", url: "https://www.youtube.com/embed/2X8p0tgt3T8" },
        { title: "Excel Basics", url: "https://www.youtube.com/embed/tgbp0V1cU4s" },
        { title: "Python for Data", url: "https://www.youtube.com/embed/r-uOLxNrNk8" },
        { title: "Power BI", url: "https://www.youtube.com/embed/AGrl-H87pRU" },
      ],
    },
  ];

  // Toggle category
  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <aside
      style={{
        width: "250px",
        background: "#f4f4f4",
        padding: "15px",
        borderRight: "2px solid #ddd",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <div>
              
    <button style={{
      background: "#de0736ff",
      color: "white",
      padding: "10px",
      cursor: "pointer",
      width: "50%",
      // borderRadius: "50px",
      marginTop: "5px",
      textAlign: "center",
      justifyContent:"center",
      fontWeight: "bold",
      marginLeft:"70px",
      border:"None",
    }}>
      Dashboard</button>
                    

      </div>

      <h2 style={{ marginBottom: "15px", textAlign: "center" }}>Courses</h2>
      {categories.map((category) => (
        <div key={category.name}>
          {/* Category button */}
          <button
            onClick={() => toggleCategory(category.name)}
            style={{
              background: "#002D62",
              color: "white",
              border: "none",
              padding: "20px",
              cursor: "pointer",
              width: "100%",
              borderRadius: "15px",
              marginTop: "5px",
              textAlign: "left",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {category.name} {openCategory === category.name ? "▲" : "▼"}
          </button>

          {/* Submenu */}
          {openCategory === category.name && (
            <ul style={{ listStyle: "none", paddingLeft: "10px", marginTop: "5px" }}>
              {category.courses.map((course) => (
                <li key={course.title} style={{ margin: "5px 0" }}>
                  <button
                    style={{
                      background: "#eee",
                      color: "#333",
                      border: "none",
                      padding: "8px",
                      cursor: "pointer",
                      width: "100%",
                      borderRadius: "5px",
                      textAlign: "left",
                    }}
                    onClick={() => onSelectVideo(course.url)}
                  >
                    {course.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
