import "./profile.css";
import { useEffect, useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import Posts from "../../components/posts/Posts";
import { useLocation } from "react-router";

export default function Profile() {

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const { user, dispatch } = useContext(Context);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="profile">
      <div className="headerTitles">
        <span className="headerTitleSm">My Profile</span>
        <span className="headerTitleLg">{user.username}</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1638386881532-3f13946d6e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
        <div>
        <span className="profileTitle">Account Details: </span>
          <span className="profileDeleteTitle">Delete Account</span>
        </div>
        <br></br>
          <h2>Email : {user.email}</h2>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <span className="profileTitle">Recommended Posts: </span>
          <Posts posts={posts} />
    </div>
  );
          }
