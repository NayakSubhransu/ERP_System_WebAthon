// UserProfileDialog.js
import React from "react";
import "./UserProfileDialog.css"; // Ensure you have the corresponding CSS file

const UserProfileDialog = () => {
  const signOut = () => {
    // Implement sign-out logic here
    // For demonstration, redirecting to sign-in page
  };

  return (
    <div className="user-profile-dialog">
      {/* <button onClick={goToDashboard}>Dashboard</button>
      <button onClick={signOut}>Sign Out</button> */}

      <button>Dashboard</button>
      <button>Sign Out</button>
    </div>
  );
};

export default UserProfileDialog;
