import React from "react";

interface DashboardProps {
  videoUrl: string | null;
}

const Dashboard: React.FC<DashboardProps> = ({ videoUrl }) => {
  return (
    <main style={{ flex: 1, padding: "20px" }}>
      {videoUrl ? (
        <iframe
          width="100%"
          height="500"
          src={videoUrl}
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <h2>Select a topic to watch the video</h2>
      )}
    </main>
  );
};

export default Dashboard;
