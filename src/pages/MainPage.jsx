import React, { useState, useEffect } from "react";
import { auth } from "../components/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get the user info from Firebase when the component is mounted
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName); // Set the user's name
    }
  }, []);

  const handleLogout = async () => {
    try {
      // Sign the user out from Firebase
      await signOut(auth);
      // Redirect to the homepage after logout
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <section className="flex justify-center items-center flex-col mt-8">
      <h1 className="text-3xl mb-4">Main Page</h1>
      {userName && (
        <h2 className="text-xl mb-4">Welcome, {userName}!</h2>
      )}
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </section>
  );
};

export default MainPage;
