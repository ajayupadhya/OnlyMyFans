import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiNotificationLine } from "react-icons/ri";
import { BiMessageAlt } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
const Left = () => {
  const size = 30;
  return (
    <div className="only__myFans__container__left">
      <div className="avatarName">
        <p>AU</p>
      </div>
      <div className="icons__style">
        <AiOutlineHome size={size} />
        <span>Home</span>
      </div>
      <div className="icons__style">
        <RiNotificationLine size={size} />
        <span>Notification</span>
      </div>
      <div className="icons__style">
        <BiMessageAlt size={size} />
        <span>Message</span>
      </div>

      <div className="icons__style">
        <BiBookmark size={size} />
        <span>Bookmarks</span>
      </div>
      <div className="icons__style">
        <BsList size={size} />

        <span>Lists</span>
      </div>
      <div className="icons__style">
        <CgProfile size={size} />
        <span>My profile</span>
      </div>

      <div className="icons__style">
        <CgMoreO size={size} />
        <span>More</span>
      </div>
      <div className="btn__newPost__primary__color">
        <AiOutlinePlus size={size} />
        <span>New Post</span>
      </div>
    </div>
  );
};

export default Left;
