import React from "react";

import {
  FaApple,
  FaAtlassian,
  FaArtstation,
  FaTwitter,
  FaTypo3,
} from "react-icons/fa";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="card">
        <ReactIcon icon={<FaApple />} />
        <ReactIcon icon={<FaAtlassian />} />
        <ReactIcon icon={<FaArtstation />} />
        <ReactIcon icon={<FaTwitter />} />
        <ReactIcon icon={<FaTypo3 />} />
      </div>
    </div>
  );
}

const ReactIcon = ({ icon }) => <div className="iconContainer">{icon}</div>;

export default App;
