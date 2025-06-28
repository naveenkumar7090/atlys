import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Feed from "../pages/Feed";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Navbar from "./Navbar";

function AppRoutes({
  isAuthenticated,
  setIsAuthenticated,
  posts,
  setPosts,
  userName,
  setUserName,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      !isAuthenticated &&
      location.pathname !== "/signup" &&
      location.pathname !== "/signin"
    ) {
      navigate("/signin");
    }
  }, [isAuthenticated, location.pathname, navigate]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName("");
  };
  const handleSignIn = (name = "You") => {
    setIsAuthenticated(true);
    setUserName(name);
    navigate("/feed");
  };
  const handleSignUp = (name = "You") => {
    setIsAuthenticated(true);
    setUserName(name);
    navigate("/feed");
  };
  const handlePublish = (text) => {
    setPosts([
      {
        author: userName || "You",
        time: "Just now",
        emoji: "😊",
        text,
      },
      ...posts,
    ]);
  };

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/feed"
          element={
            isAuthenticated ? (
              <Feed
                posts={posts}
                onPublish={handlePublish}
                isAuthenticated={isAuthenticated}
              />
            ) : null
          }
        />
        <Route
          path="/signin"
          element={
            <SignIn
              onSignIn={(name) => handleSignIn(name)}
              switchToSignUp={() => navigate("/signup")}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              onSignUp={(name) => handleSignUp(name)}
              switchToSignIn={() => navigate("/signin")}
            />
          }
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
