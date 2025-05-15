import React from "react";
import { getInitials } from "../../utils/helpers/getInitials";

const sizeClassMap = {
  xs: "avatar-xs",
  sm: "avatar-sm",
  md: "avatar-md",
  lg: "avatar-lg",
};

const UserAvatar = ({ fullName, imageUrl, size = "sm", className = "" }) => {
  const hasImage = imageUrl && imageUrl.trim() !== "";
  const initials = getInitials(fullName);
  const sizeClass = sizeClassMap[size] || "avatar-md";

  return (
    <span
      className={`avatar ${sizeClass} ${className} `}
      style={{
        backgroundImage: hasImage ? `url(${imageUrl})` : "none",
      }}
    >
      {!hasImage && initials}
    </span>
  );
};

export default UserAvatar;
