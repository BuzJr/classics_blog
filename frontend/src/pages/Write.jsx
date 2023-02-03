import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { AuthContext } from "../context/authContext.js";

const Write = () => {
  const state = useLocation().state;
  const [desc, setDesc] = useState(state?.desc || "");
  const [text, setText] = useState(state?.text || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const { currentUser } = useContext(AuthContext)

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state? await axios.put(`/posts/${state.id}`, {
            title,
            desc: desc,
            text: text,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: desc,
            text: text,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
        {currentUser?.username === "Nate" && <div className="content">
          <input
            type="text" 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="descContainer">
            <ReactQuill
              className="editor" 
              placeholder="Description"
              theme="snow" 
              value={desc} 
              onChange={setDesc}
          />
        </div>
        <div className="textContainer">
            <ReactQuill
              className="editor" 
              placeholder="Text"
              theme="snow" 
              value={text} 
              onChange={setText}
          />
        </div>
      </div>}
        {currentUser?.username === "Nate" && <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              style={{ display: "none" }} type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])}
            />
            <label className="file" htmlFor="file">
              Upload Image
            </label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button onClick={handleClick}>Publish</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
          <div className="cat">
            <input type="radio" checked={cat === "poems"} name='cat' value={"poems"} id='poems' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="poem">POEM</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "books"} name='cat' value={"books"} id='books' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="book">BOOK</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "history"} name='cat' value={"history"} id='history' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="history">HISTORY</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "media"} name='cat' value={"media"} id='media' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="Media">Media</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "other"} name='cat' value={"other"} id='other' onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="Other">Other</label>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Write