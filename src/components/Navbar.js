import React from "react";

const Navbar = ({ isAuthenticated, onLogin, onLogout }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b bg-white">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight">Atlys</span>
      </div>
      <div>
        {isAuthenticated ? (
          <button
            className="text-gray-700 hover:text-black font-semibold"
            onClick={onLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="text-gray-700 hover:text-black font-semibold"
            onClick={onLogin}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
