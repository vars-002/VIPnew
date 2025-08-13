import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ flex: 1, display: "flex" }}>
        <Sidebar onSelectVideo={setVideoUrl} />
        <Dashboard videoUrl={videoUrl} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
