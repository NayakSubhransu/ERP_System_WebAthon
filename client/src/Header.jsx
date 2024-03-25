// // Header.js
// import React, { useState } from "react";
// import "./App.css"; // Make sure to create and include a CSS file for styling
// import {
//   BsFillBellFill,
//   BsFillEnvelopeFill,
//   BsPersonCircle,
// } from "react-icons/bs";

// import UserProfileDialog from "./UserProfileDialog";

// function Header() {
//   const [showUserProfile, setShowUserProfile] = useState(false);

//   // Toggle visibility functions for each dialog
//   const toggleUserProfile = () => setShowUserProfile(!showUserProfile);

//   return (
//     <header className="header">
//       <h2>E-INFORMATION MANAGEMENT SYSTEM</h2>

//       <div className="header-right">
//         <BsPersonCircle className="icon" onClick={toggleUserProfile} />
//         {showUserProfile && <UserProfileDialog />}
//       </div>
//     </header>
//   );
// }

// export default Header;


// Header.js
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BsPersonCircle } from "react-icons/bs";
import UserProfileDialog from "./UserProfileDialog";

function Header() {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const dialogRef = useRef(null); // Ref for the dialog

  const toggleUserProfile = () => setShowUserProfile(!showUserProfile);

  // Function to close UserProfile dialog if clicking outside
  const handleClickOutside = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      setShowUserProfile(false);
    }
  };

  useEffect(() => {
    if (showUserProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserProfile]);

  return (
    <header className="header">
      <h2>E-INFORMATION MANAGEMENT SYSTEM</h2>

      <div className="header-right">
        <BsPersonCircle className="icon" onClick={toggleUserProfile} />
        {showUserProfile && <UserProfileDialog ref={dialogRef} />}
      </div>
    </header>
  );
}

export default Header;
