import React from "react";

const ProfileNav = () => {
  return (
    <div>
      <div className="dropdown dropdown-hover">
        <Link
          tabIndex={0}
          onClick={handleLogout}
          className="w-12 h-12 border rounded-full m-1"
        >
          Hover
        </Link>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileNav;
