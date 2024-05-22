import React from "react";
import Users from "../users/users";
import "./posts.css";
import { RxAvatar } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Posts() {
  return (
    <div className="posts">
      <div className="headerAuther">
        <div className="postHeader">
          {" "}
          <RxAvatar className="avatar" /> <></>
          <Users
            className="userName"
            userName="the_Artist"
          /> <GoDotFill /> <span>12h</span>
        </div>

        <div className="threeDots">
          <BsThreeDots />
        </div>
      </div>

      <div className="postImage">
        <img
          src="https://preview.redd.it/4pc1aajyhcf81.jpg?width=640&crop=smart&auto=webp&s=c8a9975330208851059679323b8f6ae27a873b10"
          alt="Anthony DeRosa from Pexels"
        ></img>
      </div>

      <div className="postFooter">
        <div className="postFooterIcon">
          <div className="postFooterMainIcons">
            {" "}
            <FaHeart className="postIcons" />
            <FaComment className="postIcons" />
            <FaTelegramPlane className="postIcons" />
          </div>
          <div className="postIconSave">
            {" "}
            <FaBookmark className="postIcons" />{" "}
          </div>
        </div>
        Liked by Anon45 and 134 others
        <div className="caption">
          <span>
            <Users userName="the_Artist" />
          </span>{" "}
          My best work {/*for some reason adding an empty space doesn't work*/}
        </div>
        <div className="comments">
          view all 14 comments <br />
          add a comment
        </div>
        <br/>
        <div className="headerAuther">
          <div className="postHeader">
            {" "}
            <RxAvatar className="avatar" /> <Users userName="hey_BIG_HEAD" /> <GoDotFill />{" "}
            <span>3d</span>
          </div>

          <div className="threeDots">
            <BsThreeDots />
          </div>
        </div>
        <div className="postImage">
          <img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/megamind-in-front-of-glowing-robots.jpg"
            alt="mega mind "
          ></img>
        </div>
        <div className="postFooter">
          <div className="postFooterIcon">
            <div className="postFooterMainIcons">
              {" "}
              <FaHeart className="postIcons" />
              <FaComment className="postIcons" />
              <FaTelegramPlane className="postIcons" />
            </div>
            <div className="postIconSave">
              {" "}
              <FaBookmark className="postIcons" />{" "}
            </div>
          </div>
          Liked by Roxxane_R and 14 others
          <div className="caption">
            <span>
              <Users userName="hey_BIG_HEAD" />
            </span>{" "}
            Oh I look so good!{" "}
            {/*for some reason adding an empty space doesn't work*/}
          </div>
          <div className="comments">
            view all 2 comments <br />
            add a comment
          </div>
          <br/>
        </div>
        <div className="headerAuther">
          <div className="postHeader">
            {" "}
            <RxAvatar className="avatar" /> <Users userName="tHe_cOoL_gUys" /> <GoDotFill />{" "}
            <span>1h</span>
          </div>

          <div className="threeDots">
            <BsThreeDots />
          </div>
        </div>
        <div className="postImage">
          <img src="https://i.redd.it/37k6ez07gc221.jpg" alt="mega mind "></img>
        </div>
        <div className="postFooter">
          <div className="postFooterIcon">
            <div className="postFooterMainIcons">
              {" "}
              <FaHeart className="postIcons" />
              <FaComment className="postIcons" />
              <FaTelegramPlane className="postIcons" />
            </div>
            <div className="postIconSave">
              {" "}
              <FaBookmark className="postIcons" />{" "}
            </div>
          </div>
          Liked by tHe_dogs and 347 others
          <div className="caption">
            <span>
              <Users userName="tHe_cOoL_gUys" />
            </span>{" "}
            the crew {/*for some reason adding an empty space doesn't work*/}
          </div>
          <div className="comments">
            view all 52 comments <br />
            add a comment
          </div>
        </div>
      </div>

      {/* <Users userName="hey_BIG_HEAD" /> */}
    </div>
  );
}

export default Posts;
