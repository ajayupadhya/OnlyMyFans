import Link from "next/link";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineVerified } from "react-icons/md";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { BiBookmark } from "react-icons/bi";
import ReactPlayer from "react-player";
const Post = () => {
  return (
    <div className="post__onlyMyFans__container">
      <div className="post__onlyMyFans__header">
        <div className="post__onlyMyFans__header__avatar">
          <Image
            src={Logo}
            alt="Picture of the author"
            width={48}
            height={48}
          />
        </div>

        <div className="post__onlyMyFans__header__userName">
          <span>
            <Link href="/">OnlyMyFans</Link> <MdOutlineVerified />
          </span>

          <Link href="/">@onlymyfans</Link>
        </div>
        <div className="post__onlyMyFans__header__timing">
          <Link href="/">6 hours ago</Link>
          <BiDotsHorizontalRounded />
        </div>
      </div>
      <div className="post__onlyMyFans__post">
        <p>
          It’s time to get trendy as fashion designer @oneluvjack has just
          joined us! 🤩🔥 The L.A. based artist and screenprinter is here to
          share exclusive insight into his creative process, giving fans an
          inside look into the apparel industry! 🙌👨‍🎨 Jack makes his garments
          with love and he can’t wait to inspire & build a community of
          like-minded individuals who are passionate about meaningful clothing!
          💯👕 So find your purpose and subscribe at: onlyfans.com/oneluvjack
        </p>
      </div>
      <div className="post__onlyMyFans__video">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </div>
      <div className="post__onlyMyFans__like__section">
        <div>
          <AiOutlineHeart size={30} />
          <GoCommentDiscussion size={30} />
        </div>
        <BiBookmark size={30} />
      </div>
      <div className="post__onlyMyFans__like__likes_count">113 Likes</div>
    </div>
  );
};

export default Post;
