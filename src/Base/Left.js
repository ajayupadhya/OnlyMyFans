import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiNotificationLine } from "react-icons/ri";
import { BiMessageAlt } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { signOut } from "../../Redux/action/auth";
import { connect } from "react-redux";
import { useRouter } from "next/router";
const Left = ({ signOut, user_data }) => {
  const size = 30;
  const router = useRouter();

  const [modal, setModal] = useState(false);

  return (
    <div className="only__myFans__container__left">
      <div className="btn__main_info_sign_out" onClick={() => signOut()}>
        <span>{user_data?.name?.toUpperCase().substring(0, 2)}</span>
        <div>
          <p>{user_data?.name}</p>
          <span>{user_data?.email}</span>
        </div>
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
        <AiOutlinePlus size={25} />
        <span>New Post</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  is_logged_in: state.AuthReducer.is_logged_in,
  user_data: state.UserReducer.user_data,
});

export default connect(mapStateToProps, {
  signOut,
})(Left);
