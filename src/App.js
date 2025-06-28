import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState("");
  return (
    <Router>
      <AppRoutes
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        posts={posts}
        setPosts={setPosts}
        userName={userName}
        setUserName={setUserName}
      />
    </Router>
  );
}

export default App;
