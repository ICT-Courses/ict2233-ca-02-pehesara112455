import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-6xl font-bold text-emerald-700 mb-4">404</h1>
      <p className="text-gray-600 text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;